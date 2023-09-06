import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';
import {
    VanillaExtractPlugin,
} from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const devServer: DevServerConfiguration = {
    compress: true,
    port: 8080,
}

const createBrowserConfig = (
  type: 'dashboard' | 'graphics',
  name: string
): Configuration => ({
  mode: NODE_ENV,
  entry: resolve(__dirname, 'src', type, name, 'index.tsx'),
  output: {
    path: resolve(__dirname, type),
    filename: `${name}.js`
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
            outputPath: 'assets',
            name: '[name].[ext]',
        }
      },
      {
        test: /\.vanilla\.css$/i, // Targets only CSS files generated by vanilla-extract
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    url: false // // Required as image imports should be handled via JS/TS import statements
                }
            }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', type, name, 'index.html'),
      filename: `${name}.html`
    }),
    new VanillaExtractPlugin(),
    new MiniCssExtractPlugin(),
  ],
  externals: ['nodecg'],
  devtool: NODE_ENV === 'development' ? 'inline-source-map' : void 0,
  devServer,
});

const config: Configuration[] = [
    createBrowserConfig('graphics', 'opening'),
];
export default config;