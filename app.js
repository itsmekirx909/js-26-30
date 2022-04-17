// chap26-30

// Q1
// var num = prompt('Enter positive number')
// var ifTrue = false

// for(var i = 0 ; i < num.length ; i++){
//     if(num[i] !== '-'){
//         document.write('Number: ' + num + '<br/>')
//         document.write('Round off value: ' + Math.round(num) + '<br/>')
//         document.write('Floor: ' + Math.floor(num) + '<br/>')
//         document.write('Ceil: ' + Math.ceil(num) + '<br/>')
//         ifTrue = true
//     }
//     break
// }
// if(ifTrue == false){
//     document.write('PUT POSITIVE NUMBER')
// }

// Q2
// var num = prompt('Enter negative number')
// var ifTrue = false

// for(var i = 0 ; i < num.length ; i++){
//     if(num[i] == '-'){
//         document.write('Number: ' + num + '<br/>')
//         document.write('Round off value: ' + Math.round(num) + '<br/>')
//         document.write('Floor: ' + Math.floor(num) + '<br/>')
//         document.write('Ceil: ' + Math.ceil(num) + '<br/>')
//         ifTrue = true
//     }
//     break
// }
// if(ifTrue == false){
//     document.write('PUT NEGATIVE NUMBER')
// }

// Q3
// var num = prompt('Enter number')
//         document.write('Absolute value of ' + num + ' is ' + Math.abs(num) + '<br/>')

// Q4
// document.write('Random dice value: ' + Math.ceil(Math.random() * 6))

// Q5
// var coin = Math.ceil(Math.random() * 2)
// if(coin == 1){
//     document.write('Coin value: Heads')
// }else{
//     document.write('Coin value: Tails')
// }

// Q6
// document.write('Random number between 1-100: ' + Math.ceil(Math.random() * 100))

// Q7
// var val = prompt('Enter weight in kilograms')

// var val2 = val.split('')
// console.log(val2)

// for(var i = 0 ; i < val.length ; i++){

//     var val3 = Number(val2[i])
//     document.write(val3)
//     document.write(typeof val3)

//     if(typeof val3[i] == typeof 1){
//         alert('es')
//     }

//     // for(var j = 0 ; j< val3.length ; j++){
        
//     //     if(typeof val3.slice[j] === typeof 1){
//     //         document.write('es')
//     //     }
//     // }

// }

// Q8
// var num = +prompt('Guess the random number')
// var random = Math.floor(Math.random() * 10)

// if(num == random){
//     alert('Correct')
// }else{
//     alert('Try again')
// }


