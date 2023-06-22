const toppings = require('../data/toppings.json')
const {v4: uuidv4} = require('uuid')

const orders = []
const comments = [
    {   id: uuidv4(),
        username: 'oneHungLow',
        cBody: 'The tacos are awesome'
     },
    {   id:  uuidv4(),
        username: 'fudger87',
        cBody: 'Wicked Awesome, Midnight Cruise is my favorite sauce'},
    {
        id:  uuidv4(),
        username: 'surftheLast247',
        cBody: 'Only place to get tacos!'
    },
    {
        id:  uuidv4(),
        username: 'flybynight1414',
        cBody: 'Makes me want to go on a joy ride!'
    },
    {   id: uuidv4(),
        username: 'ghostrider8585',
        cBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
        + "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
        + "ea commodo consequat."
     }
]

const _home = (req, res) => {
    const { meats, veggies, sauces } = toppings
    res.render('home', { pageTitle: 'Dos Tequila Tacos', meats, veggies, sauces});
}

const _order = (req, res) => {
    let newOrder = req.body
    console.log(newOrder)
    orders.push(newOrder)
    res.render('order', { pageTitle: 'Your Order', orders})
}

const _viewOrder = (req, res) => {
    res.render('order', {pageTitle: 'Your Order', orders})
}

const _comments = (req, res) => {
    res.render('taco_comments', { pageTitle: 'DTT Comments', comments})
}

const _newComment = (req, res) => {
    res.render('new_comment', {pageTitle: 'New Comment'})
}

const _createComment = (req, res) => {
    console.log(req.body)
    let newID = uuidv4()
    const {username, usercomment } = req.body
    let newComment = {id: newID, username: username, cBody: usercomment}
    comments.push(newComment)
    res.redirect('comments')
}

const _fullComment = (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    console.log(comment)
    res.render('commentView', {pageTitle: 'DDT Comment', comment})
}

const _viewCommentEdit = (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('editComment', {pageTitle: 'Edit DDT Comment', comment })
}

const _updateComment = (req, res) => {
    const { id } = req.params
    const newComment = req.body.cBody
    const originalComment = comments.find(c => c.id === id)
    originalComment.cBody = newComment
    res.redirect('/comments')
}

const _deleteComment = (req, res) => {
    const { id } = req.params
    let comment = comments.find( c => c.id === id)
    comments.splice(comments.indexOf(comment), 1)
    res.redirect('/comments')
}


exports.home = _home
exports.order = _order
exports.viewOrder = _viewOrder
exports.comments = _comments
exports.newComment = _newComment
exports.createComment = _createComment
exports.fullComment = _fullComment
exports.viewCommentEdit = _viewCommentEdit
exports.updateComment = _updateComment
exports.deleteComment = _deleteComment
