n = int(input())
d = True
while n > 1:
    if(n%2 == 1):
        print("NO")
        d = False
        break
       
    n = int(n/2)


if(d):
    print("YES")   


