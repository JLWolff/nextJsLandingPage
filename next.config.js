const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
// const withImages = require('next-images');
const isDev = process.env.NODE_ENV === 'ISDEV'

/*
//  * Gets the BASE_PATH from the command used to start this app.
//  * If BASE_PATH is specified but it does not start with a "/" 
//  * then add it. 
//  */
// function getBasePath() {
//     var basePath = ''

//     if (!isDev && process.env.BASE_PATH){
//         if (process.env.BASE_PATH.startsWith("/") ){
//             basePath = process.env.BASE_PATH;
//         } else {
//             basePath = "/" + process.env.BASE_PATH;
//         }
//     } 

//     console.log("getBasePath() : isProd = " + isProd);
//     console.log("getBasePath() : basePath = " + basePath);

//     return basePath
// }
module.exports = {
publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/nextJsLandingPage',
  }
}

module.exports = withPlugins([optimizedImages], { target: 'serverless' });

// module.exports = withImages({
//     staticFolder: '/nextJsLandingPage'

// });