def findSmallest(arr):
    smallestEle = arr[0]
    smallestIdx = 0
    for i in range(1, len(arr)):
        if arr[i] < smallestEle:
            smallestEle = arr[i]
            smallestIdx = i

    return smallestIdx

def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallestEle = findSmallest(arr)
        newArr.append(arr.pop(smallestEle))

    return newArr

print(selectionSort([6,1,5,9,10]))
