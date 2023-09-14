export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        babelConfig: true,
        plugins: ["babel-plugin-transform-vite-meta-env"],
      },
    ],
    "\\.ts$": ["babel-jest", { configFile: "./.babelrc" }], // process `*.tsx` files with `ts-jest`
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  extensionsToTreatAsEsm: [".ts"],
};
