// function createPerson(name, sex) {

//     // 1.原料
//     var obj = new Object();

//     // 2.加工
//     obj.name = name;
//     obj.sex = sex;

//     obj.showName = function() {
//         console.log("我的名字叫：" + this.name);
//     };
//     obj.showSex = function() {
//         console.log("我是" + this.sex + "的");
//     };

//     // 3.出厂
//     return obj;
// }

// var p1 = createPerson("blue", "男");
// var p2 = createPerson("Leo", "女");

// p1.showName();
// p1.showSex();
// p2.showName();
// p2.showSex();

// var arr1 = new Array(12, 5, 8, 4);
// var arr2 = new Array(44, 6, 5, 55, 9);

// Array.prototype.sum = function() {
//     var result = 0;
//     var i = 0;

//     for (i = 0; i < this.length; i++) {
//         result += this[i];
//     }

//     return result;
// };

// alert(arr1.sum == arr2.sum);


// function createPerson(name, sex) {  // 构造函数
//     // 属性：每个对象都各不相同
//     this.name = name;
//     this.sex = sex;
// }

// // 方法：
// createPerson.prototype.showName = function() {

//     alert("我的名字叫:" + this.name);
// };

// createPerson.prototype.showSex = function() {
//     alert("我是" + this.sex + "的");
// };

// var p1 = new createPerson("blue", "男");
// var p2 = new createPerson("Leo", "女");

// p1.showName();
// p1.showSex();
// p2.showName();
// p2.showSex();

Array.prototype.a = 12;

var arr = [1, 2, 3];

alert(arr.a);

arr.a = 5;

alert(arr.a);

delete arr.a;

alert(arr.a);
