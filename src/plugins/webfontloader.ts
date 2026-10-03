/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  // Offline build: Google Fonts is unreachable, and the import is kept in the
  // dead branch so the webfontloader chunk is not emitted at all.
  if (import.meta.env.VITE_STANDALONE === "1") return;

  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */ "webfontloader");

  webFontLoader.load({
    google: {
      families: ["Roboto:100,300,400,500,700,900&display=swap"],
    },
  });
}
