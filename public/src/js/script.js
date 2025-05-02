document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'btn-comprar'
    const buyButtons = document.querySelectorAll('.btn-comprar');

    // Adiciona um evento de clique para cada botão
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Redireciona para a página do produto
            // Certifique-se de que o caminho está correto em relação ao index.html
            window.location.href = './src/pages/produto.html'; 
        });
    });
});