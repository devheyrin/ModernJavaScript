let value = true;
alert(value); // true
alert(typeof value) // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
alert(value); // true
alert(typeof value); // string

value = null;
alert(value); // null
alert(typeof value); // object 

alert("6"/"2"); // 3
alert("6" / 2); // 3
alert(6/"2"); // 3
alert("6"/true); // 6
alert(true / "1"); // 1
alert("true" / "true"); // NaN

alert(Number(NaN)); // NaN
alert(Number(undefined)) // NaN
alert(Number(null)) // 0 

alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)
alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)
alert(Boolean(undefined)); // false
alert(Boolean(null)); // false
alert(Boolean(NaN)); // false
alert(Boolean("0")); // true