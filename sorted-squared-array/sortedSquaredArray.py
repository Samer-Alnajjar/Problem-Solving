# Using Brute Force method
# Time: O(n logn) | Space: O(n)
def sortedSquaredArray(array):
    newArr = []
    for value in array:
        newArr.append(value * value)

    return sorted(newArr)


# print(sortedSquaredArray([-7, -3, 2, 3, 11]))
# [4, 9, 9, 49, 121]

# Using pointers
# Time: O(n) | Space: O(n)
def sortedSquaredArray(array):
    leftPointer = 0
    rightPointer = len(array)-1
    newArr = []
    while(leftPointer <= rightPointer):
        if(abs(array[leftPointer]) < abs(array[rightPointer])):
            newArr.insert(0, array[rightPointer] * array[rightPointer])
            rightPointer-= 1
        elif(abs(array[leftPointer]) >= abs(array[rightPointer])):
            newArr.insert(0, array[leftPointer] * array[leftPointer])
            leftPointer+= 1

    return newArr


print(sortedSquaredArray([-7, -3, 2, 3, 11]))
