console.log("SECTION 12: SELECTION SORT");

// ========= Section 12: Selection Sort =========

	//Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

	// [19,44,38,5,47,15];

		//We loop through the array and each time we are placing the smallest value at arr[0], swapping positions with the value previously occupying arr[0]

		//We then repeat this process starting at arr[0 + 1] since arr[0] is already sorted.

	//SELECTION SORT PSEUDOCODE
		//Create a function selectionSort = (arr) => {};
		// Store the first element as the smallest value you've seen so far.
		// Compare this item to the next item in the array until you find a smaller number.
		// If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array.
		// If the 'minimum' is not the value(index) you initially began with, swap the two values.
		// Repeat this process with the next element until the array is sorted.

		// loop + loop, singleConditional, and a swap

const selectionSort = (arr) => {

	for ( let i = 0; i < arr.length; i++ ) {
		let smallest = i;
		for ( let j = i + 1; j < arr.length; j++ ) {

			if ( arr[j] < arr[smallest] ) {
					smallest = j;
			}
		}
		if (i !== smallest) {
			let temp = arr[i];
			arr[i] = arr[smallest];
			arr[smallest] = temp;
		}
	}
	return arr;
}

console.log(selectionSort([0,2,34,22,10,19,17]));

function selectionSortES5(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i+1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;
}

console.log(selectionSortES5([0,2,34,22,10,19,17]));

function selectionSortES2015(arr) {
	const swap = ( arr, idx1, idx2 ) => 
		([ arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i+1; j < arr.length; j++) {
			if (arr[lowest] > arr[j]) {
				lowest = j;
			}
		}
		if (i !== lowest) swap(arr, i, lowest);
	}
	return arr;
}

//THE STEPS ARE THE SAME:
	// 1. LOOP OVER EACH ITEM
	// 2. SET LOWEST TO BE I
	// 3. CHECK TO SEE IF J IS < LOWEST
	// 4. IF SO SWAP AND REPEAT UNTIL ARR IS SORTED

console.log(selectionSortES2015([0,2,34,22,10,19,17]));