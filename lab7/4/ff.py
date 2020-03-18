a = int(input())
b = input()
s = b.split()
w = 0
for i in range(1,a-1):
    b = int(s[i])
    c = int(s[i-1])
    d = int(s[i+1])
    if(b>c and b>d):
        w+=1
print(w)