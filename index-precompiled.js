const handlebars = require('handlebars');
require('./email');
const CSSInliner = require('css-inliner');

async function process() {
    const apply = handlebars.templates['email.hbs'];
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