/**
 * Created with WebStorm.
 * User: stoneship
 * Email:258137678@qq.com
 * Date: 16/5/7
 * Time: 下午4:51
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs')
var path = require('path')

var pageMaps = []
var ls = function (ff) {
  var files = fs.readdirSync(ff)
  for (var file in files) {
    var fname = ff + path.sep + files[file]
    var stat = fs.statSync(fname)
    if (stat.isDirectory() == true) {
      ls(fname)
    } else {
      debugger
      var inpath = ff + path.sep + files[file]
      inpath = inpath.replace('./src/page//', '').replace('.vue', '')
      pageMaps.push({
        name: inpath
      })
      console.log(inpath)
    }
  }
}
ls('./src/page/')

var getFuns = function () {
  var array = []
  for (var i = 0; i < pageMaps.length; i++) {
    var obj = pageMaps[i]
    array.push(`'${obj.name}': {
    component: function (res) {
      require([ './page/${obj.name}' ], res)
    }
  }`)
  }
  return array.join(', ')
}
var tempStr = `var routerMap = {
  ${getFuns()}
}
export default routerMap

`
console.log(tempStr)

fs.writeFile('src/RouterMap.js', tempStr, function (err) {
  if (err) throw err
  console.log('It\'s saved!')
})
