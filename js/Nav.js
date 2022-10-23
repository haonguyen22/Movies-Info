export default  {
     data() {
          return {
               searchType: ""
          }
     },
     methods: {
          searchBtn(){
               this.$emit("searchType", this.searchType);
          },
          homePage() {
               this.$emit("homePage")
          }
     },
     template: 
     `
          <div id="nav">
               <div class="nav__home" @click="homePage">Home</div>
               <div class="nav__search">
                    <input type="text" name="search" class="input__search" placeholder="Search" :value="this.searchType" @change="this.searchType = $event.target.value">
                    <button class="btn" @click="searchBtn">Search</button>
               </div>
          </div>
     `
}