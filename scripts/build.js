const {spawn} = require('child_process')
const fs = require('fs-extra')
const path = require('path')
const process = require('process')

const rootDir = path.resolve(__dirname, '..')
const rootPath = (...pathComponents) => path.resolve(rootDir, ...pathComponents)

const sourcePath = (...pathComponents) => rootPath('src', ...pathComponents)
const buildPath = (...pathComponents) => rootPath('build', ...pathComponents)

process.chdir(rootPath())

fs.emptyDirSync(buildPath())

const tsc = rootPath('node_modules', '.bin', 'tsc')

spawn(tsc, ['-b'], { stdio: 'inherit' }).on('exit', code => {
	if (code !== 0) {
		process.exit(code)
	}

	fs.copySync(sourcePath('assets/'), buildPath())
})
