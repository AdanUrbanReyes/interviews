const bs = [
    { "gym" : false, "school" : true, "store" : false }
    , { "gym" : true, "school" : false, "store" : false }
    , { "gym" : true, "school" : true, "store" : false }
    , { "gym" : false, "school" : true, "store" : false }
    , { "gym" : false, "school" : true, "store" : true }
];
const rs = ["gym", "school", "store"];

function distance(index, requirement) {
    let s = 0;
    let b = index - s;
    let a = index + s;
    while(b > -1 || a < bs.length){
        if( (b > -1 && bs[b][requirement]) || (a < bs.length && bs[a][requirement]) ){
            return s;
        }
        s++;
        b = index - s;
        a = index + s;
    }
    return bs.length;
}

function betterBlock(){
    let bb = 0;
    let bd = Number.MAX_SAFE_INTEGER;
    for(let b = 0; b < bs.length; b++) {
        let d = 0;
        for(let r of rs){
            console.log(`${b} ${r} ${distance(b, r)}`);
            d += distance(b, r);
        }
        console.log(`${b} ${d}`);
        if(d == 0){
            return b;
        }else{
            if(d < bd){
                bd = d;
                bb = b;
            }
        }
    }
    return bb;
}

let bb = betterBlock();
console.log(`Better block ${bb} =  ${JSON.stringify(bs[bb])}`);