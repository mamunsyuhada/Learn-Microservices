const express = require('express');
const router = express.Router();

const isBase64 = require('is-base64');
const base64Img = require('base64-img');

const { v4: uuidv4 } = require('uuid');

const {Media} = require('../models');

/******** get images ********/ 
router.get('/', async(req, res) => {
  const media = await Media.findAll({
    attributes:['id', 'image']
  });
  // console.log(media);

  const mappedMedia = media.map((m) => {
    // console.log(m);
    m.image = `${req.get('host')}/${m.image}`
    return m
  })

  return res.json({
    status: 'success',
    data: mappedMedia
  });

})

/******** insert image ********/ 
router.post('/', function(req, res) {
  const image = req.body.image;
  if(!isBase64(image, {mimeRequired: true})){
    return res.status(400).json({
      status:'error',
      message:'invalid base64'
    });
  }

  base64Img.img(image, './public/images', Date.now(), async (err, filepath) => {
    if(err){
      return res.status(400).json({status:'error', message: err.message});
    }

    const filename = filepath.split('/').pop();
    const media = await Media.create({
      id: uuidv4(),
      image: `images/${filename}`
    });
    return res.json({
      success: 'ok',
      data:{
        id:media.id,
        image:`${req.get('host')}/images/${filename}`
      }
    })
  });
});

module.exports = router;