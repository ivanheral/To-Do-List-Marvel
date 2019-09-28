import bs from 'taskr-build/fw/servor';
bs.start({
    root: 'dist',
    port: 9000
});

var env = 'development';
var fw = 'preact';
var out = 'dist';

export default async function (task) {
    await task.parallel(['js', 'html'])
    await task.watch('src/js/**/*.*', 'js')
}

export async function html(task) {
    await task.source('src/html/index.html').target(`${out}`)
}

export async function js(task) {
    await task.source('src/js/main.jsx').build({
        fw: `${fw}`,
        env: `${env}`
    }).target(`${out}`)
}
