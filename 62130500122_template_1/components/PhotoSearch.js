app.component('photo-search',{
    props:{
        searchButton: false,
        search: "",
    },
    template:
    /*html*/
    `<a @click="searchButton=true" href="#">
        <span class="material-icons ml-20">search</span>
    </a>
    <div v-if="searchButton" class="">
        <input
            v-model ="search"
            @keyup.enter ="filteredList"
            class=" border-4 rounded-lg mb-10 h-12 pr-32 border-green-400 "
            type="text"
            placeholder="Please enter for seaching"
        >
        <button
            @click="searchButton=false"
            class="ml-2 p-1 rounded-lg focus:outline-none bg-blue-500  ">
                Cancel
        </button>
    </div>`,
    methods:{
        appearSerch(){
            this.$emit('appear-search',)
            this.appearSerch = !searchButton;
        }
    },
    computed: {
        filterList(){
            this.copyGallery = this.rabbits.filter((rabbit) => {
                return rabbit.title.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    }
})