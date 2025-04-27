
// 模块: AsyncFromSyncIteratorContinuation


function AsyncFromSyncIteratorContinuation(r) {
  if (Object(r) !== r) return Promise.reject(new TypeError(r + ' is not an object.'));
  var n = r.done;
  return Promise.resolve(r.value).then(function (r) {
    return {
      value: r,
      done: n
    };
  });
}

module.exports = {
  AsyncFromSyncIteratorContinuation
};
