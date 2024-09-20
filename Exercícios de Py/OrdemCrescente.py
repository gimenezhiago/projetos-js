numero = list(range(10))

for i in range(0,10):
    numero[i] = eval(input("Digite um total de 10 números:"))

for i in range(0,10):
    for j in range(0,i):
        if (numero[i] > numero[j]):
            aux = numero[i]
            numero[i] = numero[j]
            numero[j] = aux

print("Os números em ordem crescente são:")
for n in range(0,10):
    print('- {}'.format(numero[n]))