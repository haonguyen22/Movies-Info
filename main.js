import Header from "./js/Header.js";
import Nav from "./js/Nav.js";
import Footer from "./js/Footer.js";
import Main from "./js/Main.js";
import Search from "./js/Search.js";
import FilmDetail from "./js/FilmDetail.js";
import DirectorDetail from "./js/DirectorDetail.js";

import mostPopular from "./db/MostPopular.json" assert { type: "json" };
import topRating from "./db/250movies.json" assert { type: "json" };
import filmNewest from "./db/InTheaters.json" assert { type: "json" };

export default {
     data() {
          return {
               filmNewest: filmNewest.items,
               mostPopular: mostPopular.items,
               topRating: topRating.items,
               popularTitle: "Most popular",
               topRatingTitle: "Top Rating",
               currComponent: "Main",
               search: [],
               director: [],
               film: [],
          };
     },
     components: {
          Header,
          Nav,
          Footer,
          Main,
          Search,
          FilmDetail,
          DirectorDetail,
     },
     methods: {
          getTop250() {
               try {
                    var requestOptions = {
                         method: "GET",
                         redirect: "follow",
                    };
                    fetch(
                         `https://imdb-api.com/en/API/Top250Movies/k_spa3r6n5`,
                         requestOptions
                    )
                         .then((response) => response.json())
                         .then((result) => {
                              var topRating = result.items;
                              return topRating;
                         })
                         .catch((error) => console.log("error", error));
               } catch (e) {
                    console.log(e);
               }
          },
          getMostPopular() {
               try {
                    var requestOptions = {
                         method: "GET",
                         redirect: "follow",
                    };
                    fetch(
                         `https://imdb-api.com/en/API/MostPopularMovies/k_spa3r6n5`,
                         requestOptions
                    )
                         .then((response) => response.json())
                         .then((result) => {
                              var mostPopular = result.items;
                              return mostPopular;
                         })
                         .catch((error) => console.log("error", error));
               } catch (e) {
                    console.log(e);
               }
          },
          getInThreaters() {
               try {
                    var requestOptions = {
                         method: "GET",
                         redirect: "follow",
                    };
                    fetch(
                         `https://imdb-api.com/en/API/InTheaters/k_spa3r6n5`,
                         requestOptions
                    )
                         .then((response) => response.json())
                         .then((result) => {
                              var filmNewest = result.items;
                              return filmNewest;
                         })
                         .catch((error) => console.log("error", error));
               } catch (e) {
                    console.log(e);
               }
          },
          searchTitle(val) {
               try {
                    var requestOptions = {
                         method: "GET",
                         redirect: "follow",
                    };
                    fetch(
                         `https://imdb-api.com/en/API/SearchMovie/k_spa3r6n5/${val}`,
                         requestOptions
                    )
                         .then((response) => response.json())
                         .then((result) => {
                              this.search = result.results;
                              this.currComponent = "Search";
                         })
                         .catch((error) => console.log("error", error));
               } catch (e) {
                    console.log(e);
               }
          },
          homePage() {
               this.currComponent = "Main";
          },
          DetailMovie(filmId) {
               try {
                    var requestOptions = {
                         method: "GET",
                         redirect: "follow",
                    };

                    fetch(
                         `https://imdb-api.com/en/API/Title/k_spa3r6n5/${filmId}/Posters,Images,Ratings,`,
                         requestOptions
                    )
                         .then((response) => response.json())
                         .then((result) => {
                              this.film = result;
                              this.currComponent = "FilmDetail";
                         })
                         .catch((error) => console.log("error", error));
               } catch (e) {
                    console.log(e);
               }
          },
          clickDirector(id) {
               try {
                    var requestOptions = {
                         method: "GET",
                         redirect: "follow",
                    };
                    fetch(
                         `https://imdb-api.com/en/API/Name/k_spa3r6n5/${id}`,
                         requestOptions
                    )
                         .then((response) => response.json())
                         .then((result) => {
                              this.director = result;
                              this.currComponent = "DirectorDetail";
                         })
                         .catch((error) => console.log("error", error));
               } catch (e) {
                    console.log(e);
               }
          },
     },
     mounted() {},
     updated() {},
     template: `
          <div class="row">
                    <div class="col-12">
                         <Header />
                    </div>
               </div>
               <div class="row">
                    <div class="col-12">
                         <Nav @searchType="searchTitle($event)" @homePage="homePage"/>
                    </div>
               </div>
               <div class="row">
                    <div class="col-12">
                         <component :is="this.currComponent"  :searchData="this.search" :filmNewest="this.filmNewest" :popular="this.mostPopular" :popularTitle="this.popularTitle" :topRating="this.topRating" 
                              :topRatingTitle="this.topRatingTitle" :film="this.film" :director="this.director" 
                              @detailFilm="DetailMovie($event)" @detailDirec="DetailDirec($event)"
                              @director="clickDirector($event)" />
                    </div>
               </div>
               <div class="row">
                    <div class="col-12">
                         <Footer />
                    </div>
               </div>
     `,
};
