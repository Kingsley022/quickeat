const menuItems = document.getElementById('menu');
const menuBtn = document.getElementById('menu-icon');
const cancelBtn = document.getElementById('cancel-icon');

menuBtn.addEventListener('click', ()=>{
    menuItems.style.display = 'flex';
    menuBtn.style.display = 'none';
    cancelBtn.style.display = 'block'
});

cancelBtn.addEventListener('click', ()=>{
    menuItems.style.display = 'none';
    menuBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
});

// Getting Selected item
const orderBtns = document.querySelectorAll('#orderBtn');
const cartItemsContainer = document.getElementById('cartItems');
const cartItems = [];

orderBtns.forEach((orderBtn, index) => {
    orderBtn.addEventListener('click', ()=>{
        const parentEl = orderBtn.parentElement;
        const itemName = parentEl.querySelector('.food-name').innerHTML;
        const itemImage = parentEl.querySelector('img').src;
        const itemPrice = parentEl.querySelector('.price').innerHTML;

        const item = {
            itemName,
            itemImage,
            itemPrice
        }

        // console.log(item);

        cartItems.unshift(item);
        console.log(cartItems);

    })
});

// function populateCart(){
//     cartItems.map((cartItem, index) => {
//         console.log(cartItem);
//         const itemEl = `
//             <div>
//                 <p>${cartItem.itemName}</p>
//                 <img src=${cartItem.itemImage} alt="">
//                 <p>${cartItem.itemPrice}</p>
//             </div>`
    
//             cartItemsContainer.innerHTML = itemEl;
//     })
// }