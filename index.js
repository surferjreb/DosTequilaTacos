const express = require('express')
const main_control = require('./public/js/app.js')
const path = require('path')
const methodOverride = require('method-override')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

app.get('/', main_control.home)

app.get('/tacoOrder', main_control.viewOrder)

app.get('/comments', main_control.comments)

app.get('/newComment', main_control.newComment)

app.get('/comments/:id', main_control.fullComment)

app.get('/comments/:id/edit', main_control.viewCommentEdit)

app.post('/tacoOrder', main_control.order)

app.post('/createComment', main_control.createComment)

app.patch('/comments/:id', main_control.updateComment)

app.delete('/comments/:id', main_control.deleteComment)

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})