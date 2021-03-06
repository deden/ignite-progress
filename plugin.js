// Ignite CLI plugin for Progress
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-progress'
const NPM_MODULE_VERSION = '3.4.0'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'ProgressExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'Progress Example' })

  // Example of copying templates/Progress to App/Progress
  // if (!filesystem.exists(`${APP_PATH}/App/Progress`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/Progress`, `${APP_PATH}/App/Progress`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../Progress/Progress'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/Progress folder
  // const removeProgress = await context.prompt.confirm(
  //   'Do you want to remove App/Progress?'
  // )
  // if (removeProgress) { filesystem.remove(`${APP_PATH}/App/Progress`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../Progress/Progress'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

