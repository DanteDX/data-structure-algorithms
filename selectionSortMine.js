function selectionSortMine(arr){
    let minimumOld,minimumNew,minimumNewIndex,temp;
    for(let i=0;i<arr.length;i++){
        minimumOld = arr[i];
        minimumNew = arr[i+1];
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < minimumNew){
                minimumNew = arr[j];
                minimumNewIndex = j;
            }
        }
        if(minimumNew < minimumOld){
            temp = arr[i];
            arr[i] = minimumNew;
            arr[minimumNewIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSortMine([3,7,4,1,2,10,11,13,-1,0,0]));