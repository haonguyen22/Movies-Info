export default {
     props: ["searchData"],
     data() {
          return {
               data: this.searchData,
               length: 0,
          };
     },
     methods: {
          clickMovie(index) {
               this.$emit("detailFilm", this.data[index - 1].id);
          },
     },
     mounted() {
          this.length = this.data.length;
     },
     template: `
          <div class="film__list--search" v-if="this.data != []" >
               <div class="film__item--search" v-for="i in this.length" @click="clickMovie(i)">
                    <img :src="this.data[i-1].image"
                         :alt="this.data[i-1].title" >
                    <h4>{{this.data[i-1].title}}</h4>
                    <p>{{this.data[i-1].description}}</p>
               </div>
          </div>
          <div class="message" v-else> 
               <div class="message__error">Không tìm thấy kết quả phù hợp</div>
          </div>
     `,
};
