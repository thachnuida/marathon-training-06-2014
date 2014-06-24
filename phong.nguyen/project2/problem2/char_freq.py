def char_freq(mylist):
	character={}
	for i in range(len(mylist)):
		if character.has_key(mylist[i])==False:
			character[mylist[i]]=mylist.count(mylist[i],0,len(mylist))
	print character		
char_freq("aabbdadasdasd")