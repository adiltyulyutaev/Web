if __name__ == '__main__':
    n = int(input())
    student_marks = []
    student_names = []
    student_marks.append([])
    student_names.append([])
    c = 0

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
        print(student_names[i])
            
    