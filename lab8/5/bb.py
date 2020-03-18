def power(a,b):
    c = 1
    while(b>0):
        c = c*a
        b-=1
    return c    


a = input()

b = a.split()

c = float(b[0])
d = int(b[1])

e = power(c,d)

print(e)
