module.exports = {
  presets: [
    [ '@vue/app',
      {
        useBuiltIns: 'entry'
      }
    ],
    ["@vue/babel-preset-jsx",
      {
        "injectH": false
      }
    ],
  ],
  'plugins': [
    [ 'component', {
      'libraryName': 'element-ui',
      'styleLibraryName': 'theme-chalk'
    } ]
  ]
};
