const path = require('path');
const {
    override,
    addWebpackAlias,
    addDecoratorsLegacy,
    useBabelRc,
} = require('customize-cra');

function resolvePath(nPath) {
    return path.resolve(__dirname, nPath);
}

module.exports = override(
    useBabelRc(),
    addWebpackAlias({
        '@': resolvePath('src'),
        assets: resolvePath('./src/assets'),
        pages: resolvePath('./src/pages')
    }),
    addDecoratorsLegacy(),
);
