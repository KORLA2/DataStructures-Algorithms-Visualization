
import { animated } from '@react-spring/web';
   
   import React from 'react'


export const Bubblepairs = (Array) => {
    let animated=[];

Array=Array.slice();

  for(let i=0;i<Array.length;++i){
  
  for(let j=i+1;j<Array.length;++j)
    if(Array[i]>Array[j]){
    
    animated.push({i,j});
    
     Array[i] = Array[j]+Array[i]-(Array[j]=Array[i]);
}
  }
  
       return animated;
}
export  let MergePairs =(Array,low,high)=>{

let animated=[];

Array=Array.slice();

MergeSort(Array,low,high,animated);

console.log(animated)

return animated;

}
let MergeSort=(Array,low, high,animated)=>{

  if(low>=high)return ;

console.log(low,high)
       let mid=Math.floor((low+high)/2)

  MergeSort(Array,low,mid,animated);
    
   MergeSort(Array,mid+1,high,animated);

let i=low,j=mid+1,dummy=[],k=0; 
 
 while(i<=mid&&j<=high)
{  
    if(Array[i]<Array[j]){dummy[k++]=Array[i++];}
else
 {animated.push([i,j]);dummy[k++]=Array[j++];}
   
  }
while(i<=mid)dummy[k++]=Array[i++];

while (j <= high) 

dummy[k++] = Array[j++];

     k=0;

for(let i=low;i<=high;++i)
   Array[i]=dummy[k++];

}

export let QuickPairs=(Array,low,high)=>{

  let animated=[];

  Array=Array.slice();

QuickSort(Array,low,high,animated);
   console.log(Array)


return animated
}

let QuickSort=(Array,low,high,animated)=>{
 
   if(low>=high)return;

  let pivot=partition(Array,low,high,animated);

QuickSort(Array,low,pivot-1,animated);
   QuickSort(Array, pivot+1,high,animated);
}


function partition(Array,low,high,animated){
 
 let i=low+1,j=high;
   while(i<j){

while(i<Array.length&&Array[i]<=Array[low])i++;
    while (Array[j] > Array[low])j--;
   
if(i<j){ animated.push([i,j]);
  
Array[i]=Array[j]+Array[i]-(Array[j]=Array[i]);

}
  }
  animated.push([low,j]);
  Array[low]=Array[j]+Array[low]-(Array[j]=Array[low]);
  
return j;
}
