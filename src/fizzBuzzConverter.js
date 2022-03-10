"use strict";
exports.__esModule = true;
var Students = /** @class */ (function () {
    function Students(num) {
        this.num = num;
    }
    Students.prototype.handleThree = function (value) {
        var repeat = 0;
        var p = '';
        var excludeHandle = 1;
        if (value.toString().indexOf('7') > -1) {
            excludeHandle *= 5;
        }
        else if (value.toString().indexOf('5') > -1) {
            excludeHandle *= 3;
        }
        if (value.toString().indexOf('3') > -1 && value.toString().indexOf('5') == -1) {
            return p = 'Fizz';
        }
        console.log(excludeHandle);
        if (value % 3 === 0 && excludeHandle % 3 !== 0) {
            p += 'Fizz';
            repeat++;
        }
        if (value % 5 === 0 && excludeHandle % 5 !== 0) {
            p += 'Buzz';
            repeat++;
        }
        if (value % 7 === 0 && excludeHandle % 7 !== 0) {
            p += 'Whizz';
            repeat++;
        }
        if (repeat === 0) {
            p = value;
        }
        return p;
    };
    // handleIndex(value:number){
    //     let p:any = value ;
    //     if(value.toString().indexOf('3')>0){
    //         p = 'Fizz'
    //     }if(value.toString().indexOf('5')>0){
    //     }
    //     return p
    // }
    Students.prototype.handleTest = function (n) {
        // if(n<1||n>this.students.length){
        //     throw new RangeError('out of range');            
        // }
        // let p =  this.handleIndex(n);//this.handleThree(n);
        // if(typeof(p)=='number'){
        var p = this.handleThree(n);
        // }
        return p;
    };
    return Students;
}());
exports["default"] = Students;
var students = new Students(100);
var a = students.handleTest(6);
console.log(a);
