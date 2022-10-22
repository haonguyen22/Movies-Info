import InThreaters from "./../db/InTheaters.json" assert { type: "json" };

export default {
     data() {
          return {
               InThreaters: InThreaters.items,
               current: 0,
          };
     },
     methods: {
          previous() {
               let posters = document.querySelectorAll(".poster");
               let pagination = document.querySelectorAll(".page-link");
               if (this.current == 0) return;
               else {
                    this.current -= 1;
                    for (let i = 0; i < 5; i++) {
                         if (i == this.current) {
                              posters[i].classList.add("poster__selected");
                              pagination[i].classList.add("page__selected");
                         } else {
                              posters[i].classList.remove("poster__selected");
                              pagination[i].classList.remove("page__selected");
                         }
                    }
               }
          },

          next() {
               let posters = document.querySelectorAll(".poster");
               let pagination = document.querySelectorAll(".page-link");
               if (this.current == 4) return;
               else {
                    this.current += 1;
                    for (let i = 0; i < 5; i++) {
                         if (i == this.current) {
                              posters[i].classList.add("poster__selected");
                              pagination[i].classList.add("page__selected");
                         } else {
                              posters[i].classList.remove("poster__selected");
                              pagination[i].classList.remove("page__selected");
                         }
                    }
               }
          },

          paginate(e) {
               let pagination = document.querySelectorAll(".page-link");
               let posters = document.querySelectorAll(".poster");
               this.current = e.target.id - 1;
               for (let i = 0; i < 5; i++) {
                    if (i == this.current) {
                         pagination[i].classList.add("page__selected");
                         posters[i].classList.add("poster__selected");
                    } else {
                         pagination[i].classList.remove("page__selected");
                         posters[i].classList.remove("poster__selected");
                    }
               }
          }
     },
     mounted() {
          document
               .querySelectorAll(".poster")
               [this.current].classList.add("poster__selected");
     },
     template: `
          <div class="film__newest">
               <button @click="previous">&lt;</button>
               <div class="poster" v-for="n in 5">
                    <img :src="this.InThreaters[n-1].image"
                         :alt="this.InThreaters[n-1].title">
                    <div class="poster__desc">
                         <h5 class="film__newest--name">{{this.InThreaters[n-1].title}}</h5>
                         <h5 class="film__newest--name">Rate: {{this.InThreaters[n-1].imDbRating}}</h5>
                         <h5 class="film__newest--name">Length: {{this.InThreaters[n-1].runtimeStr}}</h5>
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
