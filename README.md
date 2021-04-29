# webpack-splitChunks
webpack代码拆分

# 在webpack中 添加如下配置会对代码进行拆分，但是在js 下一切正常在ts 下会发现无拆分
```
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
```

# 解决办法 在`tsconfig.json`中修改如下配置
```
"module": "esnext",  
"removeComments": false
```
+ `"module": "esnext"`:将设置module为esnext会将动态导入保留在输出中，以供webpack处理和执行代码拆分。
+ `"removeComments": false`: webpack 代码拆分依赖于 `/* webpackChunkName: "my-chunk-name" */`,将removeComments置为false，将保留注释，以供webpack拆分代码

[源码](https://github.com/fssqLove/webpack-splitChunks)
