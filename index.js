var fs = require('fs-plus')
var mustache = require('mustache')
var express = require('express')
var resizeImage = require('resize-image')

const logit = (err, content) => {
    console.log(err, content)
}

const fileList = (done) => {
    fs.list(__dirname + "/../static", ["jpg", "png"], done)
}

const paths = (done) => {
    fileList((err, files) => {
        files.sort((a,b) => {
            return fs.statSync(b).ctime.getTime() -
                   fs.statSync(a).ctime.getTime()
        })
        done(err, files.map(f => "/static/" + f.match(/[^\/]*$/)))
    })
}

const run = () => {
    var app = express()
    app.get('/', function (req, res) {
        paths((err, ps) => {
            fs.readFile(__dirname + "/droptumble.mustache", (err, file) => { 
                const html = mustache.render(file.toString(), { paths: ps })
                res.send(html)
            })
        })
    })
    app.listen(3000)
}

run()
