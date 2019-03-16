# vue-highlight

[![npm](https://img.shields.io/npm/v/vue-hljs2.svg)](https://www.npmjs.com/package/vue-hljs2) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Highlight.js plugin for Vue.js 2.

## Installation

```bash
npm install --save vue-hljs2
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueHljs from 'vue-highlight'


Vue.use(VueHljs)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-hljs2/dist/vue-hljs.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-hljs2"></script>
```

```bash
npm run dev:coverage
```

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
