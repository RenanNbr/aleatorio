function quickSort(arr){
    if(arr.length <= 1){
        return arr;
}
   let pivot = arr[Math.floor(arr.length /2)];

   let left =[]
   let middle = []
   let right = []

   for (let element of arr){
    if (element < pivot){
        left.push(element)
    }else if(element === pivot){
        middle.push(element);
    }else{
        right.push(element);
    }
   }
   return quickSort(left).concat(middle).concat(quickSort(right));
}

  let arr = [3,6,8,10,1,2,1];
   console.log(quickSort(arr));

