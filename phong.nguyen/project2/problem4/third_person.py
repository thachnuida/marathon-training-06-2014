def third_person(str):
	last=str[len(str)-1:]
	if last=='o' or last=='s'or last=='x'or last=='z':
		str2=str+'es'
	elif last=='h':
		last2=str[len(str)-2:len(str)-1]
		if last2=='c' or last2=='s':
			str2=str+'es'
	elif last=='y':
		str2=str[:len(str)-1]+'ies'
	print str2
third_person("ruooy")