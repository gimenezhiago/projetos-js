capital = eval(input("Digite o capital: "))
taxaMensal = eval(input("Digite os juros(%): "))
meses = int(input("Digite os meses: "))

for i in range(0, meses) :
    capital += capital * (taxaMensal/100)
    print('O valor a pagar nesse mês é {}'.format(capital))