module.exports = {
    pwa: {
      name: "portfolio",
      // themeColor: "#1FAA59",
      msTileColor: "#000000",
      workboxPluginMode: "InjectManifest",
      workboxOptions: {
        
        swSrc: "src/service-worker.js",
  
      },
    },
  };