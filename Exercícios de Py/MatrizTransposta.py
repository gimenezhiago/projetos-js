original = [[0, 0, 0],
            [0, 0, 0]]

transposta = [[0, 0],
              [0, 0],
              [0, 0]]

for i in range(0,2):
    for j in range(0,3):
        original[i][j] = eval(input("Digite um número: "))

for i in range(0,2):
    for j in range(0,3):
        transposta[j][i] = original[i][j]

print('A matriz orginal é: ')
print(original[0])
print(original[1])
print('A matriz original transposta é: ')
print(transposta[0])
print(transposta[1])
print(transposta[2])