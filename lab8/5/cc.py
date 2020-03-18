def xor(a,b):
    if(a and b):
        return False


    elif(not(a or b) ):
        return False


    else:
        return True




a = input()
z = a.split()


b = bool(z[0])
c = bool(z[1])

print(xor(b,c))
