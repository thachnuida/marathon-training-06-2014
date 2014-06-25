
def max_in_list(*mylist):
	return max(mylist)

def reduced(run,mylist):
	return (run(mylist))

print (reduce(max_in_list,[10,12,53,3]))
# def f(x):
#     return x + 3
 
# def twice(function, x):
#     return function(function(x))
 
# print(twice(f, 7))