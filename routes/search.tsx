import { Handlers, PageProps } from "$fresh/server.ts";
import PageWarpper from "../components/PageWarpper.tsx";
import PostTest from "../islands/PostTest.tsx";
import { useParams } from "../utils/request.ts";
import { useState } from "preact/hooks";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    console.log('重新渲染 search');
    
    const { q } = useParams<{ q: string }>(req);

    const results = NAMES.filter((name) => name.includes(q));
    return ctx.render({ results, query: q });
  },
  // POST 会导致页面路由变接口路由
  async POST(req, ctx) {
    console.log('search POST: req', req);
    console.log('search POST: ctx', ctx);
    const json = await Promise.resolve({
      a: 'a',
      b: 'b',
    })
    const resp = new Response(JSON.stringify(json))
    // resp.headers.set('content-type', 'application/json');
    return resp;
  }
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <PageWarpper>
      <div>
        <form method="get">
          <input type="text" name="q" value={query} />
          <button type="submit">Search version: 04031601</button>
        </form>
        <ul>
          {results.map((name) => <li key={name}>{name}</li>)}
        </ul>
        <br /><hr /><br />
        <PostTest />
      </div>
    </PageWarpper>
  );
}