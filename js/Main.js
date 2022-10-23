import FilmNewest from "./FilmNewest.js";
import ListFilmScroll from "./ListFilmScroll.js";

export default {
     props: [
          "filmNewest",
          "popular",
          "popularTitle",
          "topRating",
          "topRatingTitle",
     ],
     data() {
          return {
               filmNewest: this.filmNewest,
               mostPopular: this.popular,
               popularTitle: this.popularTitle,
               topRating: this.topRating,
               topRatingTitle: this.topRatingTitle,
          };
     },
     components: {
          FilmNewest,
          ListFilmScroll,
     },
     methods: {
          DetailFilm(film) {
               this.$emit("detailFilm", film);
          },
     },
     template: `
          <div id="main">
               <div class="row">
                    <div class="col-12">
                         <FilmNewest :data="this.filmNewest" @detailFilm="DetailFilm($event)"/>
                    </div>
               </div>

               <div class="row">
                    <div class="col-12">
                         <ListFilmScroll :data="this.mostPopular" :name="this.popularTitle" @detailFilm="DetailFilm($event)" />
                    </div>
               </div>

               <div class="row">
                    <div class="col-12">
                         <ListFilmScroll :data="this.topRating" :name="topRatingTitle" @detailFilm="DetailFilm($event)"/>
                    </div>
               </div>
          </div>
     `,
};
