/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('calc', {
    title: 'Calculator'
  });
};