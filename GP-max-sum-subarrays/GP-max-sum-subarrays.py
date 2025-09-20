def max_sum(arr, k):
    currect_max = 0
    start = 0
    sum = 0

    for num, index in enumerate(arr):
        sum+= num
        if(index >= k-1):
            currect_max = max(currect_max, sum)
            sum-= arr[start]
            start+= 1

    return currect_max


print(max_sum([2, 1, 5, 1, 3, 2], 3))
