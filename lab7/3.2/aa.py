from math import sqrt

n = int(input())
i = 1
while n != i :
    j = int(sqrt(i))
    if(j*j==i):
        print(i)
    i = i + 1    
