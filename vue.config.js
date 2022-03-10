module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/contacto'
      ],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true
    }
  }
}
