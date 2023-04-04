import { JSX } from "preact/jsx-runtime";

type Props = {
  children: JSX.Element | JSX.Element[];
}

const PageWarpper = ({ children }: Props) => {
  return (
    <div class="h-screen flex flex-col">
      <header>
        <nav class="flex justify-start p-4">
          <a class="w-20" href="/">Home</a>
          <a className="w-20" href="/about">About</a>
          <a className="w-20" href="/store">store</a>
          <a className="w-20" href="/search">search</a>
          <a className="w-20" href="/joke">joke</a>
          <a className="w-20" href="/cms/mysql">Mysql</a>
        </nav>
      </header>

      <main class="flex-1">{children}</main>
    </div>
  )
}

export default PageWarpper;
