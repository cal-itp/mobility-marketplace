/**
 * netlify-plugin-ca-state-fonts
 *
 * [Netlify Build plugin][0] to copy font assets from the State Template
 * submodule during (just before) site build.
 *
 * [0]: https://docs.netlify.com/configure-builds/build-plugins/
 */

module.exports = {
  async onPreBuild({ utils: { run } }) {
    await run.command("cp -r submodules/ca-state-template/fonts fonts/");
  }
}