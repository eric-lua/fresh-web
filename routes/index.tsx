import { Head } from "$fresh/runtime.ts";
import PageWarpper from "../components/PageWarpper.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <PageWarpper>
        <div class="p-4 mx-auto max-w-screen-md">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="my-6">
            Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
            file, and refresh.
          </p>
          {/* <hr /> */}
          <Counter start={3} />
        </div>
      </PageWarpper>
    </>
  );
}
