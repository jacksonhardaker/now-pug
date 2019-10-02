const pug = require('pug');
const path = require("path");

const renderPug = data => pug.renderFile(path.join(__dirname, "..", "page.pug"), data);

test('It should render pug correctly', () => {
  expect(renderPug({
    title: 'Pug',
    text: 'Pug is great'
  })).toMatchSnapshot();
});
