function deschideCatalog() {
    window.open("URL_PAGINA", "_blank"); 
}

// Obține elementul coșului
const cartItemsElement = document.querySelector('.cart-items');
const cartTotalElement = document.querySelector('.cart-total');


let cartItems = [];


function addToCart(product) {
    cartItems.push(product); 
    updateCart(); 
}
    

querySelectorAll('.add-to-cart').forEach(button => {
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

function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id); 
    updateCart();
}

querySelector('.clear-cart').addEventListener('click', () => {
    cartItems = []; 
    updateCart(); 
});


function addToCart(product) {
    cartItems.push(product); 
    updateCart(); 
}


function updateCart() {
   innerHTML = '';


    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ${item.price} lei`;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Șterge';
        deleteButton.addEventListener('click', () => {
            removeFromCart(item.id); 
        });
        
        listItem.appendChild(deleteButton); 
        
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });}
    const slideshow = document.querySelector('.slideshow');
let position = 0;

function moveSlideshow() {
    position -= 1; 
    slideshow.style.transform = `translateX(${position}px)`;

    if (position <= -slideshow.clientWidth) {
        position = 0;
    }
}

setInterval(moveSlideshow, 50); 


document.querySelector('.cumparaBtn').addEventListener('click', function() {
    
    var numarTelefonDirector = "123456789"; 
    
    alert('Numărul dpentru comanda este: ' +37360487504);
});
