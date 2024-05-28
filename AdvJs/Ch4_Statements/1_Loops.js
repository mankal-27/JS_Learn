for(let count = 0 ; count < 10 ; count++){
    console.log(count);
}

// let i, j, sum = 0;
// for(i = 0, j = 10 ; i < 10 ; i++, j--) {
// sum += i * j;
// }

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data){
    sum += element;
}
console.log(sum);

let o = {x:1,y:2,z:3};
let keys = ""
let values = []
let pairs = ""
for(let k of Object.keys(o)){
    keys += k;
}
for(let v of Object.values(o)){
    values.push(v)
}
for(let [k,v] of Object.entries(o)){
    pairs += k+v;
}
console.log(keys);
console.log(values);
console.log(pairs);