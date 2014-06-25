def max_in_list():
	stop = 1
	list_num = []
	while stop == 1:
		list_num.append(raw_input("Enter your number: "))
		stop = int((raw_input("If you want to add number, Press 1!  ")))
	print "Largest Number in ", list_num, "is: "
	return reduce(max, list_num)	

print max_in_list()