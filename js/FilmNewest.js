export default {
     props: ["data"],
     data() {
          return {
               filmNewest: this.data,
               current: 0
          };
     },
     methods: {
          previous() {
               let posters = document.querySelectorAll(".poster");
               if (this.current == 0) this.current = 4;
               else this.current -= 1;
               for (let i = 0; i < 5; i++) {
                    if (i == this.current) {
                         posters[i].classList.add("poster__selected");
                    } else {
                         posters[i].classList.remove("poster__selected");
                    }
               }
          },

          next() {
               let posters = document.querySelectorAll(".poster");
               if (this.current == 4) this.current = 0;
               else this.current += 1;
               for (let i = 0; i < 5; i++) {
                    if (i == this.current) {
                         posters[i].classList.add("poster__selected");
                    } else {
                         posters[i].classList.remove("poster__selected");
                    }
               }
          },

          paginate(e) {
               let posters = document.querySelectorAll(".poster");
               this.current = e.target.id - 1;
               for (let i = 0; i < 5; i++) {
                    if (i == this.current) {
                         posters[i].classList.add("poster__selected");
                    } else {
                         posters[i].classList.remove("poster__selected");
                    }
               }
          },
          clickMovie() {
               this.$emit("detailFilm", this.filmNewest[this.current])
          },
     },
     mounted() {
          document.querySelectorAll(".poster")[this.current].classList.add("poster__selected");
     },
     updated() {
          
     },
     template: `
          <div class="film__newest">
               <button @click="previous">&lt;</button>
               <div class="poster" v-for="n in 5" @click="clickMovie" >
                    <img :src="this.filmNewest[n-1].image"
                         :alt="this.filmNewest[n-1].title">
                    <div class="poster__desc">
                         <h5 class="film__newest--name">{{this.filmNewest[n-1].title}}</h5>
                         <h5 class="film__newest--name">Rate: {{this.filmNewest[n-1].imDbRating}}</h5>
                         <h5 class="film__newest--name">Length: {{this.filmNewest[n-1].runtimeStr}}</h5>
                         <ul class="pagination">
                              <li class="page-item" v-for="i in 5">
                                   <a class="page-link page__selected" :id='i' v-if="i == n" @click="paginate"></a>
                                   <a class="page-link" :id='i' v-else @click="paginate"></a>
                                   
                              </li>
                         </ul>
                    </div>

               </div>
               <button @click="next">&gt;</button>
          </div>
     `,
};
