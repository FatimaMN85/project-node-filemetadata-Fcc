const express = require('express');
const router = express.Router();
const File = require('../model/fileSchema');
const multer = require('multer');

//Configuration for Multer
const upload = multer({ dest: "public/files" });

router.post('', upload.single('upfile'), (req,res) => {
	const data = req.file;
	const file = new File(data)
	file.save()
	    .then((result) => {
	    	res.send({
	    		name: result.originalname,
	    		type: result.mimetype,
	    		size: result.size
	    	})
	    })
	    .catch((err) => {
	    	console.log(err)
	    })
})
module.exports = router;