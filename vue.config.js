const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/appointments/'
        : '/',
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    img: 'src',
                    image: 'xlink:href',
                    'b-avatar': 'src',
                    'b-img': 'src',
                    'b-img-lazy': ['src', 'blank-src'],
                    'b-card': 'img-src',
                    'b-card-img': 'src',
                    'b-card-img-lazy': ['src', 'blank-src'],
                    'b-carousel-slide': 'img-src',
                    'b-embed': 'src'
                }

                return options
            })
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src/')
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/stylesheets/variables.scss";
                @import "@/stylesheets/mixins.scss";
                `
            },
        },
    },
};
