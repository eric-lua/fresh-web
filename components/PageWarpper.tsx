import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";

type Props = {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const PageWarpper = ({ children, title }: Props) => {
  return (<>
    <Head>
      {title && <title>{title}</title>}
      <link rel="stylesheet" href="/icons.css" />
    </Head>
    <div class="h-screen flex flex-col">
      <header>
        <nav class="flex justify-start p-4">
          <a class="w-20" href="/">Home</a>
          <a className="w-20" href="/about">About</a>
          <a className="w-20" href="/store">store</a>
          <a className="w-20" href="/search">search</a>
          <a className="w-20" href="/joke">joke</a>
          <a className="w-20" href="/icons">icons</a>
          <a className="w-20" href="/cms/mysql">Mysql</a>
          <a className="w-20" href="/cms/redis">Redis</a>
        </nav>
      </header>

      <main class="flex-1">{children}</main>
    </div>
  </>)
}

export default PageWarpper;
