var locationPath = location.pathname.replace(/\/[^\/]+$/, "");
window.dojoConfig = {
  packages: [{
      name: "bootstrap",
      location: "https://esri.github.io/calcite-maps/dist/vendor/dojo-bootstrap"
    },
    {
      name: "calcite-maps",
      location: "https://esri.github.io/calcite-maps/dist/js/dojo"
    },
    {
      name: "app",
      location: locationPath + "app"
    }
  ]
};