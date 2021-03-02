function brutalPairWithGivenSum(list, target) {
	for(let s = 0; s < list.length; s++){
		if(list[s] === target){
			return [s, s];
		}
		let c = list[s];
		for(let e = s + 1; e < list.length; e++){
			c = c + list[e];
			if(c === target){
				return [s, e];
			}else if(c > target){
				break;
			}
		}
	}
	return [];
}
function pairWithGivenSum(list, target){
	let s = 0;
	let m = new Map();
	m.set(0, -1);
	for(let i = 0; i < list.length; i++){
		s += list[i];
		if(m.has(s - target)){
			return [m.get(s - target) + 1, i]
		}
		m.set(s, i);
	}
	return [];
}
let l = [1,2,3,4,1,2,4,4,5,10];
let r = 15;
console.log(brutalPairWithGivenSum(l, r));
console.log(pairWithGivenSum(l, r));
l = [1,2,3,4,5,6,7,8,9];
console.log(brutalPairWithGivenSum(l, r));
console.log(pairWithGivenSum(l, r));
l = [1,2,3,10,1,20,4,5,5,10];
r = 29;
console.log(brutalPairWithGivenSum(l, r));
console.log(pairWithGivenSum(l, r));
l = [15,2,3,4,1,2,4,4,5,10];
r=15;
console.log(brutalPairWithGivenSum(l, r));
console.log(pairWithGivenSum(l, r));
r = -1;
console.log(brutalPairWithGivenSum(l, r));
console.log(pairWithGivenSum(l, r));