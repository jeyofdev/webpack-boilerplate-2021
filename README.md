# Webpack boilerplate 2021

My boilerplate with Webpack based setup that allow build web apps and sites much faster.


## Tools

Check that [`Nodejs`](https://nodejs.org/en/download/) is installed :
```sh
$ node -v
```

Check that [`Yarn`](https://yarnpkg.com/en/docs/install) is installed :
```sh
$ yarn -v
```


## Initialize a project

Clone the depot and install all the dependencies :
```sh
$ yarn install
```


## Usage

### Dev mode :
You can view the dev server at localhost:3000.
```sh
$ yarn start
```

### Production mode :
```sh
$ yarn build
```


## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [StyleLint](https://stylelint.io/)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)



## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject Css into the DOM
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - compile Scss to Css
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve css imports
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process Css with PostCSS
- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate Html files from template
- [`image-minimizer-webpack-plugin`](https://github.com/webpack-contrib/image-minimizer-webpack-plugin) - Optimize the images.
