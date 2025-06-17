def nonConstructableChange(coins):
    coins.sort()

    change = 0
    for coin in coins:
        if coin > change+1:
            return change+1

        change+=coin

    return change+1

arr = [5, 7, 1, 1, 2, 3, 22]

print(nonConstructableChange(arr))
