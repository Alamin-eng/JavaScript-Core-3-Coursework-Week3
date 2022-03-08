# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers. 
Ans: line 1 x is a global variable and line 4 x is local variable

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
Ans: will print 10 for the function's console.log(x) because x is global variable, but will print undefined for console.log(f1()) because function is not returning anything, and will also throw an error mentioning y is not defined because variable y is locally scopped inside function

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x); 

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
Ans: console.log(x); will print out 9 and console.log(y) will print { x: 9 } because they are both global variables and their values is never altered