module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/tool/' : '/',
  devServer: {
    port: '8087',
  },
};
