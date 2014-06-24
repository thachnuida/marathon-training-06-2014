def max_of_three(num1, num2, num3):
	return max(num1, num2, num3)

num1 = float(raw_input("Enter your first number: "));
num2 = float(raw_input("Enter your second number: "));
num3 = float(raw_input("Enter your third number: "));

max_num = max_of_three(num1,num2,num3)
print "Max number is ",max_num