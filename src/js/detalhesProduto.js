document.addEventListener('DOMContentLoaded', () => {
    // 1. Obter o ID do produto da URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id'); // Pega o valor do parâmetro 'id'

    // Elementos do HTML que serão preenchidos
    const productNameEl = document.getElementById('product-name');
    const productImageEl = document.getElementById('product-image');
    const productPriceEl = document.getElementById('product-price');
    const productAttributesEl = document.getElementById('product-attributes');
    const productDescriptionEl = document.getElementById('product-description'); // Se tiver descrição
    const productDetailsArea = document.getElementById('product-details-area');
    const productNotFoundArea = document.getElementById('product-not-found');
    const addToCartButton = document.getElementById('add-to-cart-button');

    let currentProduct = null; // Variável para guardar os dados do produto atual

    // 2. Encontrar o produto no array 'products' (definido em productsData.js)
    // Certifique-se que productsData.js foi carregado ANTES deste script
    if (typeof products !== 'undefined' && Array.isArray(products)) {
         currentProduct = products.find(p => p.id === productId);
    } else {
        console.error("Erro: Array 'products' não encontrado. Verifique se productsData.js foi carregado.");
        productDetailsArea.style.display = 'none';
        productNotFoundArea.style.display = 'block';
        return; // Sai da função se não encontrar os dados
    }


    // 3. Preencher a página com os dados do produto (se encontrado)
    if (currentProduct) {
        document.title = currentProduct.name; // Atualiza o título da página
        productNameEl.textContent = currentProduct.name;
        productImageEl.src = currentProduct.image;
        productImageEl.alt = currentProduct.name; // Boa prática para acessibilidade
        productPriceEl.textContent = `R$ ${currentProduct.price.toFixed(2).replace('.', ',')}`;

        // Limpa atributos antigos e adiciona os novos
        productAttributesEl.innerHTML = ''; // Limpa
        currentProduct.attributes.forEach(attr => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="icon-attribute"></span> ${attr}`; // Adiciona ícone e texto
            productAttributesEl.appendChild(li);
        });

        // Adiciona descrição (se existir no objeto do produto)
        if (currentProduct.description && productDescriptionEl) {
            productDescriptionEl.textContent = currentProduct.description;
        }

        // Guarda os dados no container principal para o botão usar (opcional, mas útil)
        productDetailsArea.dataset.productId = currentProduct.id;
        productDetailsArea.dataset.productName = currentProduct.name;
        productDetailsArea.dataset.productPrice = currentProduct.price;
        productDetailsArea.dataset.productImage = currentProduct.image; // Guarda a imagem também

    } else {
        // Se não encontrou o produto pelo ID
        console.error(`Produto com ID "${productId}" não encontrado.`);
        productDetailsArea.style.display = 'none'; // Esconde a área de detalhes
        productNotFoundArea.style.display = 'block'; // Mostra a mensagem de não encontrado
    }

    // 4. Lógica para adicionar ao carrinho (usando os dados do currentProduct)
    if (addToCartButton && currentProduct) { // Só adiciona listener se o produto foi carregado
        addToCartButton.addEventListener('click', () => {
            const itemToAdd = {
                id: currentProduct.id,
                name: currentProduct.name,
                price: currentProduct.price,
                image: currentProduct.image, // Adiciona a imagem ao carrinho
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
            const existingItemIndex = cart.findIndex(item => item.id === itemToAdd.id);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push(itemToAdd);
            }

            localStorage.setItem('shoppingCart', JSON.stringify(cart));
            alert(`${itemToAdd.name} adicionado ao carrinho!`);
        });
    } else if (!currentProduct) {
        // Desabilita o botão se o produto não foi encontrado
        if(addToCartButton) addToCartButton.disabled = true;
    }

});