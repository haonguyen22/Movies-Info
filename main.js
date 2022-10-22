// "id": "tt0111161",
// "rank": "1",
// "title": "The Shawshank Redemption",
// "fullTitle": "The Shawshank Redemption (1994)",
// "year": "1994",
// "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,12,128,176_AL_.jpg",
// "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
// "imDbRating": "9.2",
// "imDbRatingCount": "2652494"

import Header from "./js/Header.js";
import Nav from './js/Nav.js'
import ListFilmScroll from "./js/ListFilmScroll.js";
import FilmNewest from './js/FilmNewest.js'
import Footer from "./js/Footer.js";

export default {
     data() {
          return {};
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
                                        <ListFilmScroll />
                                   </div>
                              </div>

                              <div class="row">
                                   <div class="col-12">
                                        <ListFilmScroll />
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
