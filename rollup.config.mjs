// importing installed rollup plugins
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// adding package.json as a variable sp we can refer to it
import packageJson from "./package.json" assert { type: "json" };
// const packageJson = require("./package.json");

export default [
  {
    // entry point for the library
    input: "src/index.ts",
    // rollup outputs
    output: [
      {
        // commonjs output
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        // esx output
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    // rollup plugins
    plugins: [
      resolve(),
      commonjs(),
      // tsconfig needs to be specified
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    // *.d.ts configuration for rollup dts plugin
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
