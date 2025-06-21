# Using nested loop | Time: O(n^2) | Space: O(1)
def twoNumSum(arr, sum):
    for i in range(len(arr)):
        for j in range(i+1, len(arr) - 1):
            if(arr[i] + arr[j] == sum):
                return [arr[i], arr[j]]
    return None


arr = [3,5,-4,8,11,1,-1,6]
arr2 = [-4,-1,1,3,5,6,8,11]

print(twoNumSum(arr2, 13))

# Using Object | Time: O(n) | Space: O(n)
def twoNumSum(arr, sum):
    obj = {}

    for item in arr:
        temp = sum - item
        if obj.get(temp):
            return [item, temp]
        obj[item] = True
    return None


arr = [3,5,-4,8,11,1,-1,6]
arr2 = [-4,-1,1,3,5,6,8,11]

print(twoNumSum(arr, 10))

# Using toiw pointers | Time: O(nlogn) | Space: 1
def twoNumSum(arr, sum):
    leftPointer = 0
    rightPointer = len(arr) - 1
    arr.sort()

    for num in arr:
        if(arr[rightPointer] + arr[leftPointer] == sum):
            return [arr[leftPointer], arr[rightPointer]]
        elif(arr[leftPointer] + arr[rightPointer] > sum):
            rightPointer-=1
        else:
            leftPointer+=1
    return None

arr = [3,5,-4,8,11,1,-1,6]
arr2 = [-4,-1,1,3,5,6,8,11]

print(twoNumSum(arr2, 13))
