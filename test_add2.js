const add = require('./addinator.js');

class TestSuite {
    runTest(){
        this.testAddPositiveNumbers();
        this.testAddNegativeNumbers();
        this.testAddPositiveAndNegativeNumbers()
    }
    assertEquals(a, b){
        return a === b;
    }
    testAddPositiveNumbers(){
        const result = this.assertEquals(add(5, 7), 12);
        console.log(result, 'testAddPositiveNumbers');
    }
    testAddNegativeNumbers(){
        const result = this.assertEquals(add(-5, -7),12);
        console.log(add(-5, -7) === -12,'testAddNegativeNumbers');
    }
    testAddPositiveAndNegativeNumbers(){
        const result =this.assertEquals(add(5, -7), -2);
        console.log(result, 'testAddPositionAndNegativeNumbers');
    }
}

const testSuite = new TestSuite();
testSuite.runTest();