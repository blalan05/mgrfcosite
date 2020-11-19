// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'MGRF',
  siteDescription: 'Custom Grain Equipment Manufacturer',
  siteUrl: 'http://localhost:8080',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
          whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/]
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    }, 
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'content/site/*.json'
      }
    }, 
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Product',
        path: './content/product/*.md'
      }
    }, 
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Service',
        path: './content/service/**/*.md',
        refs: {
          services: {
            typeName: 'Services',
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        '@noxify/gridsome-remark-table-align',
        ['@noxify/gridsome-remark-classes', {
          'table': 'table table-striped',
          'tableCell[align=center]': 'text-center',
          'tableCell[align=right]': 'text-right'
        }]
      ]
    }
  },
  templates: {
    Service: [{
      path: '/service/:title'
    }],
    Product: [{
      path: '/product/:name',
      component: '~/templates/Author.vue'
    }],
    Services: [{
      path: '/services/:title',
      component: '~/templates/Tag.vue'
    }],
  }
}
