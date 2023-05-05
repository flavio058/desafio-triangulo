let b = window.prompt("Digite o valor de B:");
let a = window.prompt("Digite o valor de A:");
let c = window.prompt("Digite o valor de c:");
let delta = (b*b) - 4 * a * c;
let verticeX = -b/(2*a)
let verticeY =(-delta)/(4*a)

window.alert(`o valor de delta é: ${delta} , o valor da vertice X é: ${verticeX} , o valor da vertice Y é: ${verticeY} `)