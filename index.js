var shell = require('shelljs');
for (let i = 0; i < 50; i++) {
    shell.exec('npx cypress run --record --key 4371386d-36d5-4b26-bcff-9c115071dcef');    
}