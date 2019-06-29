const fs = require('fs-extra');
const path = require('path');
const concat = require('concat');

(async function build() {
    const files = [
        'custom-elements-es5-adapter.js', 
        'support.js'
    ];
    await fs.ensureDir('dist/elements');
    await concat(files, 'dist/elements/support-element.js');
}
)();