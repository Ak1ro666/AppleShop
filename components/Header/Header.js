class Header {
   handlerOpenShoppingPage() {
      shoppingPage.render();
   }
   render(count) {
      const html = `
				<div class="header-container">
               <div class="logo"><a href="#">Apple</a></div>
					<div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">💲 ${count}</div>
				</div>
			
			`;

      const header = document.querySelector('.header');
      header.innerHTML = html;
      let body = document.querySelector('#body');
      let open = document.querySelector('.header-counter');

      open.addEventListener('click', () => {
         body.classList.add('none');
      });
   }
}

const headerPage = new Header();

const productStore = localStorageUtil.getProducts();
headerPage.render(productStore.length);
