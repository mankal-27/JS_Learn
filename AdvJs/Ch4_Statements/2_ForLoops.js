let frequency = {}
let str = "mississippi"

for(let letter of str){
    if(frequency[letter]){
        frequency[letter]++;
    }else{
        frequency[letter] = 1
    }
}
console.log(`Frequnecy of ${str} is : `, frequency);