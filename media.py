nckz = [38, 39, 41, 47, 49, 47, 56, 47, 44, 47]
msvsz = [62, 55, 48, 58, 59, 59, 56, 54, 59, 59]
soma = 0
qtd = 0
maior = 0


for i in nckz:
    soma += i
    qtd += 1

    if i > maior:
        maior = i

ptn_nckz = maior
media_nckz = soma / qtd
print(f"""
nckz06_
Maior Pontuação: {ptn_nckz}
Média: {media_nckz}
""")

maior = 0
soma = 0
qtd = 0

for j in msvsz:
    soma += j
    qtd += 1

    if j > maior:
        maior = j

ptn_msvsz = maior
media_msvsz = soma / qtd
print(f"""
MateusVSZ
Maior Pontuação: {ptn_msvsz}
Média: {media_msvsz}
""")