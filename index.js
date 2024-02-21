function removeDuplicates(arr){
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

function sum(arr){
 let ans=0;
 for(let i=0;i<arr.length;i++){
    ans+=arr[i];

 }

 return ans;
}

function isEmpty(arr){
    if(arr.length==0){
        return true;
    }
    return false;
}

function findIndex(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}

findMaxElement=(arr)=>{
    
 if(arr.length>0){
    let max=arr[0];
    for( let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
 }

 return undefined;
}

findMinElement=(arr)=>{
    
    if(arr.length>0){
       let min=arr[0];
       for( let i=1;i<arr.length;i++){
           if(arr[i]<min){
               min=arr[i];
           }
       }
       return min;
    }
   
    return undefined;
   }

   module.exports={removeDuplicates,findIndex,findMaxElement,findMinElement,isEmpty,sum}