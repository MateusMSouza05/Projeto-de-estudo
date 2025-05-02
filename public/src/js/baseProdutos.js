// Simula um banco de dados de produtos
const products = [
    {
        id: "P001",
        name: "Paul Cluver Village Pinot Noir 750mL",
        price: 290.90,
        image: "../assets/imgs/vinhos/vinho-tinto-paul-cluver-village-pinot-noir-750ml.jpeg",
        attributes: ["Altair", "Blend", "Chile", "Tinto"],
        description: "Um elegante Pinot Noir com notas complexas..." // Adicione descrições
    },
    {
        id: "P002",
        name: "Vinho Tinto Calvet Bordeaux Superior Metal 750ml",
        price: 120.90,
        image: "../assets/imgs/vinhos/vinho-tinto-calvet-bordeaux-superior-metal-750ml.jpeg",
        attributes: ["Bordeaux", "Merlot/Cabernet", "França", "Tinto"],
        description: "Um clássico Bordeaux com taninos macios..."
    },
    {
        id: "P003",
        name: "Vinho Tinto Casal Garcia Sweet Red 750ml",
        price: 69.90,
        image: "../assets/imgs/vinhos/vinho-tinto-casal-garcia-sweet-red-750ml.jpeg",
        attributes: ["Vinho Verde", "Blend", "Portugal", "Tinto Suave"],
        description: "Levemente adocicado e refrescante..."
    },
    {
        id: "P004",
        name: "Vinho Tinto Petit Veja 8 meses Tempranillo 750ml",
        price: 155.90,
        image: "../assets/imgs/vinhos/vinho-tinto-petit-veja-8-meses-tempranillo-750ml.jpeg",
        attributes: ["Ribera del Duero", "Tempranillo", "Espanha", "Tinto"],
        description: "Encorpado, com passagem por barrica..."
    }
    // Adicione mais produtos aqui
];

// Exporta os dados para serem usados em outros scripts (se usar módulos)
// Se não usar módulos, apenas certifique-se que este script seja carregado antes dos outros que o usam.
// export default products; // Exemplo se usar módulos ES6