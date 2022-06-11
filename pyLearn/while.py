secret_word = "Shiro"

guess = ''
tries = 0
LIMIT = 5
while tries <= LIMIT and guess != secret_word:
    guess = input("Guess the word: ")
    tries+=1
    

if tries >= LIMIT:
    print("You lose")
    

print("You Win")