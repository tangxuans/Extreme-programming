import Students from '../src/fizzBuzzConverter'
const students = new Students(100)

describe('should convert to self string when common number', () => {
    let result: any = 0;
    // beforeEach(() => {
    //     result = 0;
    // });
    test('number is 1', () => {
        result = students.handleTest(1);
        expect(result).toBe(1);
    });
    test('number is 4', () => {
        result = students.handleTest(4);
        expect(result).toBe(4);
    });
    test('number is 52', () => {
        result = students.handleTest(52);
        expect(result).toBe(52);
    });
    test('number is 51', () => {
        result = students.handleTest(51);
        expect(result).toBe(51);
    });
    test('number is 17', () => {
        result = students.handleTest(17);
        expect(result).toBe(17);
    });
    test('number is 170', () => {
        result = students.handleTest(170);
        expect(result).toBe(170);
    });
    test('number is 53', () => {
        result = students.handleTest(53);
        expect(result).toBe(53);
    });
    test('number is 153', () => {
        result = students.handleTest(153);
        expect(result).toBe(153);
    });
    test('number is 157', () => {
        result = students.handleTest(157);
        expect(result).toBe(157);
    });
    test('number is 275', () => {
        result = students.handleTest(275);
        expect(result).toBe(275);
    });
    test('number is 1357', () => {
        result = students.handleTest(1357);
        expect(result).toBe(1357);
    });
    test('number is 1375', () => {
        result = students.handleTest(1375);
        expect(result).toBe(1375);
    });

    // afterEach(() => {
    //     expect(result).toBe("Fizz");
    // });
});
describe('should convert to fizz when 3 multiple or indexof 3', () => {
    let result: any = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("Fizz");
    });

    test('number is 6', () => {
        result = students.handleTest(6)
    });

    test('number is 13', () => {
        result = students.handleTest(13)
    });

    test('number is 3', () => {
        result = students.handleTest(3)
    });

    test('number is 130', () => {
        result = students.handleTest(130)
    });

    test('number is 133', () => {
        result = students.handleTest(133)
    });

    test('number is 30', () => {
        result = students.handleTest(30)
    });
    test('number is 63', () => {
        result = students.handleTest(63)
    });
    test('number is 1330', () => {
        result = students.handleTest(1330)
    });
    test('number is 630', () => {
        result = students.handleTest(630)
    });
    test('number is 27', () => {
        result = students.handleTest(27)
    });
    test('number is 270', () => {
        result = students.handleTest(270)
    });
    test('number is 37', () => {
        result = students.handleTest(37)
    });
    test('number is 73', () => {
        result = students.handleTest(73)
    });
    test('number is 237', () => {
        result = students.handleTest(237)
    });
    test('number is 370', () => {
        result = students.handleTest(370)
    });
    test('number is 371', () => {
        result = students.handleTest(371)
    });
    test('number is 2370', () => {
        result = students.handleTest(2370)
    });
    test('number is 57', () => {
        result = students.handleTest(57)
    });
    test('number is 75', () => {
        result = students.handleTest(75)
    });

    test('number is 537', () => {
        result = students.handleTest(537)
    });
    test('number is 375', () => {
        result = students.handleTest(375)
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

    test('number is 15', () => {
        result = students.handleTest(15)
    });
    test('number is 235', () => {
        result = students.handleTest(15)
    });
    test('number is 135', () => {
        result = students.handleTest(15)
    });
});
describe('should convert to whizz when 7 multiple', () => {
    let result: any = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("Whizz");
    });

    test('number is 14', () => {
        result = students.handleTest(14)
    });

    test('number is 56', () => {
        result = students.handleTest(56)
    });

    test('number is 252', () => {
        result = students.handleTest(252)
    });
    test('number is 7', () => {
        result = students.handleTest(7)
    });
    test('number is 70', () => {
        result = students.handleTest(70)
    });
    test('number is 532', () => {
        result = students.handleTest(532)
    });
    test('number is 1533', () => {
        result = students.handleTest(1533)
    });
    test('number is 574', () => {
        result = students.handleTest(574)
    });
    test('number is 175', () => {
        result = students.handleTest(175)
    });
      test('number is 3157', () => {
        result = students.handleTest(3157)
    });
    test('number is 3745', () => {
        result = students.handleTest(3745)
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

    test('number is 60', () => {
        result = students.handleTest(60)
    });

});
describe('should convert to FizzWhizz when 21 multiple', () => {
    let result: any = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("FizzWhizz");
    });

    test('number is 21', () => {
        result = students.handleTest(21)
    });
    test('number is 147', () => {
        result = students.handleTest(147)
    });
    test('number is 1470', () => {
        result = students.handleTest(1470)
    });
    test('number is 567', () => {
        result = students.handleTest(567)
    });
    test('number is 1575', () => {
        result = students.handleTest(1575)
    });
    test('number is 357', () => {
        result = students.handleTest(357)
    });
    test('number is 735', () => {
        result = students.handleTest(735)
    });

});
describe('should convert to BuzzWhizz when 35 multiple', () => {
    let result: any = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("BuzzWhizz");
    });

    test('number is 140', () => {
        result = students.handleTest(140)
    });
    test('number is 105', () => {
        result = students.handleTest(105)
    });
    test('number is 245', () => {
        result = students.handleTest(245)
    });
    test('number is 35', () => {
        result = students.handleTest(35)
    });
    test('number is 315', () => {
        result = students.handleTest(315)
    });

});
describe('should convert to FizzBuzzWhizz when 105 multiple', () => {
    let result: any = 0;

    beforeEach(() => {
        result = 0;
    });
    afterEach(() => {
        expect(result).toBe("FizzBuzzWhizz");
    });

    test('number is 210', () => {
        result = students.handleTest(210)
    });

});
// describe('should throw exception when out of range', () => {
//     test('number is 0', () => {
//         expect(() => students.handleTest(0)).toThrow(RangeError);
//     });

//     test('number is 101', () => {
//         expect(() => students.handleTest(101)).toThrow(RangeError);
//     });
// });