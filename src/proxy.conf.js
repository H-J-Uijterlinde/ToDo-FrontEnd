const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: "https://todolist-back-end-sema.herokuapp.com",
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  }
]

module.exports = PROXY_CONFIG;
