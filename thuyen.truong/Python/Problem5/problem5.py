def check_balanced(str):
	if (str.count("[") != str.count("]")) : return False
	num=0
	for index in range(len(str)):
		if str[index] == '[':
			num +=1
		elif str[index] == ']':
			num -=1
			if num<0:
				return False
	return True

import random
n = int(raw_input("Enter number of bracket you want: "))
str = []
while (n > 0):
	str.append("]")
	str.append("[")
	n -=1
random.shuffle(str)
bracket = "".join(str)
if check_balanced(bracket):
	print bracket, " is OK!"
else:
	print bracket, " is not OK"
