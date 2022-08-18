var shell = require('shelljs');
for (let i = 0; i < 100; i++) {
    shell.exec('cypress run --record --key 8a2f6a83-b94d-4d2e-95ed-51eb13b73b50');    
}