# 🌿 Leaf Palette
Leaf Palette é uma comunidade e projeto colaborativo focado em fornecer dicas valiosas e boas práticas de design UI para designers juniores. Nosso objetivo é ser um diário de bolso para designers, oferecendo orientações sobre como criar interfaces de usuário modernas e eficientes. 

# 🎨 Sobre o Projeto
Leaf Palette é uma plataforma onde exploramos os componentes de design web modernos, abordando:

* Melhores cores e combinações
* Animações e interações
* Tamanhos ideais para diferentes dispositivos
* Práticas recomendadas para UI/UX

Nossa missão é ser um ponto de consulta constante para novos designers, ajudando-os a desenvolver suas habilidades e a criar designs de alta qualidade.

## Fork do Repositório

Para começar a codificar, você deve fazer um fork deste repositório:

1. Clique no botão **Fork** no canto superior direito da página.
2. Isso criará uma cópia do repositório em sua própria conta do GitHub.

## Instalar localmente

Depois de fazer o fork do repositório, clone a sua cópia para o ambiente local usando o comando:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

## Instalando as dependências
Depois do clone, instalamos as dependências para garantir que o projeto tenha todas as bibliotecas e pacotes necessários para rodar corretamente.

```bash
bun install ou bun i
```
## Executando o projeto
Depois de instalar as dependêcias, podemos executar o projeto localmente.
```bash
bun run dev
```

## Trabalhando com: Branch, Stage, Commit, Push e Pull Request
Para criar e trocar para uma nova branch, use o seguinte comando:

```bash
git checkout -b nome-da-branch
```

> **[!IMPORTANT]**
> 
> Antes de fazer qualquer alteração, certifique-se de que você trocou a **branch**. Isso é igualmente importante antes de subir as alterações ao repositório.

Depois de fazer alterações no projeto, é hora de adicioná-las ao stage. Você pode fazer isso de duas maneiras: adicionando **todas as alterações de uma vez** ou **apenas os arquivos modificados individualmente**.

```bash
git add .
ou
git add nome-do-arquivo
```
Agora com o comando **git commit** podemos incluir todas as mudanças que foram adicionadas ao índice.
```bash
git commit -m "meu commit"
```
Depois de criar um commit, o próximo passo é enviar as alterações para o repositório remoto com o comando:
```bash
git push origin nome-da-branch
```

Feito! Agora vá para a página do repositório no GitHub e clique no botão **Compare & pull request**. Descreva suas alterações e envie o pull request para revisão.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


## 🤖 Leafy Bot

Para aumentar o engajamento da nossa comunidade, criamos o Leafy Bot, um bot do Discord dedicado a ajudar e interagir com nossos membros. Confira o Leafy Bot e contribua para o seu desenvolvimento em nosso [repositório no GitHub](https://github.com/Leaf-Pallete/leafy-bot).