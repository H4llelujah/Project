export default Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: `     <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                        <button type="submit" class="search-button">
                            <img src="img/search-pic.svg" alt="search-pic">
                        </button>
                        <input type="text" class="search-field" v-model="userSearch">
                    </form>
                    `
})