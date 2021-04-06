import * as sapper from '@sapper/app';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);

sapper.start({
	target: document.querySelector('#sapper')
});