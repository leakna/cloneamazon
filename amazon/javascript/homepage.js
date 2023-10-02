import {products} from '../data/products.js';
import { cart } from './cart.js';
let concat=''
products.forEach(product=> {
  concat+=` <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="../images/ratings/rating-${product.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        87
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary onClicked" data-product-id='${product.id}'>
      Add to Cart
    </button>
  </div>`
  document.querySelector('.product-js').innerHTML=concat
  
});
document.querySelectorAll('.onClicked').forEach(button=>{
  button.addEventListener('click',()=>{
    let matchingItem=''
    cart.forEach(cartItem=>{

      if(cartItem.id===button.dataset.productId){
        matchingItem=cartItem
      }
    
    })
    
    if(matchingItem){
      matchingItem.quantity+=1
    }else{
      cart.push({
        id:button.dataset.productId,
        quantity:1
       })
    }
    console.log(cart)
    let itemCount=0
    cart.forEach(item=>{
      itemCount+=item.quantity
    })
    document.querySelector('.cart-count-demo').innerHTML=itemCount
  })
}

)
