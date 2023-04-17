import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { IPagination } from "./Pagination.typing.ts";
import { ILibErrorCode } from "../typing/index.ts";
import { Select } from "../Select/index.ts";
import { Button } from "../Button/index.ts";

export const Pagination = ({
  total, page, layout = [
    'JumpPage',
    'PageNo',
    'PageTotal',
    'Total',
    'SizeSelect',
    'PageBtn',
  ],
  pageSizeOptions = [10, 25, 50, 100, 200],
  pageBtnCount = 5,
  className = '',
  debug = false,
  onBeforeChange,
  onChange,
  onPageSizeChange,
}: IPagination.Props) => {
  // DEBUG 
  // deno-lint-ignore no-explicit-any
  const log = (...args: any[]) => (debug && console.log(...args));

  const [pageInfo, setPageInfo] = useState<IPagination.PageInfo>({ size: 10, index: 1, ...page });

  // ///////////////////////
  const handlePageBtnClick = (type: IPagination.PageBtnType, value: number | string) => {
    log('handlePageBtnClick: ', {
      type, value,
    });
    switch (type) {
      case 'page': {
        setPageInfo({ ...pageInfo, index: typeof value === 'number' ? value : parseInt(value, 10) });
        break;
      }
      case 'prev': {
        setPageInfo({ ...pageInfo, index: pageInfo.index > 1 ? pageInfo.index - 1 : 1 });
        break;
      }
      case 'next': {
        setPageInfo({ ...pageInfo, index: pageInfo.index < getTotalPage() ? pageInfo.index + 1 : getTotalPage() });
        break;
      }
      default:
        log('其他情 况：！待处理')
        break;
    }
  }

  // ///////////////////////
  // 获取总共多少页
  const getTotalPage: () => number = () => Math.ceil(total / (pageInfo?.size ?? 10));

  // 获取页面大小下拉选择框
  const getSizeOption = () => {
    if (page?.size && !pageSizeOptions.includes(page?.size)) {
      return [...pageSizeOptions, page?.size].sort((a, b) => a - b);
    } else {
      return pageSizeOptions;
    }
  }

  // PageNo = '当前第几页',
  const genPageNo = (comp: IPagination.Components) => {
    return <div key={comp}>第{pageInfo?.index ?? 1}页</div>;
  }
  // PageTotal = '总共多少页',
  const genPageTotal = (comp: IPagination.Components) => {
    return <div key={comp}>共{getTotalPage()}页</div>;
  }
  // Total = '总数多少',
  const genTotal = (comp: IPagination.Components) => {
    return <div key={comp}>共{total}条</div>;
  }
  // SizeSelect = '分页大小选择',
  const genSizeSelect = (comp: IPagination.Components) => {
    // TODO  替换为 Select 组件
    return <Select
      key={comp}
      value={pageInfo.size}
      onChange={(v) => console.log('on select change: ', v)}
      options={getSizeOption().map(item => ({ label: `每页${item}条`, value: item }))}
    />;
    // return <Select  key={comp} value={pageInfo.size} onChange={(v) => console.log('on select change: ',  v)}>

    //   {getSizeOption().map(n => {
    //     console.log('zzzzzzzz: ', n);
    //     return <Select.Option value={n}  key={`pagination-${n}-${Math.random}`} />
    //   })}
    // </Select>

    // return <select key={comp} value={pageInfo.size} onChange={(v) => {
    //   const size = parseInt((v.target as HTMLSelectElement).value, 10);
    //   if (pageInfo.index > Math.ceil(total / size)) {
    //     setPageInfo({ ...pageInfo, size, index: Math.ceil(total / size) });
    //     onPageSizeChange?.({ ...pageInfo, size, index: Math.ceil(total / size) });
    //   } else {
    //     setPageInfo({ ...pageInfo, size })
    //     onPageSizeChange?.({ ...pageInfo, size });
    //   }
    // }}>
    //   {getSizeOption().map(n => <option value={n} key={`pagination-${n}-${Math.random}`}>每页{n}条</option>)}
    // </select>;
  }
  // PageBtn = '分页页码按钮',
  const getBtnList: () => IPagination.PageBtn[] = () => {
    log('当前页码: ', 'size: ', pageInfo.size, 'index:', pageInfo.index);
    const tmp: IPagination.PageBtn[] = [{ type: 'prev', value: '<' }]
    const totalPage = getTotalPage();
    if (totalPage <= pageBtnCount) {
      for (let i = 1; i <= totalPage; i++) {
        tmp.push({ type: 'page', value: i });
      }
    } else {
      if (pageInfo.index <= (pageBtnCount + 1) / 2) {
        for (let i = 1; i <= pageBtnCount; i++) {
          tmp.push({ type: 'page', value: i });
        }
        tmp.push({ type: 'nextPage', value: '...' });
      } else {
        tmp.push({ type: 'prevPage', value: '...' });
        if (pageInfo.index < totalPage - (pageBtnCount - 1) / 2) {
          for (let i = 0; i < pageBtnCount; i++) {
            tmp.push({ type: 'page', value: pageInfo.index + i - ((pageBtnCount - 1) / 2) });
          }
          tmp.push({ type: 'nextPage', value: '...' });
        } else {
          for (let i = 0; i < pageBtnCount; i++) {
            tmp.push({ type: 'page', value: totalPage + i - (pageBtnCount - 1) })
          }
        }
      }
    }
    tmp.push({ type: 'next', value: '>' });
    log('按钮列表：', tmp.map(item => item.value));
    return tmp;
  }
  const genPageBtn = (comp: IPagination.Components) => {
    return <div key={comp}>
      {
        getBtnList().map(({ type, value }, index) => {
          return <Button
            class={`${type === 'page' && value === pageInfo.index ? 'text-blue-800' : ''}`}
            key={`pagination-page-btn-${index}-${Math.random()}`}
            onClick={() => handlePageBtnClick(type, value)}
          >{value}</Button>
        })
      }
    </div>;
  }
  // JumpPage = '页面跳转',
  const genJumpPage = (comp: IPagination.Components) => {
    return <div key={comp}>跳转到<input type="text" onKeyPress={evt => {
      const value = parseInt((evt.target as HTMLInputElement)?.value, 10);
      if (evt.code === 'Enter' && !isNaN(value)) {
        setPageInfo({ ...pageInfo, index: value > getTotalPage() ? getTotalPage() : value })
      }
    }} />页</div>;
  }

  const renderComponents: (component: IPagination.Components) => JSX.Element = (component) => {
    switch (component) {
      case 'PageNo': {
        return genPageNo(component);
      }
      case 'PageTotal': {
        return genPageTotal(component);
      }
      case 'Total': {
        return genTotal(component);
      }
      case 'SizeSelect': {
        return genSizeSelect(component);
      }
      case 'PageBtn': {
        return genPageBtn(component);
      }
      case 'JumpPage': {
        return genJumpPage(component);
      }
      default:
        return <></>;
    }
  }

  useEffect(() => {
    onChange?.(pageInfo);
  }, [pageInfo])

  useEffect(() => {
    if (pageBtnCount < 3 || pageBtnCount > 15 || pageBtnCount % 2 !== 1) {
      const code = ILibErrorCode.ErrorCode.ValueRangeError;
      const message = ILibErrorCode.ErrorMessage.ValueRangeError;
      throw new Error(`Code: ${code}, Message: ${message}`);
    }
  }, [pageBtnCount])

  return (
    <div class={`flex ${className}`} >
      {layout.map(item => renderComponents(item))}
    </div>
  )
}