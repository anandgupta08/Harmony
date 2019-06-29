const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/inspiration/runtime.js',
        './dist/inspiration/es2015-polyfills.js',
        './dist/inspiration/polyfills.js',
        './dist/inspiration/scripts.js',
        './dist/inspiration/main.js'
    ];

    await fs.ensureDir('dist/elements');
    await concat(files, 'dist/elements/inspiration-element.js');

})();