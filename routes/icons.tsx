import PageWarpper from "../components/PageWarpper.tsx";

export default function () {
  return (
    <PageWarpper title="icons">
      {/* twind 红色 */}
      <div>
        icons
      </div>
      {/* <div class="text-red-500 inline-block animate-spin "> */}
      {/* <div class="text-red-500 inline-block animate-spin-slow "> */}
      <div class="text-red-500 inline-block animate-my-spin4 m-20">
        {/* deno close icon */}
        {/* 支持自定义颜色 */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg> */}
        {/* 改为红色 */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg> */}
        {/* 支持自定义大小 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
          width="24"
          height="24"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>


      </div>
      <div>
        class icons
        <br />
        {/* 使用 twind span 写一个 loading iocn */}
        {/* 只用css实现一个 loading icon */}
        <span class="loading-icon"></span>
        <style>
          {/* .loading-icon {
            display: inline-block;
          width: 24px;
          height: 24px;
          border: 2px solid #ccc;
          border-radius: 50%;
          border-top-color: #333;
          animation: loading 1s linear infinite;
          }
          @keyframes loading {
            to {
              transform: rotate(360deg);
            }
          } */}
        </style>
        {/* 转换为 tailWind 类名 */}
        {/* <span class="loading-icon"></span> */}

        <br />
        <span class="close-icon"></span>
        <br />

      </div>
    </PageWarpper>
  );
}
