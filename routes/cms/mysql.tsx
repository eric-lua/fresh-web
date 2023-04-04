import { PageProps } from '$fresh/server.ts'
import PageWarpper from "../../components/PageWarpper.tsx";
import MysqlManagerIsland from "../../islands/MysqlManagerIsland.tsx";

const MysqlManager = (props: PageProps) => {
  return <PageWarpper><MysqlManagerIsland /></PageWarpper>;
}

export default MysqlManager