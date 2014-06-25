def third_verb(verb):
	addes = ["o", "ch", "s", "sh", "x", "z"]
	if (verb.endswith("y")):
		temp = list(verb)
		temp[len(verb) - 1] = "ies"
		verb = "".join(temp)
	else:
		check = False
		for char in addes:
			if verb.endswith(char):
				verb += "es"
				check = True
				break
		if check == False : verb += "s"
	return verb

print "Verb end by y: ", third_verb("Carry")
print "Verb add es: ", third_verb("Crash")
print "Verb add s: ", third_verb("Speak")