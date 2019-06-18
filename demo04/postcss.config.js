module.exports = {
    // Transform inline comments
    //parser: require('postcss-scss'),
    plugins: [
      require("autoprefixer")("last 100 versions"),
      // Transform SCSS into CSS
      require('postcss-custom-properties')({
        preserve: false
      }),
      //require('precss'),
      // Calculate at compile time
      require('postcss-calc'),
      // px to rem
      //require('postcss-plugin-px2rem')({ rootValue: 100, minPixelValue: 2}),
    ], 
  };