Vue.component('categories-comp',{
    template:`
        <div>
            <section class="promo">
                <div class="wrapper promo-wrap">
                    <h1 class="promo-title">
                        THE BRAND <br> 
                        <span class="promo-title-small">OF LUXERIOUS <span class="promo-title-pink">FASHION</span></span>
                    </h1>
                </div>
            </section>
            <div class="categories">
                <div class="hidden"><h2>Категории товаров</h2></div>
                <div class="wrapper categories-wrap">
                    <div class="categories-item categories-item-women">
                        <p class="categories-sale">30% OFF</p>
                        <p class="categories-name">FOR WOMEN</p>
                    </div>
                    <div class="categories-item categories-item-men">
                        <p class="categories-sale">HOT DEAL</p>
                        <p class="categories-name">FOR MEN</p>
                    </div>
                    <div class="categories-item categories-item-kids">
                     <p class="categories-sale">NEW ARRIVALS</p>
                        <p class="categories-name">FOR KIDS</p>
                    </div>
                    <div class="categories-item categories-item-acc">
                        <p class="categories-sale">LUXIROUS & TRENDY</p>
                        <p class="categories-name">ACCESORIES</p>
                    </div>
                </div>
            </div>
        </div>
    `
})