export default {
     props: ["director"],
     data() {
          return {
               director: this.director,
          };
     },
     methods: {
          
     },
     mounted() {

     },
     template: `
          <div class="detail__item" v-if="this.director != []">
               <img :src="this.director.image" :alt="this.director.image">
               <div class="detail">
                    <div class="detail__header">
                         <h2>{{this.director.name}}</h2>
                         <p>{{this.director.role}}</p>
                    </div>
                    <div class="detail_desc">
                         <p><b>Birthdate:</b> {{this.director.birthDate}}</p>
                         <p><b>Awards:</b> {{this.director.awards}}</p>
                         <p><b>Join movies:</b>{{this.director.castMovies.length}}</p>
                         <p><b>Summary:</b> {{this.director.summary}}</p>
                    </div>
               </div>
          </div>
          <div class="message" v-else> 
               <div class="message__error">Không tìm thấy</div>
          </div>
     `,
};
