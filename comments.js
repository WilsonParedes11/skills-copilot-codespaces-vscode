// Create web server
// Created on 19/08/2019
// Updated on 20/08/2019

const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// @route GET /comments
// @desc Get all comments
// @access Public
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.json(err));
});

// @route GET /comments/:id
// @desc Get a comment by id
// @access Public
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err => res.json(err));
});

// @route POST /comments
// @desc Create a comment
// @access Public
router.post('/', (req, res) => {
    const newComment = new Comment({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    newComment.save()
        .then(comment => res.json(comment))
        .catch(err => res.json(err));
});

// @route PUT /comments/:id
// @desc Update a comment by id
// @access Public
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body)
        .then(comment => res.json(comment))
        .catch(err => res.json(err));
});

// @route DELETE /comments/:id
// @desc Delete a comment by id
// @access Public
router.delete('/:id', (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(comment => res.json(comment))
        .catch(err => res.json(err));
});

module.exports = router;
