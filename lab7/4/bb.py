a = int(input())
b = input()
s = b.split()
w = 0
for i in range(a):
    b = int(s[i])
    #print(b,end=" ")
    if(b>0):
        w+=1
print(w)
