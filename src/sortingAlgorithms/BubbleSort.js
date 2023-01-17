export function getBubbleSortAnimations(array) {
    const animations = [];
    bubbleSortHelper(array, array.length , animations);
    return animations;
  }

function swap(arr, xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

function bubbleSortHelper( arr, n, animations)
{
var i, j;
for (i = 0; i < n-1; i++)
{
	for (j = 0; j < n-i-1; j++)
	{
		if (arr[j] > arr[j+1])
		{
    animations.push([j, arr[j+1]]);
    animations.push([j+1, arr[j]]);
		swap(arr,j,j+1);
		
		}
	}

}
}




