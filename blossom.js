function deschideCatalog() {
    window.open("URL_PAGINA", "_blank"); // Înlocuiește "URL_PAGINA" cu adresa URL a paginii pe care dorești să o deschizi
}

// Obține elementul coșului
const cartItemsElement = document.querySelector('.cart-items');
const cartTotalElement = document.querySelector('.cart-total');

// Inițializează variabila pentru stocarea produselor din coș
let cartItems = [];

// Funcție pentru adăugarea unui produs în coș
function addToCart(product) {
    cartItems.push(product); // Adaugă produsul în array-ul cartItems
    updateCart(); // Actualizează afișajul coșului
}

// Funcție pentru actualizarea afișajului coșului
function updateCart() {
    // Golește conținutul anterior al coșului
    cartItemsElement.innerHTML = '';

    // Calculează totalul prețurilor produselor din coș
    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ${item.price} lei`;
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });

    // Actualizează afișajul totalului
    cartTotalElement.innerText = total;
}

// Adaugă eveniment de click pentru fiecare buton "Adaugă în coș"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const product = {
            id: productElement.dataset.id,
            name: productElement.dataset.name,
            price: parseFloat(productElement.dataset.price)
        };
        addToCart(product);
    });
});
// Funcție pentru ștergerea unui produs din coș
function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id); // Elimină produsul cu ID-ul specificat din array-ul cartItems
    updateCart(); // Actualizează afișajul coșului
}

// Adaugă eveniment de click pentru butonul "Golește coșul"
document.querySelector('.clear-cart').addEventListener('click', () => {
    cartItems = []; // Golește array-ul cartItems
    updateCart(); // Actualizează afișajul coșului
});

// Funcție pentru adăugarea unui produs în coș
function addToCart(product) {
    cartItems.push(product); // Adaugă produsul în array-ul cartItems
    updateCart(); // Actualizează afișajul coșului
}

// Funcție pentru actualizarea afișajului coșului
function updateCart() {
    // Golește conținutul anterior al coșului
    cartItemsElement.innerHTML = '';

    // Calculează totalul prețurilor produselor din coș
    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ${item.price} lei`;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Șterge';
        deleteButton.addEventListener('click', () => {
            removeFromCart(item.id); // La clic pe butonul "Șterge", elimină produsul corespunzător din coș
        });
        
        listItem.appendChild(deleteButton); // Adaugă butonul de ștergere la fiecare element din coș
        
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });}
    const slideshow = document.querySelector('.slideshow');
let position = 0;

function moveSlideshow() {
    position -= 1; // Modificare pentru o deplasare mai rapidă
    slideshow.style.transform = `translateX(${position}px)`;

    if (position <= -slideshow.clientWidth) {
        position = 0;
    }
}

setInterval(moveSlideshow, 50); // Modificare pentru o mișcare mai rapidă
