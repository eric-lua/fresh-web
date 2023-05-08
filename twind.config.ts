// deno-lint-ignore-file ban-ts-comment
import { css, defineConfig, style } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix"
import presetTailwind from "@twind/preset-tailwind";
import * as colors from "@twind/preset-tailwind/colors";
import { Options } from "$fresh/plugins/twindv1.ts";

export default {
  ...defineConfig({
    presets: [presetAutoprefix(), presetTailwind({ disablePreflight: true })],
    theme: {
      colors: {
        black: '#000',
        white: '#fff',
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
        sky: colors.sky,
        slate: colors.slate,
        transparent: "transparent",
      },
      extend: {
        // 动画定义
        keyframes: {
          'my-spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          // 心电图wangyou动画
          'my-spin1': {
            '0%': { transform: 'rotate(0deg)' },
            '50%': { transform: 'rotate(180deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          // 线性向右旋转移动2倍距离，再回到原点
          'my-spin2': {
            '0%': { transform: 'rotate(0deg) translateX(0)' },
            '50%': { transform: 'rotate(180deg) translateX(100%)' },
            '100%': { transform: 'rotate(360deg) translateX(0)' },
          },
          // 线性向右移动2倍距离，再回到原点
          'my-spin3': {
            '0%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          // 线性向右边旋转边移动2倍距离，再回到原点
          'my-spin4': {
            '0%': { transform: 'rotate(0deg) translateX(0)' },
            '50%': { transform: 'rotate(180deg) translateX(100%)' },
            '100%': { transform: 'rotate(360deg) translateX(0)' },
          },
          // 向右一边旋转一边水平移动2倍距离，再回到原点
          'my-spin5': {
            '0%': { transform: 'rotate(0deg) translateX(0)' },
            '50%': { transform: 'rotate(180deg) translateX(100%)' },
            '100%': { transform: 'rotate(360deg) translateX(0)' },
          },
          // 向右一边绕中心点旋转一边水平移动4倍距离，再回到原点
          'my-spin6': {
            '0%': { transform: 'rotate(0deg) translateX(0)' },
            '50%': { transform: 'rotate(180deg) translateX(200%)' },
            '100%': { transform: 'rotate(360deg) translateX(0)' },
          },
          // 向右滚动4倍宽度距离，再回到原点
          'my-spin7': {
            '0%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(200%)' },
            '100%': { transform: 'translateX(0)' },
          },
          // 向右旋转滚动4倍宽度距离，再回到原点
          'my-spin8': {
            '0%': { transform: 'rotate(0deg) translateX(0)' },
            '50%': { transform: 'rotate(180deg) translateX(200%)' },
            '100%': { transform: 'rotate(360deg) translateX(0)' },
          },
          // 模拟车轮向右滚动4倍宽度距离，再回到原点
          'my-test': {
            // 贝塞尔曲线
            '0%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(200%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        // 动画名称
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'my-spin': 'my-spin 2.5s linear infinite',
          'my-spin1': 'my-spin .5s linear infinite',
          // 改为曲线旋转
          'my-spin2': 'my-spin .5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          // 改为往右旋转
          'my-spin3': 'my-spin .5s cubic-bezier(0, 0, 0.2, 1) infinite',
          // 改为不规律旋转
          'my-spin4': 'my-test 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      },
    },
    rules: [
      // test
      ["color-of-red", { color: "red" }],
      ["color-of-blue", () => ({ color: "blue" })],
      /** 官方示例 */
      // 静态css变量名
      ['hidden', { display: 'none' }],
      // 动态css变量名 
      // @ts-ignore
      ['m-(\\d+)', (match) => ({ margin: `${match[1] / 4}rem` })],
      // 静态变量属性，动态变量名
      ['table-(auto|fixed)', 'tableLayout'],
      // 模块化css变量
      ['card', 'py-2 px-4 font-semibold rounded-lg shadow-md'],
      // 动态模块化css变量
      ['card-', ({ $$ }) => `bg-${$$}-400 text-${$$}-100 py-2 px-4 rounded-lg`],
      // 单个css属性别名，需要加~前缀，否则会被当做css变量
      ['red', '~(text-red-100)'],
      // @apply
      ['btn-green', '@(bg-green-500 hover:bg-green-700 text-white)'],
      ['btn-', ({ $$ }) => `@(bg-${$$}-400/75 text-${$$}-100 py-2 px-4 rounded-lg)`],
      // style 属性规则 FIXME  不会用o(╥﹏╥)o
      [
        'box\\?(.+)',
        style({
          props: {
            color: {
              coral: css({
                backgroundColor: 'coral',
              }),
              purple: css`
                background-color: purple;
              `,
            },
            rounded: {
              '': 'rounded',
              md: 'rounded-md',
            },
          },
        }),
      ],
    ],
  }),
  selfURL: import.meta.url,
} as Options;
