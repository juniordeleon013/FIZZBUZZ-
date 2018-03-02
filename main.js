for(let i = 1; i <= 100; i++){
	const residuo1 = i % 3;
	const residuo2 = i % 5;
	let word = `${i} Isnt Multiple`;
	if(residuo1 === 0){
		word = `${i} FIZZ`;
	}
	if(residuo2 === 0){
		word = `${i} BUZZ`;
	}

	if(residuo1 === 0 && residuo2 ===0){
		word = `${i} FIZZBUZZ`;
	}

	console.log(i, word);
}