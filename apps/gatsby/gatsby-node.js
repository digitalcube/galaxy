/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const fs = require("fs")

const getBuildTarget = () => {
    const workspaceJSON = require('../../workspace.json')
    if (
      workspaceJSON &&
      workspaceJSON.projects &&
      workspaceJSON.projects.gatsby &&
      workspaceJSON.projects.gatsby.targets &&
      workspaceJSON.projects.gatsby.targets.build &&
      workspaceJSON.projects.gatsby.targets.build.options &&
      workspaceJSON.projects.gatsby.targets.build.options.outputPath
    ) {
      return path.join(
        process.env.NX_WORKSPACE_ROOT,
        workspaceJSON.projects.gatsby.targets.build.options.outputPath
      )
    } 
    return path.join(__dirname, "public")
}

const target = getBuildTarget()

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(target, { recursive: true })
    fs.renameSync(
      path.join(__dirname, "public"),
      path.join(__dirname, "public_dev")
    )
  }
}

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), target)
  fs.renameSync(
    path.join(__dirname, "public_dev"),
    path.join(__dirname, "public")
  )
}