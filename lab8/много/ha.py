def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False




def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile:
    return True
  if not a_smile and not b_smile:
    return True
  return False



def sum_double(a, b):
  sum = a+b
  if(a==b) :
    sum = sum + sum
  return sum




def diff21(n):
  if n <= 21:
    return 21 - n
  else:
    return (n - 21) * 2




def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))





def makes10(a, b):
   return (a == 10 or b == 10 or a+b == 10)




def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))



def not_string(str):
    if len(str) >= 3 and str[0:3] == "not":
        return str
    return "not " + str




def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:]  
  return front + back




def front_back(str):    
    if len(str) <= 1:
        return str
    a = str[1:len(str)-1]   
    return str[len(str)-1] + a + str[0]



def front3(str):
  a = 3
  if len(str) < a:
    a = len(str)
  b = str[:a]
  return b + b + b 
  



