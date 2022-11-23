// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('cart', {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false,
          amount: 0,
          countGoods: 0
      }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartItems.push(item);
                }
                this.$data.amount = data.amount;
                this.$data.countGoods = data.countGoods;
            });
    },
    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                            this.$data.amount += find.price;
                            this.$data.countGoods++;
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                            this.amount += prod.price;
                            this.countGoods++;
                        }
                    })
            }

            // this.$parent.getJson(`${API}/addToBasket.json`)
            //     .then(data => {
            //         if(data.result === 1){
            //             let find = this.cartItems.find(el => el.id_product === item.id_product);
            //             if(find){
            //                 find.quantity++;
            //             } else {
            //                 const prod = Object.assign({quantity: 1}, item);
            //                 this.cartItems.push(prod)
            //             }
            //         }
            //     })
        },
        // remove(item){
        //     this.$parent.getJson(`${API}/deleteFromBasket.json`)
        //         .then(data => {
        //             if (data.result === 1) {
        //                 let find = this.cartItems.find(el => el.id_product === item.id_product);
        //                 if(item.quantity>1){
        //                     this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: -1})
        //                     item.quantity--;
        //                 } else {
        //                     this.$parent.deleteJson(`/api/cart/${find.id_product}`, {quantity: -1});
        //                     this.cartItems.splice(this.cartItems.indexOf(item), 1);
        //                 }
        //             }
        //         })
        // },
        remove(item) {
            this.$parent.delJson(`/api/cart/${item.id_product}`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                            this.amount -= item.price;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                            this.amount -= item.price;
                        };
                        this.countGoods--;
                    }
                })
        },
    },
    template: `<div style="position: relative;">
<button class="cart-link" type="button" @click="showCart = !showCart"><img src="img/menu-3.svg" alt="menu"></button>
        <div class="cart-desk" v-show="showCart">
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item" @remove="remove">
            </cart-item>
            <div v-show="countGoods != 0" class="amount"> Total price: {{ amount }}$ </div>
            <div v-show="countGoods == 0"> Ваша корзина пуста! </div>
        </div>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="cart-item">
                    <div class="product-bio">
                        <img class="cart_img" :src="cartItem.img" alt="Some img">
                        <div class="product-desc">
                            <div class="product-title">{{ cartItem.product_name }}</div>
                            <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                            <div class="product-single-price">$ {{ cartItem.price }} each</div>
                        </div>
                    </div>
                    <div class="right-block">
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
})