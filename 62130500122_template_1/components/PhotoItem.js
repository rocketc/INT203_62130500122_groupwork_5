app.component('photo-item',{
    props:{
        rabbits: {
            type: Array,
        }
    },
    template:
    /*html*/
    `<ul>
          <div v-for="(rabbit,index) in rabbits">
              <img :src="rabbit.img" width="550" class="rounded-lg h-64" />
            <p class="text-lg font-semibold">{{rabbit.title}}</p>
            <button v-on:click="toggleDone(index)" class=" py-1 px-2 rounded">
              <span v-show="rabbit.done" class="material-icons fill-current text-red-500">
                  favorite
              </span>
              <span v-if="rabbit.done==false" class="material-icons" > favorite </span>
            </button>
          </div>
    </ul>`,
    methods:{
      toggleDone(index){
        this.$emit('toggle-done',index)
      }
    },
})