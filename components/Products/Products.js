class Products {
   constructor() {
      this.classNameActive = 'products-element__btn_active';
      this.labelAdd = 'Добавить в корзину';
      this.labelRemove = 'Удалить из корзины';
   }

   handelSetLocationStorage = (element, id) => {
      const { pushProducts, products } = localStorageUtil.putProducts(id);

      if (pushProducts) {
         element.classList.add(this.classNameActive);
         element.innerHTML = this.labelRemove;
      } else {
			element.classList.remove(this.classNameActive);
         element.innerHTML = this.labelAdd;
		}

      headerPage.render(products.length);
   };

   render() {
      // ROOT

      
      let products = document.querySelector('.products');
      

      const productsStore = localStorageUtil.getProducts();
      let htmlCatalog = ``;
      CATALOG.forEach(({ id, name, price, img }) => {
         let activeClass = '';
         let activeText = '';

         if (productsStore.indexOf(id) === -1) {
            activeText = this.labelAdd;
         } else {
            activeClass = ' ' + this.classNameActive;
            activeText = this.labelRemove;
         }

         htmlCatalog += `
					<li class="products-element">
						<span class="products-element__name">${name}</span>
						<img class="products-element__img" src=${img} />
						<span class="products-element__price">🔥 
						${price.toLocaleString()} RUB
						</span>
						<button onclick="productsPage.handelSetLocationStorage(this, '${id}')" class="products-element__btn${activeClass}">${activeText}</button>
					</li>
			`;
      });

      let htmlMenu = `
		<ul class="products-container">
			${htmlCatalog}
		</ul>
		`;

      products.innerHTML = htmlMenu;
   }
}

const productsPage = new Products();
productsPage.render();
