(() => {
  'use strict';

  let http = require('http');

  function getRepos(url) {
    let urlGithub = url || 'http://api.github.com/users/pablosuarez/repos';

    console.log('aslkdjaljakldj');

    http.get('http://api.github.com/users/pablosuarez/repos', (res) => {
      console.log(`Got response: ${res.statusCode}`);
      // consume response body
      res.resume();
    }).on('error', (e) => {
      console.log(`Got error: ${e.message}`);
    });

    // http.get(urlGithub, function(response) {
    //   console.log(response);
    //   // Continuously update stream with data
    //   let body = '';
    //   response.on('data', function(d) {
    //     body += d;
    //     console.log(d);
    //   });
    //   response.on('end', function() {
    //     // Data reception is done, do whatever with it!
    //     let parsed = JSON.parse(body);
    //   });
    // });
  }

  module.exports.get = getRepos;

})();
