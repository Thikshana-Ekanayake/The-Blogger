import express from 'express';

const router =express.Router();
router.get('/test', (req, res) => {
    res.json('this is the post');
})