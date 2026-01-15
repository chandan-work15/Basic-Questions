//Find minimum value in an array

let arr=[2,5,2,9,4,2]
let min;
let index;

for(let i=0; i<=(arr.length)-1; i++){
    if(arr[0]<=arr[i]){
        min=arr[0];
    }
    else{
        min=arr[i];
        arr[0]=min;
        index=i;
    }
}

console.log(`${arr[0]} at index ${index}`);

//Other logic

// let arr=[1,5,0,1,4,2,0]
// let min = arr[0];
// let index=0;

// for(let i=0; i<=(arr.length)-1; i++){
//     if(min>arr[i]){
//         min = arr[i];
//         index =i;
//     }
// }

// console.log(`${arr[0]} at index ${index}`);