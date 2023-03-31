import { JSX } from "preact/jsx-runtime";

type Props = {
  children: JSX.Element | JSX.Element[];
}

const PageWarpper = ({ children }: Props) => {
  return (
    <div>
      <header>
        <nav class="flex justify-start p-4">
          <a class="w-20" href="/">Home</a>
          <a className="w-20" href="/about">About</a>
          <a className="w-20" href="/store">store</a>
          <a className="w-20" href="/search">search</a>
          <a className="w-20" href="/joke">joke</a>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default PageWarpper;
