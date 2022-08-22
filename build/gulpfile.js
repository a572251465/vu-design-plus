const { series, parallel } = require("gulp");
const { withTaskName, run } = require("./utils");
const { genTypes } = require("./gen-types");
const { vuRoot, outDir } = require("./utils/paths");
const { buildFullComponent } = require("./full-component");
const { buildComponent } = require("./component");

/**
 * @author lihh
 * @description 进行package.json文件复制
 * @returns {(function(): Promise<void>)|*}
 */
const copySourceCode = () => async () => {
  await run(`cp ${vuRoot}/package.json ${outDir}/package.json`);
};

// 1.打包样式 2.打包工具方法 2.打包所有组件 3.打包每个组件 4.生成一个组件库 5.发布组件
exports.default = series(
  withTaskName("clean", async () => run("rm -rf ./dist")),
  series(
    // withTaskName('buildPackages', () =>
    //   run(`pnpm run --filter ./packages --parallel build`)
    // run(`cd packages/hooks && pnpm build`)
    withTaskName("buildPackages~~hook", () =>
      Promise.all(["hooks", "theme-chalk", "utils"].map(fileName => run(`cd packages/${fileName} && pnpm build`)))
    ),
    withTaskName("buildFullComponent", buildFullComponent),
    withTaskName("buildComponent", buildComponent)
  ),
  parallel(genTypes, copySourceCode())
);
