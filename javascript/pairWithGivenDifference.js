function brutalPairWithGivenDifference(list, diff){
	let d;
	for(let i of list){
		for(let j of list){	
			d = i - j;
			if(d === diff){
				return [i, j];
			}
		}
	}
	return [];
}
function pairWithGivenDifference(list, diff){
	let s = new Set();
	for(let n of list){
		c = n - d;
		if(s.has(c)){
			return[n, c];
		}else{
			c = n + d;
			if(s.has(c)){
				return[c, n];
			}
		}
		s.add(n);
	}
	return []; 
}
let l1 = [5,20,3,2,50,80];
let l2 = [5,20,3,-76,50,2];
let d = 78;
console.log(brutalPairWithGivenDifference(l1, d));
console.log(pairWithGivenDifference(l1, d));
console.log(brutalPairWithGivenDifference(l2, d));
console.log(pairWithGivenDifference(l2, d));
let l3 = [-80,20,3,-2,50,80];
d = -78;
console.log(brutalPairWithGivenDifference(l3, d));
console.log(pairWithGivenDifference(l3, d));
