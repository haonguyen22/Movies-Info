export default {
     props: ["data", "name"],
     data() {
          return {
               numOfElement: 27,// Get 27 elements
               database: this.data, 
               current: 0,
               numOfPage: 1,
               title: this.name
          };
     },
     methods: {
          previous() {
               if (this.current == 0) this.current = this.numOfPage - 1;
               else this.current -= 1;
          },

          next() {
               if (this.current == this.numOfPage - 1) this.current = 0;
               else this.current += 1;
          },

          paginate(e) {
               this.current = e.target.id - 1;
          },
     },
     mounted() {
          document.querySelector(".page-link").classList.add("page__selected");
          this.database = this.data.slice(0, this.numOfElement);
          if (this.numOfElement % 3 == 0) {
               this.numOfPage = parseInt(this.numOfElement / 3);
          } else this.numOfPage = parseInt(this.numOfElement / 3) + 1;
     },
     template: `
          <div class="film__component">
               <div class="film__header">
                    <div class="film__title">{{this.title}}</div>
                    <ul class="pagination">
                         <li class="page-item" v-for="i in this.numOfPage">
                              <a class="page-link page__selected" :id="i" v-if="i == this.current + 1" @click="paginate"></a>
                              <a class="page-link" :id="i" v-else @click="paginate"></a>
                         </li>
                    </ul>
               </div>
               <div class="film__scroll">
                    <button @click="previous">&lt;</button>
                    <div class="film__list">
                         <div class="film__item" v-for="n in 3" >
                              <img v-if="((this.current)*3 + n - 1) < this.numOfElement" :src="this.database[(this.current)*3 + n - 1].image"
                                   :alt="this.database[this.current*3 + n - 1].title" >
                              <div class="film__name" v-if="((this.current)*3 + n - 1) < this.numOfElement">
                                   <h4>{{this.database[this.current*3 + n - 1].title}}</h4>
                              </div>
                         </div>
                    </div>
                    <button @click="next">&gt;</button>
               </div>
          </div>
     `,
};
