const shell = require('shelljs');

/**执行shell 脚本 */
const exec = function (cmd,success,error) {
  let t = Date.now();
  shell.exec(cmd,(code,stdout,stderr)=>{
    if(stderr) { 
      console.error(stderr); 
      error && error(stderr);
    }
    console.log(`执行成功:${cmd} 耗时:${Date.now() - t}`);
    success && success();
  })
}

const execAsync = function (cmd) {
  let t = Date.now();
  return new Promise((resolve,reject)=> {
    shell.exec(cmd,(code,stdout,stderr)=>{
      if(stderr) {
        console.error(stderr);
        reject(stderr);
      }
      console.log(`执行成功:${cmd} 耗时:${Date.now() - t}`);
      resolve();
    })
  })
}

module.exports = {
  execAsync,exec
}