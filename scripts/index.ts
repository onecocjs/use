// import rollup from 'rollup';
// import typescript from 'rollup-plugin-typescript2';
// import { terser } from 'rollup-plugin-terser';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import json from '@rollup/plugin-json';
// import notify from 'rollup-plugin-notify';
// import progress from 'rollup-plugin-progress';

const glob = require('glob');
const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const notify = require('rollup-plugin-notify');
const progress = require('rollup-plugin-progress');

glob('packages/**/src/index.ts', {}, function(err: any, files: string[]) {
  files
    .map(n => `${process.cwd()}/${n}`)
    .forEach(async x => {
      console.log(x);
      const bundle = await rollup.rollup({
        input: x,
        plugins: [
          terser(),
          progress(),
          typescript({
            tsconfigDefaults: {
              compilerOptions: {
                moduleResolution: 'Node',
                target: 'ES5',
                esModuleInterop: true,
                jsx: 'react',
                sourceMap: true,
                noEmitOnError: true,
                allowSyntheticDefaultImports: true,
                declaration: true,
                declarationDir: 'lib',
              },
              include: [`${process.cwd()}/src`],
              exclude: [
                `${process.cwd()}/node_modules`,
                `${process.cwd()}/__tests__`,
              ],
            },
          }),
          notify({
            success: true,
          }),
          json(),
          nodeResolve(),
          commonjs(),
        ],
      });
    });
});
