/*
 * @Description: 文件描述
 * @Version: 1.0
 * @Author: Berton J.
 * @Date: 2019-11-01 20:37:28
 * @LastEditTime: 2019-11-03 22:19:24
 * @LastEditors: Berton J.
 */
// 引入不同环境不同的配置，主要用于webpack、env、serverRuntimeConfig、publicRuntimeConfig
import config from "./config";
import withLess from "@zeit/next-less";

const isProduction = process.env.NODE_ENV === "production";

const conf = {
  // 编译文件的输出目录
  distDir: isProduction ? "../../dist" : "../../.next",
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  // useFileSystemPublicRoutes: false,
  // 是否给每个路由生成Etag
  generateEtags: true,
  // 页面内容缓存配置
  onDemandEntries: {
    // 内容在内存中缓存的时长（ms）
    maxInactiveAge: 25 * 1000,
    // 同时缓存多少个页面
    pagesBufferLength: 2
  },
  // 在pages目录下那种后缀的文件会被认为是页面
  pageExtensions: ["tsx", "ts"],
  // 配置buildId
  generateBuildId: async () => {
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID;
    }

    // 返回null使用默认的unique id
    return null;
  },
  // 手动修改webpack config
  webpack: (config: any, options: any) => {
    // const { isServer } = options;
    // if (isServer) {
    //   const antStyles = /antd\/.*?\/style.*?/;
    //   const origExternals = [...config.externals];

    //   config.externals = [
    //     (context, request, callback) => {
    //       if (request.match(antStyles)) return callback();
    //       if (typeof origExternals[0] === "function") {
    //         origExternals[0](context, request, callback);
    //       } else {
    //         callback();
    //       }
    //     },
    //     ...(typeof origExternals[0] === "function" ? [] : origExternals)
    //   ];

    //   config.module.rules.unshift({
    //     test: antStyles,
    //     use: "null-loader"
    //   });
    // }
    return config;
  },
  // 修改webpackDevMiddleware配置
  webpackDevMiddleware: (config: any) => {
    return config;
  },
  // 可以在页面上通过 procsess.env.customKey 获取 value
  env: {
    customKey: "value"
  },
  // 下面两个要通过 'next/config' 来读取
  // 只有在服务端渲染时才会获取的配置
  serverRuntimeConfig: {
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET
  },
  // 在服务端渲染和客户端渲染都可获取的配置
  publicRuntimeConfig: {
    staticFolder: "/static"
  }
};

export default withLess(conf);
