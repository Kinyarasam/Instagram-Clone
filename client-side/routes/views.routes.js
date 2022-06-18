export default [
    {
        path: '/',
        name: 'home',
        components: {
            default: () =>
                import ('../src/Views/Home.vue')
        }
    },
]