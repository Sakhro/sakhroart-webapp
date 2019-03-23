module.exports = {
  presets: ["next/babel", "@zeit/next-typescript/babel"],
  plugins: [
    ["inline-react-svg"],
    ["module-resolver", {
      "alias": {
        "static": "./static",
        "styles": "./src/styles",
        "routes": "./src/routes",
        "layouts": "./src/layouts",
        "services": "./src/services",
        "constants": "./src/constants",
        "components": "./src/components",
      }
    }]
  ]
}