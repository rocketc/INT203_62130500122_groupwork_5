const App = {
        
    data() {
        return {
            rabbits:[{title:"Netherland Dwaf",img:"images/nd.jpg", done:false},
                    {title:"Holland Lop",img:"images/hollandlop.jpg", done:false},
                    {title:"Lionhead",img:"images/lionhead1.jpg", done:false}],
            copyGallery: [],
            searchButton: false,
            search: "",
            expandImage: false,
            // indexGallery: 0
        };

    },
    methods:{
        appearSerch(){
            this.appearSerch = !searchButton;
        },
        toggleDone(index){
            this.rabbits[index].done = !this.rabbits[index].done
        },
        returnIndex(index){
        this.indexGallery=index;
        }
    },
    computed: {
        countDone(){
            return this.rabbits.filter( t => t.done ).length
        },
        filterList(){
            this.copyGallery = this.rabbits.filter((rabbit) => {
                return rabbit.title.toLowerCase().includes(this.search.toLowerCase());
            });
            return this.copyGallery;
        }
        
    }
    

}
const app = Vue.createApp(App)