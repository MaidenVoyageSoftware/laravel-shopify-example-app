const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss')
    ]);

if(mix.inProduction()){
    mix.version();
}

mix.options({
    hmrOptions: {
        host: 'localhost', // Switch this to your local IP if you need to access the project from another device
        port: process.env.MIX_HMR_PORT || 8080,
    },
});
mix.webpackConfig({
    devServer: {
        host: '0.0.0.0',
        port: process.env.MIX_HMR_PORT || 8080,
    }
})
