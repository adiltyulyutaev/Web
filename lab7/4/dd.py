a = int(input())
b = input()
s = b.split()
w = 0
for i in range(1,a):
    b = int(s[i])
    c = int(s[i-1])
    #print(b,end=" ")
    if(b>c):
        w+=1
print(w)