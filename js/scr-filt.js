document.addEventListener('DOMContentLoaded', function () {
    // Productos de ejemplo
    const products = [
        { productName: "Articulo 1", desc: "Descripción del articulo 1", img: "img/benef3.jpg", category: 'categoria1', enlace: "art.html" },
        { productName: "Articulo 2", desc: "Descripción del articulo 2 de alguna categoria principal", img: "img/benef3.jpg", category: 'categoria2', enlace: "art.html" },
        { productName: "Articulo 3", desc: "Descripción del articulo 3 de alguna categoria principal resumiendo informacion relevante", img: "img/benef3.jpg", category: 'categoria3', enlace: "art.html" },
        { productName: "Articulo 4", desc: "Descripción 4", img: "img/benef3.jpg", category: 'categoria3', enlace: "art.html" },
        { productName: "Articulo 5", desc: "Descripción 5", img: "img/benef3.jpg", category: 'categoria5', enlace: "art.html" },
        { productName: "Articulo 6", desc: "Descripción 6", img: "img/benef3.jpg", category: 'categoria4', enlace: "art.html" },
        { productName: "Articulo 7", desc: "Descripción 7", img: "img/benef3.jpg", category: 'categoria6', enlace: "art.html" },
        { productName: "Articulo 8", desc: "Descripción 8", img: "img/benef3.jpg", category: 'categoria4', enlace: "art.html" },
        { productName: "Articulo 9", desc: "Descripción 9", img: "img/benef3.jpg", category: 'categoria3', enlace: "art.html" },
        { productName: "Articulo 10", desc: "Descripción 10", img: "img/benef3.jpg", category: 'categoria2', enlace: "art.html" },
        { productName: "Articulo 11", desc: "Descripción 11", img: "img/benef3.jpg", category: 'categoria1', enlace: "art.html" },
        { productName: "Articulo 12", desc: "Descripción 12", img: "img/benef3.jpg", category: 'categoria5', enlace: "art.html" }
    ];

    const productsPerPage = 6; // Número de productos por página
    let currentPage = 1; // Página actual
    let filteredProducts = products; // Productos filtrados

    // Función para mostrar la paginación
    const displayPagination = (totalProducts) => {
        const paginationContainer = document.getElementById('paginationContainer');
        paginationContainer.innerHTML = '';

        const totalPages = Math.ceil(totalProducts / productsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = 'pagination-button';
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                updateDisplay();
            });
            paginationContainer.appendChild(pageButton);
        }
    };

    // Función para actualizar la visualización de productos y paginación
    const updateDisplay = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        displayProducts(productsToShow);
        displayPagination(filteredProducts.length);
    };

    // Función para mostrar los productos
    const displayProducts = (productsToShow) => {
        const shopContent = document.getElementById("shopContent");
        shopContent.innerHTML = "";

        productsToShow.forEach(product => {
            const div = document.createElement("div");
            div.className = 'card-products';
            div.innerHTML = `
                <a href="${product.enlace}"><img src="${product.img}" alt="algun-alt"></a>
                <span class="category-label">${product.category}</span>
                <h3 class="title-art">${product.productName}</h3>
                <p class="desc">${product.desc}</p>
                <a href="${product.enlace}"><button>Ver más...</button></a>
            `;
            shopContent.appendChild(div);
        });
    };

    // Función para filtrar productos
    const filterProducts = (category) => {
        // Remueve la clase activa de todos los botones
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active-filter');
        });

        // Añade la clase activa al botón seleccionado
        let activeBtn;
        switch (category) {
            case 'categoria1':
                activeBtn = document.querySelector('.c1-btn');
                break;
            case 'categoria2':
                activeBtn = document.querySelector('.c2-btn');
                break;
            case 'categoria3':
                activeBtn = document.querySelector('.c3-btn');
                break;
            case 'categoria4':
                activeBtn = document.querySelector('.c4-btn');
                break;
            case 'categoria5':
                activeBtn = document.querySelector('.c5-btn');
                break;
            case 'categoria6':
                activeBtn = document.querySelector('.c6-btn');
                break;
            default:
                activeBtn = document.querySelector('.todos-btn');
                break;
        }

        if (activeBtn) {
            activeBtn.classList.add('active-filter');
        }

        // Aplica el filtro
        if (category === 'todos') {
            filteredProducts = products;
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }

        currentPage = 1; // Reiniciar a la primera página cuando se aplica un filtro
        updateDisplay();
    };

    // Asignar los eventos de clic a los botones
    document.getElementById('c1Btn').addEventListener('click', () => filterProducts('categoria1'));
    document.getElementById('c2Btn').addEventListener('click', () => filterProducts('categoria2'));
    document.getElementById('c3Btn').addEventListener('click', () => filterProducts('categoria3'));
    document.getElementById('c4Btn').addEventListener('click', () => filterProducts('categoria4'));
    document.getElementById('c5Btn').addEventListener('click', () => filterProducts('categoria5'));
    document.getElementById('c6Btn').addEventListener('click', () => filterProducts('categoria6'));
    document.getElementById('todosBtn').addEventListener('click', () => filterProducts('todos'));

    // Actualiza la visualización inicial
    updateDisplay();
});
