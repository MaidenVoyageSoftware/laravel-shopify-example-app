import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import HelloWorld from "./components/HelloWorld.vue";

// Setup Axios base url
const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost/api' : '';
export const HTTP = axios.create({
    baseURL: apiUrl
});

HTTP.interceptors.response.use(
    response => response.data,
    error => {
        // Log out the user if we receive a 401 status code
        // if (error.response.status == 401) {
        //     window.location.href = "/";
        //     window.localStorage.clear();
        //     document.cookie = "token=; Max-Age=-99999999;";
        // }

        throw error;
    }
);

require('../../node_modules/flowbite/dist/flowbite.js');

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/helloworld',
            name: 'helloworld',
            component: HelloWorld,
        },
    ]
});

const app = createApp({
    // Here you can add global Vue data/methods
    data() {
        return {

        };
    },
    created() {
        // Will do something every time a component is created
    },
    methods: {

    }
});

app.config.globalProperties.$http = HTTP;

// Register components
const requireComponent = require.context('./', true, /\.vue$/i);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');
    app.component(componentName, componentConfig.default || componentConfig);
});

// Mount Vue app
app.use(router);
app.mount('#app');
