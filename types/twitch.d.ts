import 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'twitch-video': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string
        video?: string
        clip?: string
        parent?: string
        autoplay?: boolean
        muted?: boolean
      }
    }
  }
}
