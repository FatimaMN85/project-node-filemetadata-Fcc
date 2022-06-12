const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
	originalname: {
		type: String,
		require: true
	},
	mimetype: {
		type: String,
		require: true
	},
	size: {
		type: Number,
		require: true
	}
})

const File = mongoose.model('File', fileSchema);

module.exports = File;