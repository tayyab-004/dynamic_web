const mongoose = require('mongoose');
const Detail = new mongoose.Schema({
    brandName: String,
    brandIconURL: String,
    links: [
        {
            label: String,
            url: String,
        },
    ],
});

module.exports = mongoose.model("detail",Detail)