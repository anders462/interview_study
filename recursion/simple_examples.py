
# factorial
def fac(n):
    if(n == 1): return 1;
    else: return n*fac(n-1)

print fac(5)

# countdown
def countdown(n):
    print n
    if n == 0: return
    else: countdown(n-1)

countdown(10)


# call stack
