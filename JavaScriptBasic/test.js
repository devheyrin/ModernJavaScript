describe("pow", function() {
    describe("x의 세제곱", function() {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x}를 세 번 곱하면 ${expected} 입니다`, 
            function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    describe("x의 네제곱", function() {
        function makeTest(x) {
            let expected = x * x * x * x;
            it(`${x}를 네 번 곱하면 ${expected} 입니다`, 
            function() {
                assert.equal(pow(x, 4), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    })
    describe("NaN 반환 검사", function(){
        it("n이 음수일 때 결과는 NaN", function(){
            assert.isNaN(pow(2, -1));
        });
        it("n이 정수가 아닐 때 결과는 NaN", function(){
            assert.isNaN(pow(2, 1.5));
        });
    });
  });