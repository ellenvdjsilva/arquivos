import json
dados = {'nome':'Ellen', 'perfil': 'introvertido', 'aprendizado': [{'aprendizado':'Dados'}, {'aprendizado':'Python'}] , 'habilidades':[{'habilidades':'criatividade'}, {'habilidades':'memorização'}] }

#Criando o arquivo json
with open(r'\dados.json', 'w') as json_file:
  json.dump(dados, json_file, indent=4)

#Criando um arquivo xml
from xml.dom import minidom 
import os 

raiz = minidom.Document()

xml = raiz.createElement('raiz')

filho = raiz.createElement('produto')
filho.setAttribute('nome', 'filho para pai')

xml.appendChild(filho)

xml_str = raiz.toprettyxml(indent ='\t')

save_path_file = "fpp.xml"

with open(save_path_file, 'w') as f:
  f.write(xml_str)