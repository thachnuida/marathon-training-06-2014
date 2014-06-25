
def find_longest_word(list_of_words):
	len_of_words = []
	for str in list_of_words:
		len_of_words.append(len(str))
	return reduce(max, len_of_words)

print "Length of the longest word is ",find_longest_word(["this", "is", "a", "beautiful", "day"])

