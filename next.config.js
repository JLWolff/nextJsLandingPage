const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
// const withImages = require('next-images');
const isDev = process.env.NODE_ENV === 'ISDEV'


module.exports = {
    basePath: '/nextJsLandingPage',
  };

module.exports = withPlugins([optimizedImages], { target: 'serverless' , basePath: '/nextJsLandingPage', assetsPrefix: '/nextJsLandingPage'});
