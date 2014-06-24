def max_of_three(number1,number2,number3):
	largest=number1
	if number2>largest:
		largest=number2
	if number3>largest:
		largest=number3
	print "Largest of three number is : %d",largest
	return largest
max_of_three(1,522,7)	