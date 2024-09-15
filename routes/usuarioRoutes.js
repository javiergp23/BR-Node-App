import express from 'express';

const router = express.Router();

router.get('/', (req, resp) => {
    resp.json({msg: 'Hola mundo en express'})
})

export default router;