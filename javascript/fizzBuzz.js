let s = '';
for(let i = 1; i < 100; i ++){
    s = '';
    if(i%3 === 0) {
        s = 'Fizz';
    }
    if(i%5 === 0){
        s += 'Buzz';
    }
    if(s !== ''){
        console.log(`${i} ${s}`);
    }
}