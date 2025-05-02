document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart-button');
    const productContainer = document.querySelector('.product-page-container'); // Container com data attributes

    if (addToCartButton && productContainer) {
        addToCartButton.addEventListener('click', () => {
            // 1. Obter dados do produto dos atributos data-*
            const productId = productContainer.dataset.productId;
            const productName = productContainer.querySelector('[data-product-name]').dataset.productName;
            const productPrice = parseFloat(productContainer.querySelector('[data-product-price]').dataset.productPrice); // Converte para número
            const productImage = productContainer.dataset.productImage; // Pega a URL da imagem

            if (!productId || !productName || isNaN(productPrice) || !productImage) {
                console.error("Erro: Não foi possível obter todos os dados do produto.");
                alert("Ocorreu um erro ao adicionar o produto ao carrinho.");
                return;
            }

            const productData = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1 // Começa com quantidade 1
            };

            // 2. Obter carrinho atual do localStorage (ou criar um novo)
            let cart = localStorage.getItem('shoppingCart');
            cart = cart ? JSON.parse(cart) : []; // Se existe, converte de string JSON para array, senão, cria array vazio

            // 3. Verificar se o produto já está no carrinho
            const existingProductIndex = cart.findIndex(item => item.id === productData.id);

            if (existingProductIndex > -1) {
                // Se já existe, incrementa a quantidade
                cart[existingProductIndex].quantity += 1;
            } else {
                // Se não existe, adiciona o novo produto
                cart.push(productData);
            }

            // 4. Salvar o carrinho atualizado de volta no localStorage
            localStorage.setItem('shoppingCart', JSON.stringify(cart)); // Converte array para string JSON

            // 5. Feedback ao usuário (opcional)
            alert(`${productName} foi adicionado ao carrinho!`);
            
            // Opcional: Mudar texto do botão ou mostrar uma mensagem na página
            // addToCartButton.textContent = 'Adicionado!';
            // setTimeout(() => { addToCartButton.textContent = 'Adicionar ao carrinho'; }, 2000);

            // Opcional: Redirecionar para o carrinho imediatamente
            // window.location.href = './carrinhoDeCompra.html'; 
        });
    } else {
        console.error("Botão 'Adicionar ao carrinho' ou container do produto não encontrado.");
    }
});