a = int(input())
b = input()
s = b.split()
w = 0
isPos = 2
result = False
for i in range(1,a):
    b = int(s[i])
    c = int(s[i-1])
    if((b>=0 and c>=0) or (b<0 and c<0)):
        result = True

if(result):
    print("YES")
else:
    print("NO")
            


    
    