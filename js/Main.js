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
     methods: {},
     updated() {},
     template: `
          <div id="main">
               <div class="row">
                    <div class="col-12">
                         <FilmNewest :data="this.filmNewest" />
                    </div>
               </div>

               <div class="row">
                    <div class="col-12">
                         <ListFilmScroll :data="this.mostPopular" :name="this.popularTitle"/>
                    </div>
               </div>

               <div class="row">
                    <div class="col-12">
                         <ListFilmScroll :data="this.topRating" :name="topRatingTitle"/>
                    </div>
               </div>
          </div>
     `,
};
