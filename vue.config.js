module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/assets/styles/_global.scss";`
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Advanced-Stepper/'
      : '/'
};