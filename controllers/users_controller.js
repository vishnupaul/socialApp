module.exports.profile = function (req, res) {
  return res.render('users_profile', {
    title: 'Profile',
  });
};

module.exports.posts = function (req, res) {
  return res.render('post', {
    title: 'post',
  });
};
