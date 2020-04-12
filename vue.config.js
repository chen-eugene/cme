module.exports = {
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                // target: 'http://116.62.226.140:7002'
                // target: 'http://192.168.10.44:7002/'
                target: 'http://121.196.16.111:7002/'
            },
        }
    }
}
