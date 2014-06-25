def check_brackes(str):
	test=0
	if len(str)%2==0:
		for x in str:
			if x=='[':
				test+=1
			elif x==']':
				test-=1
				if test<0:
					return 'Not ok'				
		return 'OK'	
	else: 
		return 'NOT OK'
print check_brackes("]]]][[[[")
print check_brackes("[[][[]]]]]")
print check_brackes("[[]]")
print check_brackes("[][][[]]")
print check_brackes("[[][[")