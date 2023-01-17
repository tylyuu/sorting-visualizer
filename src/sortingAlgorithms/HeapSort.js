
export  function getHeapSortAnimations( arr )
{
const animations = [];
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i, animations);

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
    // Move current root to end
    animations.push([0, arr[i]]);
    animations.push([i, arr[0]]);
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0, animations);
    }
return animations;
}

// To heapify a subtree rooted with node i which is an index in arr[]. n is size of heap
function heapify(arr, N, i, animations)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest !== i) {
    animations.push([i, arr[largest]]);
    animations.push([largest, arr[i]]);
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest, animations);
    }
return arr;
}
