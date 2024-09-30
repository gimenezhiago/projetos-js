list = [[0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]]

for i in range(0,3):
    for j in range(0,4):
        list[i][j] = float(input("Digite um número: "))

print('O número no canto superior esquerdo é: {}'.format(list[0][0]))
print('O número no canto inferior direito é: {}'.format(list[2][3]))
