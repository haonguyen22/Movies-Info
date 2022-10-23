import Header from "./js/Header.js";
import Nav from './js/Nav.js';
import Footer from "./js/Footer.js";
import Main from "./js/Main.js";
import Search from "./js/Search.js";

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
               search: []
          };
     },
     components: {
          Header,
          Nav,
          Footer,
          Main,
          Search
     },
     methods: {
          searchTitle(val){
               this.search = this.topRating;
               this.currComponent = "Search"
          },
          homePage(){
               this.currComponent = "Main" 
          }
     },
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
                         <component :is="this.currComponent" :searchData="this.search" :filmNewest="this.filmNewest" :popular="this.mostPopular" :popularTitle="this.popularTitle" :topRating="this.topRating" :topRatingTitle="topRatingTitle"/>
                    </div>
               </div>
               <div class="row">
                    <div class="col-12">
                         <Footer />
                    </div>
               </div>
     `,
};


