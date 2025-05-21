const path = require('path');

module.exports = {
  entry: './ClientApp/index.tsx', // Asegúrate que esta ruta apunte a tu archivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wwwroot/js'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};