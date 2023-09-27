class Shopping {
   constructor() {
      this.shopping = document.querySelector('.shopping');
   }

   handleClear() {
      this.shopping.innerHTML = '';
   }

   render() {
      const productsStore = localStorageUtil.getProducts();
      let htmlCatalog = ``;
      let sumCatalog = 0;
      CATALOG.forEach(({ id, name, price, img }) => {
         if (productsStore.indexOf(id) !== -1) {
            htmlCatalog += `
					<tr>
						<td class="shopping-element__name">🔥 ${name}</td>
						<td class="shopping-element__price">${price.toLocaleString()}  RUB</td>
					</tr>
				`;

            sumCatalog += price;
         }
      });

      const html = `
			<div class="shopping-container">
				<div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
				<table class="shopping-table">
					${htmlCatalog}
					<tr>
						<td class="shopping-element__name">☄️ Сумма</td>
						<td class="shopping-element__price">${sumCatalog.toLocaleString()}  RUB</td>
					</tr>
				</table>
			</div>
		`;

      this.shopping.innerHTML = html;
      let body = document.querySelector('#body');
      let close = document.querySelector('.shopping__close');

      close.addEventListener('click', () => {
         body.classList.remove('none');
      });
   }
}

const shoppingPage = new Shopping();
