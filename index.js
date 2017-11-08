const handlebars = require('handlebars');
const CSSInliner = require('css-inliner');
const fs = require('fs');

function loadTemplate(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) {
                return reject(err);
            }

            return resolve(data.toString());
        });
    });
}


async function process() {
    const template = await loadTemplate('email.hbs');
    const apply = handlebars.compile(template);
    const html = apply({
        name: 'Matt Burke',
        zip: '12345',
        stuff: [
            { key: 'foo', value: 'bar' },
            { key: 'baz', value: 'quux' }
        ]
    });

    const inliner = new CSSInliner();
    const inlined = await inliner.inlineCSSAsync(html);

    return inlined;
}

process().then(console.log);