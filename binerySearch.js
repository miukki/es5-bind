function find(arr, val) {
	var start = 0, end = arr.length - 1, pos = 0, value = false;
	do {
		pos = Math.floor((start+end)/2);
		if (pos >=0 && pos < arr.length) {
			if (val == arr[pos]) return pos;
			if (val > arr[pos]) start = pos+1;
			if (val < arr[pos]) end = pos-1;
		}
		else {
			return -1;
		}
	} while (start <= end);
	return -1;
}

console.log(find([3,2,3,4,5,6,7,3], 3));


/*
read
http://javascript.ru/forum/misc/55211-poisk-podstroki-v-bolshom-massive-strok-javascript.html
https://habrahabr.ru/post/91605/
https://habrahabr.ru/post/247843/

public static int binarySearch(int[] a, int key) {
     int low = 0;
     int high = a.length;
     while low < high {
         int mid = low/2 + high/2 + (low%2+high%2)/2;
         int midVal = a[mid];
         if (midVal < key)
            low = mid + 1
         else if (midVal > key)
            high = mid;
         else
            return mid; // key found
     }
     return -(low + 1);  // key not found.
}﻿
*/