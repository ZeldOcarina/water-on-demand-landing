const { readFileSync } = require('fs')
const { join } = require('path')

const faqs = readFileSync(join(__dirname, 'api-files', 'faq.json'), 'utf8');
const faqsJson = JSON.parse(faqs);

export default function handler(request, response) {
    response.status(200).json(faqsJson);
}