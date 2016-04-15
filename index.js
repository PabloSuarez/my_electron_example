(() => {
  'use strict';

  let github = require('./github');
  let database = require('./database.json');

  let addRepo = () => {
    for (var i = 0; i < database.length; i++) {
      let repo = database[i];

      let name_repo = repo.name;
      let url_repo = repo.url;

      let node = document.createElement('LI');
      let textnode = document.createTextNode(`${i}: ${name_repo}, ${url_repo}`);

      node.appendChild(textnode);
      document.getElementById("list").appendChild(node);
    }
  }

  addRepo();
})();
