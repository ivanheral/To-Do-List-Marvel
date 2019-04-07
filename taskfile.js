var bs = require('browser-sync')
var historyApiFallback = require('connect-history-api-fallback')
var env = 'development'
var fw = 'preact'
var out = 'dist'

bs({
    server: `${out}`,
    middleware: [historyApiFallback()]
})

export default async function (task) {
    await task.parallel(['js', 'html'])
    await task.watch('src/js/**/*.*', 'js')
    await task.watch(`${out}/**/*.js`, 'changes')
}

export async function html(task) {
    await task.source('src/html/index.html').target(`${out}`)
}

export async function changes(task) {
    bs.reload()
}

export async function js(task) {
    await task.source('src/js/main.jsx').build({
        fw: `${fw}`,
        env: `${env}`
    }).target(`${out}`)
}
