module.exports = ({ file, options, env }) => ({
  parser: "sugarss",
  plugins: [require("postcss-import"), require("postcss-cssnext")]
});

// module.exports = {};

// module.exports = {
//   plugins: {
//     autoprefixer: {}
//   }
// };

// module.exports = {
//   parser: "sugarss",
//   plugins: [require("postcss-import"), require("postcss-cssnext")]
// };
