
def find_longest_word(wordlist):
	longest = 0
	for lenword in wordlist:
		if longest < len(lenword): longest=len(lenword)
	print longest
def solution(function, wordlist):
	return function(wordlist)

list_of_words = ["this", "is", "a", "beautiful", "day"]
solution(find_longest_word, list_of_words)
