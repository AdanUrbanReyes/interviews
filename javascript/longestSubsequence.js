a="AA";
b="ABB";
s="";
l="";
[...a].forEach(c => s=b.indexOf(c) != -1 ? s.concat(c) : s);
[...b].forEach(c => l=a.indexOf(c) != -1 ? l.concat(c) : l);
if(s.length > l.length){
	t=l;
	l=s;
	s=t;
}
i=0;
j=0;
lss="";
for(let c of s){
	j=i;
	while(l[i] !== c && i < l.length){
		i++;
	}
	if(c == l[i]){
		lss = lss.concat(c);
		i++;
	}else{
		i=j;
	}
}
console.log(`The short cleaned string is ${s}\nThe long cleand string is ${l}\nThe long subsequences string is ${lss}`);
