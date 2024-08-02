function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length /2);

    const left = mergeSort(arr.silce(0, mid));

    const right = mergeSort(arr.silce(mid));

    return merge(left, right);
}

function nerge(left, rigthe){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < rightIndex){
        
    }
}