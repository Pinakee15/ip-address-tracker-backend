const mongoose = require('mongoose');


// THE IPDETAILS SCHEMA

const ipSchema = new mongoose.Schema({
	ip: {
		type: String,
		require: true,
	},
	coordinates: {
        lat : {
            type: Number,
            require: true,
        },
        lng : {
            type: Number,
            require: true,
        }
	},
	region: {
		type: String,
		require: true,
	},
    city: {
		type: String,
		require: true,
	},
    country : {
		type: String,
		require: true,
	},
	timezone: {
		type: String,
		require: true,
	},
	isp: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model('IpSchema', ipSchema);;