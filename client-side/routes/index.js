import { createRouter, createWebHistory } from 'vue-router'
import views from './views.routes'
import NotFound from '../src/Views/NotFound.vue'
// import auth from './auth.routes'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // ...auth,
        ...views,
        {
            // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router