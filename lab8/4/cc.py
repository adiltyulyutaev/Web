a = int(input())
b = input()
s = b.split()

for i in range(a):
    b = int(s[i])
    if(b%2==0):
        print(b,end=" ")


