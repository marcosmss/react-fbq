# React Facebook Pixel

> React JS wrapper for [Facebook's Pixel](https://developers.facebook.com/docs/facebook-pixel)
## Install

```bash
npm install --save react-fbq
```

or

```bash
yarn add react-fbq
```

## Sponsors

React Fbq is a package to help you in yours projects.


## How to use

```js
import ReactFbq from 'react-fbq';
const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching

ReactFbq.init({ id: 'yourPixelIdGoesHere', advancedMatching: advancedMatching });
ReactFbq.pageView(); // For tracking page view
ReactFbq.track({ title: event, data: data }); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
```

## Dev Server

In the folder `demo`

```bash
yarn install
```
```bash
yarn start
```

Default dev server runs at localhost:4000 in browser.
You can set IP and PORT in webpack.config.dev.js
