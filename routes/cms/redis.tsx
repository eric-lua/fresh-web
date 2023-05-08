import { PageProps } from '$fresh/server.ts'
import PageWarpper from "../../components/PageWarpper.tsx";
import RedisManagerIsland from "../../islands/RedisManagerIsland.tsx";

const RedisManager = (props: PageProps) => {
  return <PageWarpper title='Redis | Test'><RedisManagerIsland /></PageWarpper>;
}

export default RedisManager