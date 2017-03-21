
# sum
def sum(list):
    if (len(list) == 0):
         return 0
    elif (len(list) == 1):
        return list[0]
    else: return list.pop(0) + sum(list)



a = [1, 2, 3, 4]

print sum(a)
