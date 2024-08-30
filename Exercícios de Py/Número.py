number = 0
de0a25 = 0
de26a50 = 0
de51a75 = 0
de76a100 = 0

while number >= 0:
    number = eval(input("Digite qualquer número de 0 a 100 (se for negativo saíra do programa): "))
    
    if number >= 0:
        if number <= 25:
            de0a25 += 1
        else:
            if number <= 50:
                de26a50 += 1
            else:
                if number <= 75:
                    de51a75 += 1
                else:
                    if number <= 100:
                        de76a100 +=1

print("De 0 a 25 tem {} números".format(de0a25))
print("De 26 a 50 tem {} números".format(de26a50))
print("De 51 a 75 tem {} números".format(de51a75))
print("De 76 a 100 tem {} números".format(de76a100))