export default {
     props: ["searchData"],
     data() {
          return {
               data: this.searchData,
          };
     },
     methods: {
          
     },
     mounted() {
          
     },
     template: `
          <div class="film__list--search" v-if="!this.data">
               <div class="film__item--search" v-for="item in this.data">
                    <img :src="item.image"
                         :alt="item.title" >
                    <h4>{{item.title}}</h4>
                    <p>{{item.year}}</p>
               </div>
          </div>
          <div class="message" v-else> 
               <div class="message__error">Không tìm thấy kết quả phù hợp</div>
          </div>
     `,
};
