const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}


const productList =[];
productList.push({
    name: 'Sillon de Oficina',
    price: 67500,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_730083-MLA48377913907_112021-F.webp'
});
productList.push({
    name: 'Bandejas Aplilables',
    price: 3680,
    image: 'https://http2.mlstatic.com/D_NQ_NP_896473-MLA45400380401_032021-O.webp'
});
productList.push({
    name: 'Escritorio Gamer',
    price: 45000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_718343-MLA53088357818_122022-O.webp'
});
productList.push({
    name: 'Organizador de cables de mesa',
    price: 1500,
    image: 'https://http2.mlstatic.com/D_NQ_NP_940695-MLA48700112984_122021-O.webp'
});
productList.push({
    name: 'Armario de Oficina',
    price: 1500,
    image: 'https://http2.mlstatic.com/D_NQ_NP_950496-MLA50013269505_052022-O.webp'
});
productList.push({
    name: 'Notebook Lenovo',
    price: 78990,
    image: 'https://http2.mlstatic.com/D_NQ_NP_910727-MLA49923168790_052022-O.webp'
});

/*<!--<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> -->
*/

function renderProducts(arr){

    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);

