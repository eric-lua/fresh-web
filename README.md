# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## 踩坑日记
1. island 只有在 islands 目录下才能响应 useEffect.
2. 全局类型申明使用 `compilerOptions.types` 配置单个文件才能生效。更多方案详见：https://deno.land/manual@v1.32.1/advanced/typescript/types
3. 
