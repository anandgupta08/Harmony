const fs = require('fs-extra');
const concat = require('concat');
const cheerio = require('cheerio');
const demoFilePath = 'dist/demo.html';

(async function build() {
    const files = [
        './public/vue.js',
        './dist/payment-element.js'          
    ];

    await fs.ensureDir('dist/elements');
    await fs.ensureDir('dist/elements/img');
    await concat(files, 'dist/elements/payment-element.js');
    await fs.copy('dist/img', 'dist/elements/img');
    await fs.copy('public/vue.js', 'dist/vue.js');
    await fs.copy('public/favicon.ico', 'dist/favicon.ico');

    fs.readFile(demoFilePath, function(err, data) {
        const $ = cheerio.load(data);
        $('title').text('Payment - Vue App');
        
        fs.writeFile(demoFilePath, $.html(), (err) => {
            if(err) {
                console.log(`Error occured while modifying ${demoFilePath} with error ${err}`);
                return;
            }
        });
    });

})();