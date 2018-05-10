const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  //return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  return [month].map(formatNumber).join('/')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n :  + n
}//转化为字符串显示
/*
map映射例子：
var arr = [1, 2, 3];
arr.map(v => v * v); // [1, 4, 9]
arr; // [1, 2, 3]
*/
module.exports = {
  formatTime: formatTime,

}
