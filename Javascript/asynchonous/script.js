console.log (1);
console.log(2);
setTimeout(()=> {
    console.log ('callback  function fired');
}, 3000);

setTimeout(()=> {
    console.log ("4 detik");
}, 4000);

setTimeout(()=> {
    console.log("1 Detik");

},1000);
console.log(3);
console.log(4);