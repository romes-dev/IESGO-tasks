def verificar_temperatura(temperatura):
    if temperatura > 25:
        return "O dia está quente"
    else:
        return "O dia não está tão quente"

temperatura_atual = 28
situacao_clima = verificar_temperatura(temperatura_atual)

frase_final = f"A temperatura é {temperatura_atual}°C. {situacao_clima}."

print(frase_final)
