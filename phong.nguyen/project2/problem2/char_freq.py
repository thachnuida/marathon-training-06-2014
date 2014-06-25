def char_freq(mylist):
	character={}
	for i in mylist:
		if character.has_key(i)==False:
			character[i]=mylist.count(i,0,len(mylist))
	print character		
char_freq("aabbdadasdasd")