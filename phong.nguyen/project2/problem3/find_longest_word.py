def find_longest_word(*mylist):
	lenght=0;
	for i in range(len(mylist)):
		if len(mylist[i]) > lenght:
			lenght=len(mylist[i])
	return lenght
def high_find_longest_word():
	print find_longest_word("mau xanh","maudo","mauvang")
high_find_longest_word()