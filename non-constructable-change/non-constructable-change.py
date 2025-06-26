# Time O(n) | Space O(1)
# def nonConstructableChange(coins):
#     coins.sort()

#     change = 0
#     for coin in coins:
#         if coin > change+1:
#             return change+1

#         change+=coin

#     return change+1

def nonConstructableChange(coins):
    coins.sort()
    change = 0
    for i in range(len(coins)):
        if(coins[i] - i <= 2):
            change+= coins[i]
        else:
            change+1
    return  change+1

arr = [5, 7, 1, 1, 2, 3, 22]

print(nonConstructableChange(arr))
