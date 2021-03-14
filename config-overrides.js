const path = require('path');
const {
    override,
    addWebpackAlias,
} = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        pages: path.resolve(__dirname, './src/pages')
    })
);
