
class Students {
    num:Number = 100;
    students:Array<any> = [];
    constructor(num:number){
        this.num = num;
        // console.log(this.students)
    }
    //1设置学生数组
    setStudents(){
        let arr:Array<any> = [];
        for(let i = 0;i<this.num;i++){
            //每个学生都是正整数
            arr.push(i+1);
        }
        this.students = arr;
    }
    //22.	学生报数时，如果所报数字是3的倍数，那么不能说该数字，而要说Fizz;如果所报数字是5 的倍数，那么要说Buzz;如果所报数字是第7的倍数，那么要说Whizz。 
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
    // 3.	学生报数时，如果所报数字同时是两个特殊数的倍数情况下，也要特殊处理，比如3和5的 倍数，那么不能说该数字，而是要说FizzBuzz, 以此类推。如果同时是三个特殊数的倍数， 那么要说FizzBuzzWhizz。 
    handleThree(value:number){
            let repeat = 0;
            let p:any = '' ;
            if(value%3===0){
              p +='Fizz';
              repeat++;
            }
            if(value%5===0){
               p += 'Buzz';
               repeat++
            }
            if(value%7===0){
                p += 'Whizz';
                repeat++
            }
            if(repeat===0){
                p = value
            }
            return p
    }
    //4.	学生报数时，如果所报数字包含了3，那么也不能说该数字，而是要说相应的单词，比如要 报13的同学应该说Fizz。 
    // handleFour(value:number){
    //         let p = "";
    //         if(value.toString().indexOf('3')>-1){
    //            p = 'Fizz';
    //         }
    //         // if(value.toString().indexOf('5')>-1){
    //         //     p = 'Buzz';
    //         // }
    //         // if(value.toString().indexOf('7')>-1){
    //         //     p = 'Whizz';
    //         // }
    //         return p
    // }
    handleTest(){
        for(let i = 0;i<this.students.length;i++){
            let value = this.students[i]
            let p:any 
            if(value.toString().indexOf('3')>-1){
                p = "Fizz";
            }else{
                p = this.handleThree(value)
            }
            console.log(p)
        }
    }
    
}
const students = new Students(105)
students.setStudents();
students.handleTest();