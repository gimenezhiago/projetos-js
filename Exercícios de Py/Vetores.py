vetor = list(range(10))

for i in vetor:
    vetor[i] = int(input("Digite um número: "))

for i in range(0,10):
    if i % 2 != 0:
        print("Os números qie estão em posições ímpares são: ")
        print(vetor[i])