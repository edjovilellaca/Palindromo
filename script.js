let palindromo = "anitalavalatina";
let palindromo2 = palindromo.split('').reverse().join('');

if(palindromo.match(palindromo2)){
    console.log("La palabra es un palindromo.")
}else{
    console.log("La palabra no es un palindromo.")
}