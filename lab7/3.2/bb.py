n = int(input())
i = 2
while n + 1 > i:
    if(n % i == 0):
        print(i)
        break  
    i = i + 1