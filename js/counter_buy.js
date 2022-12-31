
/*  Переменные для изменения блоков в корзине при добавлении товара  */

const noBuyCard = document.querySelector('.no-buy-card');
const dNoneCard = document.querySelector('.d-none-card');
const allPriceCardBuy = document.querySelectorAll('.all-price-card-buy');


/*  Open card and close card  */


const openBuyCard = document.querySelector('.open_buy_card');
const closeBuyCard = document.querySelector('.close_buy_card');
const bodyBuyCard = document.querySelector('.bg-buy-card');
const bodyBuyCard2 = document.querySelector('.buy-card-none');

openBuyCard.addEventListener('click' , function (event) {
	bodyBuyCard.style.display = 'block';
})

closeBuyCard.addEventListener('click' , function (event) {
	bodyBuyCard.style.display = 'none';
})



/*  Переменные для удаления товаров в корзине и возвращение кнопки в корзину в изначальное состояние  */




const deleteItem = document.querySelector('#deleteItem');
const cartWrapper = document.querySelector('.cart-wrapper');
const textBuy = document.querySelectorAll('.offer-none');


window.addEventListener ('click' , function (event) {
	if (event.target.hasAttribute('data-cart')) {
		noBuyCard.style.display = 'none';
		dNoneCard.style.visibility = 'visible';

		const cart = event.target.closest('.card');

		const productInfo = {
			id: cart.dataset.id,
			imgScr: cart.querySelector('.card-img-top').getAttribute('src'),
			title: cart.querySelector('.card-title').innerText,
			titleLeader: cart.querySelector('.title-leader-js').innerText,
			leader: cart.querySelector('.subtitle-leader-js').innerText,
			titlePrice: cart.querySelector('.title-price-js').innerText,
			price: cart.querySelector('.subtitle-price-js').innerText,
			titleNumber: cart.querySelector('.title-number-js').innerText,
			conter: cart.querySelector("#data-number").value,
			

		}




	



		
		const cartItemHTML = `<div class="container">
			    		<div class="cart-wrapper cart-item mt-3">
					<div class="row pt-3 cart-item pt-2">
						<div class="col-md card-buy align-items-center justify-content-center text-center">
							<img src="${productInfo.imgScr}" class="card-img-buy img-fluid" alt="card-group-image">
						</div>
						<div class="col-md d-flex align-items-center justify-content-center text-center">
							<div class="name-card-buy" style="display: none;">${productInfo.title}</div>
							<input type="text" style="display: none;">${productInfo.title}</input>
						</div>
						<div class="col-md d-flex align-items-center justify-content-center">
							<div class="leader-card-buy text-center">
								<div class="title-leader-card-buy mb-2" style="display: none;">${productInfo.titleLeader}</div>
								<input type="text" style="display: none;">${productInfo.titleLeader}</>
								<div class="subtitle-leader-card-buy ms-2" style="display: none;">${productInfo.leader}</div>
								<input type="text" style="display: none;">${productInfo.leader}</>
							</div>
						</div>
						<div class="col-md d-flex align-items-center justify-content-center">
							<div class="price-card-buy text-center mb-2">
								<div class="title-price-card-buy" style="display: none;">${productInfo.titlePrice}</div>
								<input type="text" style="display: none;">${productInfo.titlePrice}</>
								<div class="subtitle-price-card-buy ms-2" style="display: none;">${productInfo.price}</div>
								<input type="text" style="display: none;">${productInfo.price}</>
							</div>
						</div>	
						<div class="col-md d-flex align-items-center justify-content-center">
							<div class="price-card-buy text-center mb-2">
								<div class="quantity-card-buy" style="display: none;">${productInfo.titleNumber}</div>
								<input type="text" style="display: none;">${productInfo.titleNumber}</>
								<div class="subtitle-price-card-buy ms-2" style="display: none;">${productInfo.conter}</div>
								<input type="text" style="display: none;">${productInfo.conter}</>
							</div>
						</div>
						<div class="col-md align-items-center justify-content-center" id="deleteItem">
							<div data-delete class="delete text-center text-white py-3" id="">Удалить из корзины</div>
						</div>				
					</div>
				</div>
				</div>`;

		cartWrapper.insertAdjacentHTML('beforeend' , cartItemHTML);




	}



})


window.addEventListener('click' , function(event) {
	if (event.target.hasAttribute('data-delete')) {
		const ccc = event.target.closest('.cart-wrapper');
		ccc.style.display = 'none';
	}
})

const block_add_cart = document.querySelector('.add_cart');
const close_block_add_cart = document.querySelector('.btn-close-added');

window.addEventListener('click' , function(event) {
	if (event.target.hasAttribute('data-cart')) {
		block_add_cart.style.display = 'flex';
	}
})

close_block_add_cart.addEventListener('click' , function (e) {
	block_add_cart.style.display = 'none';
})

const visible_card = document.querySelector('.block-all');
const vis_card_all = document.querySelector('.d-none-card-main');






		




















