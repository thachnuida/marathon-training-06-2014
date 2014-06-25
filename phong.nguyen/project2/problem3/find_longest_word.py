def find_longest_word(*mylist):
	lenght=0;
	for i in mylist:
		if len(i) > lenght:
			lenght=len(i)
	return lenght
def high_find_longest_word():
	print find_longest_word("mau xanh","maudo","mauvang")
high_find_longest_word()