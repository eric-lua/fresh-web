import PageWarpper from "../components/PageWarpper.tsx";
// NOTE  http://localhost:3000/#/icon/focus


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
        <div className="color-of-red before:content-['hello\_world']">
        class icons
        class icons
        class icons
        </div>
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

        {/* 纯 tailwind css 实现一个 对号 */}
        <div class="w-2 "></div>
        <div class="inline-block w-8 h-8 border-2 border-gray-800 rounded-full border-t-green-400 animate-my-spin after-content"></div>
        <br />

        {/* 纯 css 实现一个搜索图标 */}
        <div class="search-icon"></div>
        <div class="inline-block w-6 h-6 border-2 border-gray-800 rounded-full border-t-green-400 animate-my-spin1 before:content=['zzz'] before:h-10 before:w-10 before:bg-red-500 before:absolute before:inset-0 before:top-4"></div>
        <style>
          {/* .search-icon {
            width: 24px;
          height: 24px;
          border: 2px solid #ccc;
          border-radius: 50%;
          border-top-color: #333;
          animation: loading 1s linear infinite;
          position: relative;
          }
          .search-icon::before {
            content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #333;
          } */}
        </style>

        <br />
        {/* <div before="Hello World" class="before:content-[attr(before)]"></div> */}
        {/* <div before="Hello World" class="before:content-['attr(before)']"></div> */}
        {/* <div class="before:content-['attr(before)']"></div> */}
        <div class="before:content-['Hello_World']"></div>
        <div class="before:content-['Mobile'] md:before:content-['Desktop']"></div>

        <hr />
        <hr />
        <div>
          <i className="icon close \
            // main
            inline-block text-black bg-black absolute mt-0 ml-0 w-[21px] h-[21px] \
            // before
            before:tw-content-[''] before:empty-content before:absolute before:top-10px before:w-full before:h-full before:bg-[currentColor] \
          "></i>
        </div>
      </div>
    </PageWarpper>
  );
}
