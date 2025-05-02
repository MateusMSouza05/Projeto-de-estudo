# Adega Mateus - Projeto de E-commerce Simples

## Descrição

Este é um projeto de estudo que simula uma loja virtual (e-commerce) simples para venda de vinhos. Ele demonstra a criação de uma interface de usuário para visualização de produtos, detalhes de produtos e um carrinho de compras funcional, utilizando tecnologias front-end básicas como HTML, CSS e JavaScript puro. O estado do carrinho é gerenciado através do `localStorage` do navegador.

## Funcionalidades

*   **Visualização de Produtos:** Exibição dos vinhos disponíveis na página inicial (`index.html`).
*   **Detalhes do Produto:** Página dedicada (`produto.html`) que exibe informações detalhadas de um vinho específico selecionado.
*   **Adicionar ao Carrinho:** Funcionalidade para adicionar produtos ao carrinho a partir da página de detalhes.
*   **Carrinho de Compras:** Página (`carrinhoDeCompra.html`) que exibe os itens adicionados, permitindo:
    *   Visualizar os produtos, quantidades e preços.
    *   Alterar a quantidade de cada item.
    *   Remover itens individualmente.
    *   Visualizar o valor total da compra.
*   **Persistência do Carrinho:** O conteúdo do carrinho é salvo no `localStorage`, permitindo que os itens permaneçam mesmo após fechar e reabrir o navegador (na mesma máquina e navegador).
*   **Carrossel de Banners:** Utilização do componente Carrossel do Bootstrap na página inicial.

## Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica das páginas.
*   **CSS3:** Estilização e layout (incluindo Flexbox para organização dos elementos).
*   **JavaScript (ES6+):**
    *   Manipulação dinâmica do DOM (Document Object Model) para exibir detalhes de produtos e itens do carrinho.
    *   Gerenciamento de eventos (cliques em botões, alterações em inputs).
    *   Uso do `localStorage` para persistência de dados do carrinho entre páginas.
    *   Lógica de adição, atualização e remoção de itens do carrinho.
*   **Bootstrap 5:** Utilizado para o componente Carrossel na página inicial e potencialmente para outros estilos/componentes auxiliares.

## Como Executar o Projeto

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git 
    ```
    *(Substitua `seu-usuario/nome-do-repositorio.git` pelo URL real do seu repositório)*
2.  Navegue até a pasta do projeto clonado.
3.  Abra o arquivo `public/index.html` diretamente no seu navegador de preferência (ex: Google Chrome, Firefox, Edge).

Não há necessidade de instalação de dependências ou de um servidor web complexo, pois o projeto utiliza apenas tecnologias front-end e `localStorage`.

## Estrutura do Projeto

```
Projeto de estudo/
├── public/
│   └── index.html             # Página inicial
├── src/
│   ├── assets/
│   │   └── imgs/              # Imagens (logo, banners, vinhos)
│   ├── css/
│   │   ├── style.css          # Estilos gerais e da página inicial
│   │   ├── produto.css        # Estilos da página de detalhes do produto
│   │   └── carrinhoDeCompra.css # Estilos da página do carrinho
│   ├── js/
│   │   ├── script.js          # Script da página inicial (index.html)
│   │   ├── baseProdutos.js    # Simulação de banco de dados de produtos
│   │   ├── detalhesProduto.js # Script da página de detalhes (produto.html)
│   │   └── carrinho.js        # Script da página do carrinho (carrinhoDeCompra.html)
│   └── pages/
│       ├── produto.html         # Template da página de detalhes do produto
│       └── carrinhoDeCompra.html # Página do carrinho de compras
└── README.md                    # Este arquivo
```

