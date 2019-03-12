# vue-highlight

[![npm](https://img.shields.io/npm/v/vue-highlight.svg)](https://www.npmjs.com/package/vue-highlight) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js Plugin

## Installation

```bash
npm install --save vue-highlight
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
<link rel="stylesheet" href="uo5/dist/vue-highlight.css"></link>
<script src="uo5/dist/vue-highlight.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/uo5/dist/vue-highlight.css"></link>
<script src="https://unpkg.com/uo5"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

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
