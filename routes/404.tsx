import { UnknownPageProps } from "$fresh/server.ts";
import PageWarpper from "../components/PageWarpper.tsx";

type Props = {}

const NotFoundPage = ({ url }: UnknownPageProps) => {
  return (
    <PageWarpper title="404 Not Found.">
      <div>404</div>
    </PageWarpper>
  )
}

export default NotFoundPage
