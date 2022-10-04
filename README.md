# Casual Streams

A personal project to test my Next.js/React knowledge as well as being able interfacing with an API. I chose the [Twitch API](https://dev.twitch.tv/docs/api) because I use Twitch daily and I wanted to create a project around it.

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and styled with [Tailwind](https://github.com/tailwindlabs/tailwindcss). The finished demo is deployed on [Vercel](https://vercel.com/).

View Demo: [Casual Streams](https://casualstreams.vercel.app/)

In the demo the first 100 streams with an average of 50 viewers are populated, showing 20 at first. All data fetching is done via `fetch` and the `getServerSideProps()` function provided by Next.js.
