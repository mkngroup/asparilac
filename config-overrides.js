module.exports = {
  webpack: function (config, env) {
    devServer: {
      historyApiFallback: true;
    }
    return config;
  },
};
