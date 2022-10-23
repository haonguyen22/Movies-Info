export default {
     props: ["film"],
     data() {
          return {
               filmDetail: this.film,
          };
     },
     methods: {
          directorId(){
               this.$emit("director", this.filmDetail.directorList[0].id)
          }
     },

     template: `
          <div class="detail__item" v-if="this.filmDetail != []">
               <img :src="this.film.image" :alt="this.film.title">
               <div class="detail">
                    <div class="detail__header">
                         <h2>{{this.film.title}}</h2>
                         <p>{{this.film.fullTitle}}</p>
                    </div>
                    <div class="detail_desc">
                         <p><b>Year:</b> {{this.film.year}}</p>
                         <p><b>Genres:</b> {{this.film.genres}}</p>
                         <p><b>Directors:</b> <span style="" @click="directorId">{{this.film.directors}}</span></p>
                         <p><b>Length:</b> {{this.film.runtimeStr}}</p>
                         <p><b>Rating:</b> {{this.film.imDbRating}}</p>
                         <p><b>Plot:</b> {{this.film.plot}}</p>
                    </div>
               </div>
          </div>
          <div class="message" v-else> 
               <div class="message__error">Không tìm thấy </div>
          </div>
     `,
};
