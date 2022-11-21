export default [
  {
    path: '/accounts/login',
    name: 'home',
    components: {
      default: () =>
        import('../src/Views/Home.vue')
    }
  },
  {
    path: '/accounts/emailsignup',
    name: 'Login',
    components: {
      default: () =>
        import('../src/Views/accounts/Login.vue')
    }
  }
];
