n = int(input())

if(n%2==1 or (n%2==0 and n in range(6,21))):
    print("Weird")
else:
    print("Not Weird")    

if __name__ == '__main__':
    n = int(input())
    student_marks = []
    student_names = []
    

    while n!=0:
        z = input().split()
        student_marks.append(z[0])
        a = 0
        for i in range (1,4):
            a+=float(z[i])
        a/=3    
        student_marks.append(a)
        n-=1
        c+=1
        
        
    b = input()
    for i in range(n):
        if(student_names[i]==b):
            print(student_marks[i])
            break
        


print("Hello, World!")



b = int(input())
a = int(input())

print(a+b)
print(b-a)
print(a*b)


a = float(input())
b = float(input())


print(a//b)
print(a/b)




a = int(input())

for i in range (0,a):
    print(i*i)




a = int(input())

for i in range(1,a+1):
    print(i,end="")




if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    ar = []
    p = 0
    for i in range (0,x+1):
        for j in range (0,y+1):
            for k in range (0,z+1):
                if(i+j+k!=n):
                    ar.append([])
                    ar[p]=[i,j,k]
                    p+=1

print(ar)




if __name__ == '__main__':
    n = int(input())
    arr = input().split()
    for i in range(0,n):
        a = int(arr[i])
        arr[i] = a

    arr.sort()
    mx = arr[n-1]
    while n!=0:
        if(arr[n-1]!=mx):
            print(arr[n-1])
            break    
        n-=1



