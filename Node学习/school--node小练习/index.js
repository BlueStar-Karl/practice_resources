// 入口文件
var klass  = require('./class');

exports.add =  function(Klasses) {
    klass.forEach(function (item, index) {
        var _klass = item;
        var teacherName = item.teacher;
        var students = item.students;

        klass.add(teacherName,students)
    })
}


