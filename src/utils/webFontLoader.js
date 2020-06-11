/**
 * Web Font Loader takes care of Vue Design System’s font loading.
 * For full documentation, see: https://github.com/typekit/webfontloader
 */
import WebFont from "webfontloader"

WebFont.load({
  google: {
    families: ["Overpass:400,400i,700", "Lexend+Deca"],
  },
})
