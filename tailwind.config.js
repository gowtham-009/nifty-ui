module.exports = {
    content: [
        './node_modules/preline/preline.js',
    ],
    plugins: [
        require('preline/plugin'),
    ],
    theme: {
        extend: {
          backgroundImage: {
            'filter-contain-png':"url('~/assets/image/pie-chart.png')"
          }
        }
      }
  }