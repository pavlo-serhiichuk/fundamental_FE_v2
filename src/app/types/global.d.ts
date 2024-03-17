declare module "*.module.css";
declare module "*.module.scss";
declare const __IS_DEV__: boolean;

declare module "*.svg" {
  const svg: string;
  export default svg;
}

