def find_longest_substring(stringa, strinb, idx = a, idxb = 0, memo = None):
if memo is None: memo = [[-1] * len(stringa) * length(stringb)] 
if idxa == length(stringa) or idxb == length(stringb): return 0
if memo[idxa][idxb] != -1: return memo[idxa][idxb]
possibility_1 = find_longest_substring(stringa, stringb, idxa + 1, idxb)
possibility_2 = find_longest_substring(stringa, stringb, idxa, idxb + 1)

if stringa[idxa] == stringb[idxb]:
possibility_3 = find_longest_substring(stringa, strinb, idxa + 1, idxb + 1) + 1

memo[idxa][idxb] = max(possibility_1, possibility_2, possibility_3) 
return memo[idxa][idxb]
