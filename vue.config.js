module.exports = {
    filenameHashing: false,
    pages: {
        index: {
            // entry: 'src/main.js'
            entry: 'src/jsc-dom-client.js'
        },
        worker: {
            entry: 'src/jsc-dom.js',
        },
        client: {
            entry: 'src/main.js',
            template: 'public/client.html'    
        }
    },
    chainWebpack:(config)=>{

        // config.plugins.delete('preload-index')
        config.plugins.delete('hmr');
        config.plugin('preload-index').tap((options)=>{
            console.log(options,'options')
            "use strict";
            options[0].rel='prefetch'
            return options;
        })


    }
}