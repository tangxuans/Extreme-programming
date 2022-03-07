import Students from '../src/fizzBuzzConverter'
const students = new Students(100)
    students.setStudents();

describe('students has 100', () => {
    
    
    let result: any = 0;
    beforeEach(() => {
        result = 0;
    });

    test('should convert to buzz when 3 multipl', () => {
        result = students.handleTest(3);
    });

    test('number is 6', () => {
         result = students.handleTest(3);
    });

    test('number is 12', () => {
        result = students.handleTest(12)
    });

    test('number is 18', () => {
        result = students.handleTest(18)
    });

    // test('number is 21', () => {
    //     result = students.handleTest(21)
    // });

    test('number is 99', () => {
        result = students.handleTest(99)
    });

    afterEach(() => {
        expect(result).toBe("Fizz");
    });
});

describe('should convert to buzz when 5 multiple', () => {
    let result: any = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("Buzz");
    });

    test('number is 5', () => {
        result = students.handleTest(5)
    });

    test('number is 10', () => {
        result = students.handleTest(10)
    });

    test('number is 20', () => {
        result = students.handleTest(20)
    });

    test('number is 85', () => {
        result = students.handleTest(85)
    });

    test('number is 95', () => {
        result = students.handleTest(95)
    });

    test('number is 100', () => {
        result = students.handleTest(100)
    });
});
describe('should convert to FizzBuzz when 15 multiple', () => {
    let result: any = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("FizzBuzz");
    });

    test('number is 15', () => {
        result = students.handleTest(15)
    });

    test('number is 30', () => {
        result = students.handleTest(30)
    });

    test('number is 45', () => {
        result = students.handleTest(45)
    });

    test('number is 60', () => {
        result = students.handleTest(60)
    });

    test('number is 75', () => {
        result = students.handleTest(75)
    });

    test('number is 90', () => {
        result = students.handleTest(90)
    });
});

describe('should convert to self string when common number', () => {
    let result: any = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe(result.toString());
    });

    test('number is 1', () => {
        result = students.handleTest(1)
    });

    test('number is 2', () => {
        result = students.handleTest(2)
    });

    test('number is 4', () => {
        result = students.handleTest(4)
    });

    test('number is 94', () => {
        result = students.handleTest(94)
    });

    test('number is 97', () => {
        result = students.handleTest(97)
    });

    test('number is 98', () => {
        result = students.handleTest(98)
    });
});

describe('should throw exception when out of range', () => {
    test('number is 0', () => {
        expect(() => students.handleTest(0)).toThrow(RangeError);
    });

    test('number is 101', () => {
        expect(() => students.handleTest(101)).toThrow(RangeError);
    });
});