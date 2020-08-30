function pivot(arr,start=0,end=arr.length-1){
    function swap(arr1,i,j){
        let temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start+1;i<arr.length;i++){
        if(arr[i] < pivot){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

console.log(quickSort([10,9,8,7,4,3,2,1,0,0,-1,-2,-10,-7]));

