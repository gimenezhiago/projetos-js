lado1 = eval(input("O tamanho de um lado do triângulo: "))
lado2 = eval(input("O tamanho do outro lado do triângulo: "))
lado3 = eval(input("O último lado: "))
def verificador(valor1, valor2, valor3):
    if (valor1 + valor2) >= valor3 and (valor2 + valor3) >= valor1 and (valor3 + valor1) >= valor2:
        return 1
    return 0

def defineTipo(valor1, valor2, valor3):
    if verificador(valor1, valor2, valor3) == 1:
        if valor1 == valor2 and valor2 == valor3:
            print("Triângulo Equilátero!!!")
        elif valor1 != valor2 and valor2 != valor3 and valor1 != valor3:
            print("Triângulo Escaleno!!!")
        else:
            print("Triângulo Isosceles!!!")
    else:
        print("Não é um triângulo")

defineTipo(lado1, lado2, lado3)