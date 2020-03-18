from math import sqrt

n = int(input())
m = int(input())

for i in range(n,m+1):
    j = int(sqrt(i))
    if(j*j == i):
        print(i,end=" ")

        
    
