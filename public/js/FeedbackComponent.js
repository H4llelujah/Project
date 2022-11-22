Vue.component('feedback-comp',{
    template:`
        <section class="feedback">
            <div class="hidden"><h2>Обратная связь</h2></div>
            <div class="wrapper feedback-wrap">
                <div class="feedback-col-1">
                    <p class="feedback-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span class="italic">a pulvinar purus condimentum“</span></p>
                </div>
                <div class="feedback-col-2">
                    <p class="input-text"><span class="subscribe">SUBSCRIBE </span><br>FOR OUR NEWLETTER AND PROMOTION</p>
                    <form class="form" action="#">
                        <input class="useremail" type="email" placeholder="Enter Your Email">
                        <button class="subbutton" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    `
})