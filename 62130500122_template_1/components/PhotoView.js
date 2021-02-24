app.component('photo-item',{
    props:{
        copyGallery: [],
        expandImage: 0,
    },
    template:
    /*html*/
    `<img
        v-bind:src="copyGallery[indexGallery].img"
        class="h-auto w-auto mr-auto ml-auto"
    />
    <span
        @click="expandImage=false"
        class="bg-yellow-300 mr-0 h-50 w-auto">
            x close
    </span>`,
    methods:{
      toggleDone(index){
        this.$emit('toggle-done',index)
      }
    },
    computed: {
      countDone(){
          return this.rabbits.filter( t => t.done ).length
      }
    }
})