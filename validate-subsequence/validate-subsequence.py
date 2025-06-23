# Time O(n) | O(1)
# Using For loop
# def validateSubsequence(arr, sub):
#     subIdx = 0
#     for value in arr:
#         if (value == sub[subIdx]):
#             subIdx+= 1
#         if (subIdx == len(sub)): break

#     return subIdx == len(sub)

# Time O(n) | O(1)
# Using while
def validateSubsequence(arr, sub):
    subIdx = 0
    arrIdx = 0
    while(arrIdx < len(arr)):
        if(arr[arrIdx] == sub[subIdx]):
            subIdx+=1
        arrIdx+=1

    return subIdx == len(sub)
