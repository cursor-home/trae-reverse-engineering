// 模块: ma
// 此函数处理便携式安装配置，设置应用程序数据存储路径
// 根据平台和环境设置确定数据位置和临时文件目录

function ma(e) {
  // 获取当前应用程序目录
  var t = fe.dirname(pa);
  
  // 获取应用程序根目录，根据开发模式和平台有不同处理
  function s() {
    // 如果在开发模式下，直接使用当前目录
    // 否则，根据平台(特别是macOS和其他平台)进行不同级别的向上查找
    return process.env.VSCODE_DEV 
      ? t 
      : process.platform === 'darwin' 
        ? fe.dirname(fe.dirname(fe.dirname(t))) // macOS: 向上三级
        : fe.dirname(fe.dirname(t));           // 其他: 向上两级
  }
  
  // 确定便携式数据存储路径
  function r() {
    // 如果已设置VSCODE_PORTABLE环境变量，直接使用该路径
    if (process.env.VSCODE_PORTABLE) return process.env.VSCODE_PORTABLE;
    
    // Windows和Linux平台: 在应用目录下的'data'子目录
    if (process.platform === 'win32' || process.platform === 'linux') 
      return fe.join(s(), 'data');
    
    // 其他平台(如macOS): 使用配置指定或默认的便携式数据目录名
    var c = e.portable || ''.concat(e.applicationName, '-portable-data');
    return fe.join(fe.dirname(s()), c);
  }
  
  // 计算便携式数据路径
  var i = r(),
      // 检查便携式模式: 如果目录存在且未指定target参数则为便携式模式
      n = !('target' in e) && Rn.existsSync(i),
      // 临时文件目录
      a = fe.join(i, 'tmp'),
      // 检查临时目录是否存在
      o = n && Rn.existsSync(a);
  
  // 设置或清除VSCODE_PORTABLE环境变量
  n ? process.env.VSCODE_PORTABLE = i : delete process.env.VSCODE_PORTABLE;
  
  // 如果临时目录存在，根据平台设置相应的临时目录环境变量
  if (o) {
    if (process.platform === 'win32') {
      process.env.TMP = a;
      process.env.TEMP = a;
    } else {
      process.env.TMPDIR = a;
    }
  }
  
  // 返回便携式配置信息
  return {
    portableDataPath: i,  // 便携式数据路径
    isPortable: n         // 是否为便携式模式
  };
}

module.exports = {
  ma
};
