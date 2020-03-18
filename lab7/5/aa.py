def minValue(a,b,c,d):
    min1 = 0
    min2 = 0
    if(a<b):
        min1 = a
    elif(b<=a):
        min1 = b 
    if(d<c):
        min2 = d
    elif(c<=d):
        min2 = c
    if(min1 < min2):
        return min1 
    else:
        return min2       


z = input()
s = z.split() 
n = int(s[0])
m = int(s[1])
a = int(s[2])
b = int(s[3])
c = minValue(m,n,a,b)
print(c)
