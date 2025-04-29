document.addEventListener('DOMContentLoaded', () => {
    const cartTableBody = document.querySelector('.carrinho-table tbody');
    const cartTotalElement = document.querySelector('.carrinho-total p'); // Elemento para mostrar o total
    const cartContainer = document.querySelector('.carrinho-container'); // Container geral
    const emptyCartMessage = document.createElement('p'); // Mensagem de carrinho vazio
    emptyCartMessage.textContent = 'Seu carrinho está vazio.';
    emptyCartMessage.style.textAlign = 'center';
    emptyCartMessage.style.marginTop = '20px';

    function renderCart() {
        // 1. Obter carrinho do localStorage
        let cart = localStorage.getItem('shoppingCart');
        cart = cart ? JSON.parse(cart) : [];

        // Limpa o corpo da tabela atual
        if(cartTableBody) {
            cartTableBody.innerHTML = ''; 
        } else {
            console.error("Elemento tbody da tabela do carrinho não encontrado.");
            return; // Sai se não encontrar a tabela
        }

        let overallTotal = 0;

        // 2. Verificar se o carrinho está vazio
        if (cart.length === 0) {
            // Mostra mensagem de carrinho vazio e esconde tabela/total
            if (cartContainer && !cartContainer.contains(emptyCartMessage)) {
                 cartContainer.querySelector('.carrinho-table').style.display = 'none';
                 cartContainer.querySelector('.carrinho-total').style.display = 'none';
                 cartContainer.appendChild(emptyCartMessage);
            }
        } else {
             // Esconde mensagem de carrinho vazio (se existir) e mostra tabela/total
             if (cartContainer) {
                cartContainer.querySelector('.carrinho-table').style.display = ''; // Mostra tabela
                cartContainer.querySelector('.carrinho-total').style.display = ''; // Mostra total
                const existingEmptyMessage = cartContainer.querySelector('p');
                if (existingEmptyMessage && existingEmptyMessage.textContent === emptyCartMessage.textContent) {
                    cartContainer.removeChild(existingEmptyMessage);
                }
             }

            // 3. Preencher a tabela com os itens do carrinho
            cart.forEach((item, index) => { // Adiciona index para o botão de remover
                const itemTotal = item.price * item.quantity;
                overallTotal += itemTotal;

                const row = document.createElement('tr');

                // Adiciona data-label para responsividade (opcional, mas bom ter)
                row.innerHTML = `
                    <td data-label="Produto">
                        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto; margin-right: 10px; vertical-align: middle;"> 
                        ${item.name}
                    </td>
                    <td data-label="Quantidade">
                        <input type="number" value="${item.quantity}" min="1" class="item-quantity" data-index="${index}" style="width: 60px; text-align: center;">
                    </td>
                    <td data-label="Preço Unitário">R$ ${item.price.toFixed(2).replace('.', ',')}</td>
                    <td data-label="Total" class="item-total">R$ ${itemTotal.toFixed(2).replace('.', ',')}</td>
                    <td data-label="Remover">
                        <button class="remove-item-btn" data-index="${index}" style="background: none; border: none; color: red; cursor: pointer; font-size: 1.2em;">&times;</button> 
                    </td>
                `; // Adiciona botão de remover

                cartTableBody.appendChild(row);
            });

            // 4. Atualizar o total geral
            if (cartTotalElement) {
                cartTotalElement.textContent = `Total: R$ ${overallTotal.toFixed(2).replace('.', ',')}`;
            }

            // 5. Adicionar listeners para botões de remover e inputs de quantidade
            addCartActionListeners();
        }
    }

    function updateCartItem(index, newQuantity) {
        let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
        if (newQuantity < 1) {
            newQuantity = 1; // Quantidade mínima é 1
        }
        if (cart[index]) {
            cart[index].quantity = newQuantity;
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
            renderCart(); // Re-renderiza o carrinho para atualizar totais
        }
    }

    function removeCartItem(index) {
        let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
        cart.splice(index, 1); // Remove o item do array pelo índice
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        renderCart(); // Re-renderiza o carrinho
    }

    function addCartActionListeners() {
        // Listeners para inputs de quantidade
        document.querySelectorAll('.item-quantity').forEach(input => {
            input.addEventListener('change', (event) => {
                const index = parseInt(event.target.dataset.index);
                const newQuantity = parseInt(event.target.value);
                updateCartItem(index, newQuantity);
            });
             // Evita que Enter no input submeta formulário (se houver)
             input.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault(); 
                    input.blur(); // Tira o foco do input
                }
            });
        });

        // Listeners para botões de remover
        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.dataset.index);
                if (confirm('Tem certeza que deseja remover este item do carrinho?')) { // Confirmação
                     removeCartItem(index);
                }
            });
        });
    }

    // Renderiza o carrinho quando a página carregar
    renderCart(); 

});