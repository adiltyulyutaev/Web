n = int(input())
m = int(input())
s = []

for i in range(n,m+1):
    if(i%2==0):
        s.append(i)

for i in range(len(s)):
    print(s[i],end=" ")