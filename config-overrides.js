module.exports = function override(config, env) {
    devServer:{
        historyApiFallback: true
    }

    historyApiFallback = true
    return config
}