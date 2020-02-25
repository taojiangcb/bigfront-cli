const download = require('download-git-repo');
const ora = require('ora');

const spinner = ora('down loading template...')
/**
 * 
 * @param {*} efn 
 *   下载成功回调
 * @param {
 *  url:clone 的地址 //注意使用direct文件协议 tempalte = 'direct:https://github.com/taojiangcb/koa-inversify-project.git';
 *  path:clone 的目录
 *  transtional 穿透参数，下载成功是在 传入到 efn 的参数
 * } opts 
 * 
 */
const gitclone = function (efn, opts) {
  let { url, path, transtional } = opts;
  if (url && path) {
    spinner && spinner.start();
    download(url, path, { clone: true }, err => {
      if (err) {
        let ems = err.stack || e.message;
        console.error(ems);
      }
      else {
        spinner.stop();//下载完成后关闭loading;
        efn && efn(transtional);
      }
    })
  }
  else {
    console.error('opts params is error:' + JSON.stringify(opts));
  }
}

module.exports = { gitclone }