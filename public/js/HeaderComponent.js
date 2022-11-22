Vue.component('header-comp',{
    template:`
    <header class="header">
            <div class="wrapper header-wrap">
                <div class="header-col-1">
                    <a href="#" class="logo-link">
                        <img src="img/logo.svg" alt="logo">
                    </a>
                    <button class="search-button">
                        <img src="img/search-pic.svg" alt="search-pic">
                    </button>
                </div>
                <div class="header-col-2">
                    <button class="main-menu-button">
                        <img src="img/menu-1.png" alt="menu">
                    </button>
                    <a href="registration.html" class="registry-link">
                        <img src="img/menu-2.svg" alt="menu">
                    </a>
                    <cart ref="cart"></cart>
                </div>
            </div>
        </header>
    `
})