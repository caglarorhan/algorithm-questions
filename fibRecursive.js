function fib(n){
if(n<2) return 1;
  return fib(n-1) + fib(n-2);
}


//1 1 2 3 5 8 13 21 33 54
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

