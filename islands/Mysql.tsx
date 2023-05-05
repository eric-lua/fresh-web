// NOTE  islands 属于前端渲染模块，前端模块不能直接调用后台处理
// import { inserts } from '../models/mysql-mod.ts'

type Props = {}

const Mysql = (props: Props) => {
  return (
    <div>
      <div
        onClick={async () => {
          console.log('inserts: inserts');
          const res = await fetch('/api/inserts', {

          })
          console.log('插入结果：', await res.json());
        }}>Mysql inserts</div>
    </div>
  )
}
export default Mysql;
