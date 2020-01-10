const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/javascript/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,

        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
          // {
          //   // This loader resolves url() and @imports inside CSS
          //   loader: "css-loader"
          // },
          // {
          //   // Then we apply postCSS fixes like autoprefixer and minifying
          //   loader: "postcss-loader"
          // },
          // {
          //   // First we transform SASS to standard CSS
          //   loader: "sass-loader",
          //   options: {
          //     implementation: require("sass")
          //   }
          // },
          {
            // After all CSS loaders we use plugin to do his work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/about.html",
      filename: "./about.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/massage.html",
      filename: "./massage.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/aroma.html",
      filename: "./aroma.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/reflex.html",
      filename: "./reflex.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/candles.html",
      filename: "./candles.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/contact.html",
      filename: "./contact.html"
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'images' }
    ]),
  ]
};
