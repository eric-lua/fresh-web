// deno-lint-ignore-file ban-ts-comment
import { Options } from "$fresh/plugins/twind.ts";

// @ts-ignore
export default {
  selfURL: import.meta.url,
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  theme: {
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
    }
  }
} as Options;
