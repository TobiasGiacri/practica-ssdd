const array = [1,4,3,2]
let pepe = ''

for (let i =array.length-1; i > -1; i--){
    pepe  = `${pepe} ${array[i]}`
}
    
console.log(`numeros mal ${pepe}`)

pepe = ``
let pepe2 = ``
let pepe3 = ``
array.forEach(function(numero,indice,array){
    pepe = `${pepe} ${numero}`
    pepe2 = `${pepe2} ${indice}`
    if (indice == 0){
        pepe3 = array
    }
        
})
console.log(`numeros bien ${pepe}`)
console.log(`indices ${pepe2}`)
console.log(pepe3)