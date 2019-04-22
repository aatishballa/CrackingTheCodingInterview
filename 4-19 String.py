from collections import Counter
#2 string permutations


def main():
    print(checkPermutation("asdasdaa","asdaaaaa"))
    
def countChar(word, char):
    count = 0
    cur_char = 0
    for i in range(len(word)):
        if i in word
        
    

def checkPermutation (varA, varB):

    if (len(varA)!= len(varB)):
        return False

    for i in range(len(varA)):
        cur_char = varA[i]
        countA = countChar(varA, cur_char)
        countB = countChar(varB, cur_char)

        if (countA!=countB):
            return False
            break

    return True
        
    
    
