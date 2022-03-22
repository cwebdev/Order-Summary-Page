//////////////////
// Code for Modal
//////////////////
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.querySelector(".modalOverlay").style.display = "block";
}
  
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector(".modalOverlay").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

////////////////
// Code for Cart
////////////////

let productPriceInCart = 125.00;
let productQuantityInCart = 0;

// Code for Add to Cart button
let addToCartBtn = document.querySelector('.AddToCartBtnWrapper');
addToCartBtn.onclick = function(e) {
  let quantityValElem = document.querySelector('.QuantityValue');
  let quantityVal = parseInt(quantityValElem.innerHTML);

  if(quantityVal > 0)
  {
    productQuantityInCart += quantityVal;
    // Reset quantity counter
    let quantityValElem = document.querySelector('.QuantityValue');
    quantityValElem.innerHTML = "0";
  }

  if(productQuantityInCart > 0)
  {   
    // Calculate and update new pricing
    let productQuantityInCartElem = document.querySelector('.productQuantityInCart');
    productQuantityInCartElem.innerHTML = productQuantityInCart;
    let productTotal = productQuantityInCart * productPriceInCart;
    
    let productTotalInCart = document.querySelector('.productTotalInCart');
    productTotalInCart.innerHTML = "$" + productTotal.toFixed(2);

    showCartDetails();      
  }
  else
  {
    clearCartDetails();
  }  
}

// Code for clear cart button
let clearCartBtn = document.querySelector('.removeProductWrapper');
clearCartBtn.onclick = function(e) {
  productQuantityInCart = 0;
  clearCartDetails();
  
  // Hide cart popup
  let cartDetailsPopup = document.querySelector(".cartDetailsPopup");
  cartDetailsPopup.style.display = 'none';
}


// Code for cart details popup
let cartImgBtn = document.querySelector(".cartIconWrapper");
cartImgBtn.onclick = function(e) {
    let cartDetailsPopup = document.querySelector(".cartDetailsPopup");
    if(cartDetailsPopup.style.display != 'block')
        cartDetailsPopup.style.display = 'block';
    else
        cartDetailsPopup.style.display = 'none';
}

// Code to close cart details popup
let productRow = document.querySelector(".productRow");
productRow.onclick = function(e) {
  // Hide cart popup
  let cartDetailsPopup = document.querySelector(".cartDetailsPopup");
  cartDetailsPopup.style.display = 'none';
}


// Code for cart quantity number counter buttons
let plusBtn = document.querySelector('.PlusBtn');
plusBtn.onclick = function(e) {
  let quantityValElem = document.querySelector('.QuantityValue');
  let quantityVal = parseInt(quantityValElem.innerHTML);
  // Putting an upper limit of 100
  if(quantityVal < 100)
    quantityVal++;
  quantityValElem.innerHTML = quantityVal;
}

let negBtn = document.querySelector('.NegBtn');
negBtn.onclick = function(e) {
  let quantityValElem = document.querySelector('.QuantityValue');
  let quantityVal = parseInt(quantityValElem.innerHTML);
  if(quantityVal > 0)
    quantityVal--;
  quantityValElem.innerHTML = quantityVal;
}


////////////////////////
// Code for mobile menu
////////////////////////
let burgerIcon = document.querySelector('.burgerIcon');
burgerIcon.onclick = function(e) {
  let mobileMenu = document.querySelector('.mobileMenu');
  mobileMenu.style.display = 'block';
}

let closeMobileMenuBtn = document.querySelector('.closeMobileMenuBtn');
closeMobileMenuBtn.onclick = function(e) {
  let mobileMenu = document.querySelector('.mobileMenu');
  mobileMenu.style.display = 'none';
}



//////////////////////
// Reusable functions
//////////////////////
function showCartDetails()
{
  // Hide empty cart view
  let emptyCartContent = document.querySelector('.emptyCartContent');
  emptyCartContent.style.display = 'none';

  // Set cart quantity icon
  let cartQuantityIcon = document.querySelector('.cartQuantityIcon');
  cartQuantityIcon.innerHTML = productQuantityInCart;
  cartQuantityIcon.style.display = 'block'; 

  // Show cart details
  let cartDetailsContent = document.querySelector('.cartDetailsContent');
  cartDetailsContent.style.display = 'block'; 
}

function clearCartDetails()
{
  // Clear cart icon quantity
  let cartQuantityIcon = document.querySelector('.cartQuantityIcon');
  cartQuantityIcon.style.display = 'none'; 

  // Hide cart details
  let cartDetailsContent = document.querySelector('.cartDetailsContent');
  cartDetailsContent.style.display = 'none';

  // Show empty cart view
  let emptyCartContent = document.querySelector('.emptyCartContent');
  emptyCartContent.style.display = 'flex';
}