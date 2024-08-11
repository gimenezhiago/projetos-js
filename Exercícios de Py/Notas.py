nome = input('Informe seu nome: ')
nota1 = eval(input('Informe a 1ºNota: '))
nota2 = eval(input('Informe a 2ºNota: '))
nota3 = eval(input('Informe a 3ºNota: '))

media = (nota1 + nota2 + nota3) / 3

if media >= 7.0:
    print('Aprovado!!!, {} com a média {}'.format(nome, media))
elif media <= 6.9 and media >= 5.1:
    print('Recuperação!!!, {} com a média {}'.format(nome, media))
else:
    print('Reprovado!!!, {} com a média {}'.format(nome, media))

