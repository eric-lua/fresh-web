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
        <div class="inline-block w-6 h-6 border-2 border-gray-800 rounded-full border-t-green-400 animate-my-spin1 before:content=['zzz'] before:h-10 before:w-10 before:bg-red-0 before:absolute before:inset-0 before:top-4"></div>
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
        <div class="before:content-['Mobile'] md:after:content-['Desktop']"> - </div>

        <hr />
        <hr />
        <div class="">
          {/* <i className="inline-block text-black absolute mt-0 ml-0 w-[21px] h-[21px]  before:tw-content-[''] before:empty-content before:absolute before:top-10px before:w-full before:h-full before:bg-[currentColor] "></i> */}
          {/* 
          color: #000;
          position: absolute;
          margin-left: 2px;
          margin-top: 10px;
          width: 16px;
          height: 1px;
          background-color: currentColor;

          before:
          content: '';
          position: absolute;
          right: 1px;
          top: -5px;
          width: 10px;
          height: 10px;
          border-top: solid 1px currentColor;
          border-right: solid 1px currentColor;
          -webkit-transform: rotate(45deg);
                  transform: rotate(45deg);
          */}
          {/* <i class="w-[20px] h-1 text- bg-current relative ml-[2px] mt-[10px] before:content-[''] before:absolute before:right-px before:top-[-5px] before:w-[10px] before:h-[10px] before:border-t-1 before:border-r-1 before:border-current before:rotate-45  "></i> */}
          <div className="color-of-blue">测试按钮样式1</div>
          <div className="btn-blue color-of-red">测试按钮样式2</div>
          <div className="box coral box-color box-color-coral box?color?coral box\\?color\\=purple\\&rounded\\">测试按钮样式3</div>
          <div class="icons-black w-16 h-16"></div>
        </div>

        <br /> !!!<br />
        <hr />
        <hr />
        <div>
          <i className="icon close"></i>
        </div>
      </div>
    </PageWarpper>
  );
}
