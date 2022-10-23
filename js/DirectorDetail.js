import ListFilmScroll from "./ListFilmScroll.js";

export default {
     props: ["director"],
     data() {
          return {
               director: this.director,
               castMovies: [],
               title: "",
               lengthh: 0,
          };
     },
     components: {
          ListFilmScroll,
     },
     methods: {
          DetailFilm(i) {
               this.$emit("detailFilm", this.castMovies[i - 1].id);
          },
     },
     mounted() {
          this.castMovies = this.director.knownFor;
          this.title = "Movies Participated";
          this.lengthh = this.castMovies.length;
     },
     template: `
          <div class="detail__item" v-if="this.director != []">
               <img :src="this.director.image" :alt="this.director.title">
               <div class="detail">
                    <div class="detail__header">
                         <h2>{{this.director.name}}</h2>
                         <p>{{this.director.role}}</p>
                    </div>
                    <div class="detail_desc">
                         <p><b>Birthdate:</b> {{this.director.birthDate}}</p>
                         <p><b>Awards:</b> {{this.director.awards}}</p>
                         <p><b>Summary:</b> {{this.director.summary}}</p>
                    </div>
                    <div class="film_participated">
                         <h3>Movies Participated</h3>
                         <div class="film__img">
                              <img :src="this.castMovies[i-1].image" :alt="this.castMovies[i-1].title" v-for="i in this.lengthh" @click="DetailFilm(i)">
                         </div>
                    </div>
               </div>
          </div>
          <div class="message" v-else> 
               <div class="message__error">Không tìm thấy</div>
          </div>
     `,
};
