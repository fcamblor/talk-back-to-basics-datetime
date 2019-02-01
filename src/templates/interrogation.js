'use strict';

const slide = require('./_slide');

module.exports = (node) => {
  const attrs = node.getAttributes();
  return slide('interrogation', node, `<div class="message">${node.getContent()}</div>`);
};
