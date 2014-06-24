def char_freq(str):
	dic = {}
	for index in range(len(str)):
		if dic.has_key(str[index]) == False:
			dic[str[index]] = str.count(str[index])
	print "Dictionary for string : \n",dic
char_freq("abbabcbdbabdbdbabababcbcbab")

