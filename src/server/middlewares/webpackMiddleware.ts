import errorOverlay from "react-dev-utils/errorOverlayMiddleware";
import openBrowser from "react-dev-utils/openBrowser";
import webpack from "webpack";
import wdm from "webpack-dev-middleware";
import whm from "webpack-hot-middleware";
import { config } from "../config";
import webpackClienteConfig from "./../../../webpack.config.client.js";

export const webpackMiddleware = () => {
  openBrowser(`http://localhost:${config.port}`);
  const compiler = webpack(webpackClienteConfig);
  return [
    whm(compiler, {
      log: console.log,
      path: "/__webpack_hmr",
      heartbeat: 200,
    }),
    wdm(compiler, {
      serverSideRender: true,
      writeToDisk: true,
    }),
    errorOverlay(),
  ];
};
