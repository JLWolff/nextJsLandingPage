const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');


module.exports = {
    basePath: '/nextJsLandingPage',
    assetPrefix: '/nextJsLandingPage'
}
module.exports = withPlugins([optimizedImages], { target: 'serverless' });
