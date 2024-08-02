function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[Math.floor(arr.length /2)];

    let left =[]
    let middle = []
    let right = []

    for(let element of arr){
        if(element < pivot){
            let.push(element)
    }else if(element === pivot){
        middle.push(element);
    }else{
        right.push(element);
    }
}
  return quickSort(left).concat(middle).concat(right)

}

function main(){
    let arr = [3,6,8,10,1,2,1]
    console.log("array original" + arr);
    let  sortdeArr= quickSort(arr)
    console.log("Array ordenado" + sortdeArr);
}

main();