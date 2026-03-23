## Demo: 
https://casualstreams.vercel.app/

## Objective
This app is meant to connect viewers with streamers who have smaller communities. These communities are often more tightnit and give viewers a chance to actually have meaningful interaction with the stream they're viewing.

# Technology Used
* Next.js: used to quickly boostrap the site creation process.
  - `syncStreams` server action to get the stream data.
  - `<Suspense>` boundaries to separate data fetching and server renderd HTML.
* Twitch API: for fetching the stream data.
* Vercel: to host the app.
* Tailwind CSS: for styling.

Built with [Next.js](https://nextjs.org).
