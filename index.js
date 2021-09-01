function receivesAFunction(callback){
    return callback();
} 

function returnsANamedFunction(){
    return function test(){};
}

function returnsAnAnonymousFunction(){
    return function (){}
}

//receivesAFunction('Hi', function (callback){ return 'I wanted to say, ' + callback;});



















/*
function greet (name, cb) {
    return cb(name);
  }
  
  greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
  // => "Hello there, Ada Lovelace"
  
  function doMath (num1, num2, cb) {
    return cb(num1, num2);
  }
  
  doMath(42, 8, function (num1, num2) { return num1 * num2; });
  // => 336
  */