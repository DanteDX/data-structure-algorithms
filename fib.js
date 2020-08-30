function fibNaive(n){
    if(n <= 2) return 1;
    return fibNaive(n-1) + fibNaive(n-2);
}

function fibMemo(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;

    var res = fibMemo(n-1,memo) + fibMemo(n-2,memo);
    memo[n] = res;
    return res;
}

function fibTabulated(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1]; // update as loop runs
    for(var i = 3;i<=n;i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];

}