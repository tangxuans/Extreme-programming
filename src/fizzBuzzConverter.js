// export type FizzBuzzType = number | string;
// const fizzBuzzConverter = (number: number): FizzBuzzType => {
//     return 0;
// }
// export default fizzBuzzConverter;
var Students = /** @class */ (function () {
    function Students(num) {
        this.num = 100;
        this.students = [];
        this.num = num;
        // console.log(this.students)
    }
    //1设置学生数组
    Students.prototype.setStudents = function () {
        var arr = [];
        for (var i = 0; i < this.num; i++) {
            //每个学生都是正整数
            arr.push(i + 1);
        }
        this.students = arr;
    };
    //2
    // handleTwo(){
    //     for(let i = 0;i<this.students.length;i++){
    //         let value = this.students[i];
    //         if(value%3===0){
    //           this.students[i] = 'Fizz';
    //         }
    //         if(value%5===0){
    //             this.students[i] = 'Buzz';
    //         }
    //         if(value%7===0){
    //             this.students[i] = 'Whizz';
    //         }
    //     }
    // }
    //3  
    Students.prototype.handleThree = function (value) {
        console.log(43, value);
        var repeat = 0;
        var p = '';
        if (value % 3 === 0) {
            p += 'Fizz';
            repeat++;
        }
        if (value % 5 === 0) {
            p += 'Buzz';
            repeat++;
        }
        if (value % 7 === 0) {
            p += 'Whizz';
            repeat++;
        }
        if (repeat === 0) {
            p = value;
        }
        return p;
    };
    //4
    Students.prototype.handleFour = function (value) {
        var p = "";
        if (value.toString().indexOf('3') > -1) {
            p = 'Fizz';
        }
        // if(value.toString().indexOf('5')>-1){
        //     p = 'Buzz';
        // }
        // if(value.toString().indexOf('7')>-1){
        //     p = 'Whizz';
        // }
        return p;
    };
    // handleF(num:number){
    //     let p="";  
    //     if(num%3==0){p+="Fizz";}
    //     if(num%5==0){p+="Buzz";}
    //     if(num%7==0){p+="Whizz";}
    //     return p
    // }
    Students.prototype.handleTest = function () {
        for (var i = 0; i < this.students.length; i++) {
            var value = this.students[i];
            var p = void 0;
            if (value.toString().indexOf('3') > -1) {
                p = "Fizz";
            }
            else {
                p = this.handleThree(value);
            }
            console.log(p);
        }
    };
    return Students;
}());
var students = new Students(105);
students.setStudents();
students.handleTest();
