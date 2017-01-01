function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}

Person.prototype.showName = function() {
    alert(this.name);
};

Person.prototype.showSex = function() {
    alert(this.sex);
};

var oP1 = new Person('blue', '男');

// oP1.showName();
// oP1.showSex();

// ------------------------------------------------------
function Worker(name, sex, job) {
    // this ==> new 出来的Worker
    //  构造函数伪装   调用父级的构造函数——为了继承属性
    Person.call(this, name, sex);
    this.job = job;
}
// 原型链    通过原型来继承父级的方法
// Worker.prototype = Person.prototype;

for (var i in Person.prototype) {
    Worker.prototype[i] = Person.prototype[i];
}
Worker.prototype.showJob = function() {
    alert(this.job);
};

// var oW1 = new Worker('blue', '男', '打杂');
// oW1.showName();
// oW1.showJob();


var oP = new Person('blue', "男");
var oW = new Worker('Leo', "gdd", "dadd");

oP.showName();
oP.showSex();

oW.showName();
oW.showSex();
oW.showJob();
