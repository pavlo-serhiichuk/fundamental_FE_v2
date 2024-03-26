declare module '*.module.css';
declare module '*.module.scss';
declare const __IS_DEV__: boolean

declare module '*.svg' {
  import { type ReactElement, type SVGProps } from 'react'

  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}
