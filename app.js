console.log('Inicio de programa')

setTimeout(()=>{
    console.log('primer timeout')
}, 3000);


setTimeout(()=>{
    console.log('segundo timeout')
}, 0000);


setTimeout(()=>{
    console.log('tercer timeout')
}, 0000);

console.log('fin de la ejecucion')