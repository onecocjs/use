import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'use',
  favicon: 'https://dura.oss-cn-hangzhou.aliyuncs.com/logo.png',
  logo: 'https://dura.oss-cn-hangzhou.aliyuncs.com/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  copy: ['CNAME'],
  dynamicImport: {
    loading: '@/Loading',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],

  // more config: https://d.umijs.org/config
});
