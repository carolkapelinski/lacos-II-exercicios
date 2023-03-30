const array = ["pizza" , "xis", "lasanha", "empadão","churrasco"]

let colocacao = 1
for(let i of array){
    console.log(`${colocacao} - ${i}`);
    colocacao++
}

// for(let i of array){
//     console.log(colocacao++ , i);
// }