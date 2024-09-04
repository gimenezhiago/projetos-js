lado1 = eval(input("O tamanho de um lado do triângulo: "))
lado2 = eval(input("O tamanho do outro lado do triângulo: "))
lado3 = eval(input("O último lado: "))
def verificador(valor1, valor2, valor3):
    if (valor1 + valor2) >= valor3 and (valor2 + valor3) >= valor1 and (valor3 + valor1) >= valor2:
        return 1
    return 0

if verificador(lado1, lado2, lado3) == 1:
    print("É um triângulo!!!")
else:
    print("Não é um triângulo!!!")