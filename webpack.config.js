module.exports = {
  entry: {
    melodic: "./src/melodic/index.js",
    harmonic: "./src/harmonic/index.js"
  },
  output: {
    filename: "./theme/static/dist/assets/[name].bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader:'babel-loader',
        query: {
          presets: ["env"]
        }
      },
      {
        test: /\.css$/,
        exclude: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      }
    ]
  }
}
