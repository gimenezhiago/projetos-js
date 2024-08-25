temperatura = 0
soma= 0
quantidade = 0

while temperatura != 999:
    temperatura = eval(input("Digite uma temperatura ou digite 999 para sair: "))

    if temperatura != 999:
        soma += temperatura
        quantidade += 1
    else: 
        print("Processando valores")

media = soma / quantidade
print("A media das temperaturas são {}".format(media))