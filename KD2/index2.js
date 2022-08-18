var shell = require('shelljs');
for (let i = 0; i < 100; i++) {
    shell.exec('npx cypress run --record --key 9e4181ae-cc5b-4f53-ae6f-5fc8a5bf8c4e');    
}