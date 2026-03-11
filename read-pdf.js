const fs = require('fs');
const pdf = require('pdf-parse/lib/pdf-parse.js');

const buf = fs.readFileSync('Ali_Haider_Resume.pdf');

pdf(buf).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.log('Error:', error.message);
});
