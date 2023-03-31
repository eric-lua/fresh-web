import { UnknownPageProps } from "$fresh/server.ts";

type Props = {}

const NotFoundPage = ({ url }: UnknownPageProps) => {
  return (
    <div>404</div>
  )
}

export default NotFoundPage
