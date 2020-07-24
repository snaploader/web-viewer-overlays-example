# Snaploader Web Viewer Overlays Example

This is a simple example demonstrating how custom DOM elements can be attached to nodes within a Snaploader scene.

The example can be viewed [here](https://snaploader.github.io/web-viewer-overlays-example/).

We have included TypeScript types with inline documentation for our public web viewer APIs, and the included `application.js` was generated from `application.ts`.

## Dependencies

_**NOTE:** The Snaploader viewer comes with everything you need to display overlays. The dependencies are just for this example._

Install Node.js dependencies with:

```bash
yarn
```

## Build

To transpile `application.ts` into `application.js` execute:

```bash
yarn build
```

## Run

After building, start a local web server with:

```bash
yarn start
```

In your browser, navigate to [http://localhost:8081](http://localhost:8081).

## Documentation

There is some inline documentation within `application.ts`, and also incline API documentation contained within `types/`.
