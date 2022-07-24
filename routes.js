const {get_something_from_db} = require('./mysql')

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next)=>{
                console.log(1)
                next()
            },  (req, res, next)=>{
                console.log(2)
                next()
            }, async (req, res)=>{
                res.json( await get_something_from_db() )
})


router.get('/ok', (req, res, next)=>{
    console.log(1)
    next()
},  (req, res, next)=>{
    console.log(2)
    next()
}, async (req, res)=>{
    res.json('ok')
})

module.exports = router