const { user } = require('../config/mongoose');

const User = require('../modals/user');

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

module.exports.signUp = function (req, res) {
  return res.render('user_sign_up', {
    title: 'Codial |Sign UP',
  });
};

// renedr the sign in page
module.exports.signIn = function (req, res) {
  return res.render('user_sign_in', {
    title: 'Codial |Sign In',
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.comfirm_password) {
    return res.redirect('back');
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log('error in finding user in signing up');
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log('error in creating user in signing up');
          return;
        }

        return res.redirect('/users/sign-in');
      });
    } else {
      return res.redirect('back');
    }
  });
};

// sign in and create Session
module.exports.createSession = function (req, res) {
  // todo later
};
