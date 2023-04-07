import { JSX } from "preact";
import { RenderJSXNodeFn } from "../typing/index.ts";

export declare namespace IPagination {
  interface Props {
    total: number;
    page?: Partial<PageInfo>;
    responsive?: boolean; // 根据屏幕宽高自适应修改pageInfo.size
    className?: string;
    disabled?: boolean; // default false
    snall?: boolean; // default false. 是否使用小型分页样式
    pageBtnCount?: PageBtnCount; // default 5. 页码按钮的数量，超过限制会折叠显示
    pageSizeOptions?: number[]; // default [10, 25, 50, 100, 200]
    layout?: Components[]; // default [Components.Total, Components.SizeSelect, Components.PageBtn, Components.JumpPage] => 第x页、共x页、共x条、切换size、分页、前往第x页
    turnPagesBtn?: TurnPagesBtn;

    onBeforeChange?: OnBeforeChangeEvtFn; // Promise.reject 会阻止分页改变
    onChange?: OnChangeEvtFn;
    onPageSizeChange?: OnPageSizeChangeEvtFn;

    // DEBUG  
    debug?: boolean;
  }

  interface PageInfo {
    size: number; // default 10
    index: number; // default 1
  }

  type PageBtnCount = 3 | 5 | 7 | 9 | 11 | 13 | 15;

  /**
   * PageNo: 当前第几页   
   * PageTotal: 总共多少页    
   * Total: 总数多少    
   * SizeSelect: 分页大小选择   
   * PageBtn: 分页页码按钮    
   * JumpPage: 页面跳转   
   */
  type Components = | 'PageNo' | 'PageTotal' | 'Total' | 'SizeSelect' | 'PageBtn' | 'JumpPage';

  interface TurnPagesBtn {
    prev?: JSX.Element | RenderJSXNodeFn;
    next?: JSX.Element | RenderJSXNodeFn;
  }

  interface OnBeforeChangeEvtFn {
    (curPageInfo?: PageInfo, oldPageInfo?: PageInfo): Promise<boolean>;
    (curPageInfo?: PageInfo, oldPageInfo?: PageInfo): void;
  }

  interface OnChangeEvtFn {
    (pageInfo?: PageInfo): void;
  }

  interface OnPageSizeChangeEvtFn {
    (pageInfo?: PageInfo): void;
  }

  interface PageBtn {
    type: PageBtnType;
    value: string | number;
  }

  type PageBtnType = 'prev' | 'next' | 'prevPage' | 'nextPage' | 'page'
}
