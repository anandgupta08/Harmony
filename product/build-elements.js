const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/js/polyfill.bundle.js',
        './dist/js/vendor.bundle.js',
        './dist/js/app.bundle.js',        
    ];

    await fs.ensureDir('dist/elements');
    await concat(files, 'dist/elements/product-element.js');

})();