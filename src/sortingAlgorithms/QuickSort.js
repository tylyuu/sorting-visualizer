export function getQuickSortAnimations(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  
  function quickSortHelper(
    arr,
    startIdx,
    endIdx,
    animations,
  ) {
    if (startIdx < endIdx){
    const pi = partition(arr, startIdx, endIdx, animations)
    quickSortHelper(arr, startIdx, pi-1, animations);
    quickSortHelper(arr, pi+1, endIdx,animations);
    }
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
  
function partition(
  arr,
  startIdx,
  endIdx,
  animations,
) {
  let pivot = arr[endIdx];
  let i = startIdx-1 ;
  for (let j = startIdx; j <= endIdx - 1; j++) {
   //   animations.push([j, pivot]);
   //   animations.push([j, pivot]);
      // If current element is smaller than pivot
      if (arr[j] < pivot) {
          // swap current with i 
          i++;
     //     animations.push([i, j]);
     //     animations.push([i, j]);
          animations.push([i, arr[j]]);
          animations.push([j,arr[i]]);
          swap(arr, i, j);
      } 
  };
  i++;
//  animations.push([i, endIdx]);
//  animations.push([i, endIdx]);
  animations.push([i,arr[endIdx]]);
  animations.push([endIdx,arr[i]]);
  swap(arr, i , endIdx);
  return i;
}
    