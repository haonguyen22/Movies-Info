import Header from "./js/Header.js";
import Nav from './js/Nav.js'
import ListFilmScroll from "./js/ListFilmScroll.js";
import FilmNewest from './js/FilmNewest.js'
import Footer from "./js/Footer.js";

import mostPopular from "./db/MostPopular.json" assert { type: "json" };
import topRating from "./db/250movies.json" assert { type: "json" };


export default {
     data() {
          return {
               mostPopular: mostPopular.items,
               topRating: topRating.items,
               popularTitle: "Most popular",
               topRatingTitle: "Top Rating"
          };
     },
     components: {
          Header,
          Nav,
          ListFilmScroll,
          FilmNewest,
          Footer
     },
     template: `
          <div class="row">
                    <div class="col-12">
                         <Header />
                    </div>
               </div>
               <div class="row">
                    <div class="col-12">
                         <Nav />
                    </div>
               </div>
               <div class="row">
                    <div class="col-12">
                         <div id="main">
                              <div class="row">
                                   <div class="col-12">
                                        <FilmNewest />
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
                    </div>
               </div>
               <div class="row">
                    <div class="col-12">
                         <Footer />
                    </div>
               </div>
     `,
};
