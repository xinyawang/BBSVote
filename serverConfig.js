const githubApi = {
  'ACCESS_TOKEN': 'https://github.com/login/oauth/access_token',
  'USER_INFO': 'https://api.github.com/user',
  'AUTHORIZE': 'https://github.com/login/oauth/authorize'
};

exports.devConfig = {
  'HOST_URL': 'http://localhost:5000',
  'CDN_URL': 'http://localhost:8088',
  'REDIRECT_URI': 'http://localhost:5000/login/github/callback',
  'CLIENT_ID': '3a3ed1c43d5d134063006b6bdf7b1d8cd261b39e',
  'CLIENT_SECRET': '2e2222ea2005b0252f14582105e8fdb58e06abc9',
  'GITHUB_API': githubApi,
  'DB_URL': 'mongodb://104.156.225.20:27017/voting'
};

// exports.preConfig = {
//   'HOST_URL': 'http://localhost:5000',
//   'CDN_URL': 'http://localhost:5000',
//   'REDIRECT_URI': 'http://localhost:5000/login/github/callback',
//   'CLIENT_ID': '411b91fde0088b2efa2a',
//   'CLIENT_SECRET': '1aef5524c34d0f11c2441e1dce2af8afa7d39ee1',
//   'GITHUB_API': githubApi,
//   'DB_URL': 'mongodb://localhost:27017/voting'
// };

// exports.prdConfig = {
//   'HOST_URL': 'https://we-voting-ele.herokuapp.com',
//   'CDN_URL': 'https://we-voting-ele.herokuapp.com',
//   'REDIRECT_URI': 'https://we-voting-ele.herokuapp.com/login/github/callback',
//   'CLIENT_ID': '7d6b761d11f8d943d54f',
//   'CLIENT_SECRET': '94e24dac049b6c7b3cdd754db23d6ba24a33e455',
//   'GITHUB_API': githubApi,
//   'DB_URL': 'mongodb://heroku_h9jz5wwb:nsh3jskaofuh5l4ah7i5cogipe@ds063536.mlab.com:63536/heroku_h9jz5wwb'
// };
