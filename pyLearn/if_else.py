from operator import truediv


is_male = False
is_tall = True

if is_male and is_tall:
    print("you are a tall male")
elif is_male and not is_tall:
    print("you are a short male")
elif not is_male and is_tall:
    print("you are not a male but you are tall ")
else:
    print("you are not tall and not a male")