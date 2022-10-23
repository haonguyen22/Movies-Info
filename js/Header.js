export default {
     data() {
          return {
               checked: false,
          };
     },
     methods: {},
     updated() {
          if (this.checked == false) {
               document.documentElement.setAttribute("data-theme", "light");
          } else document.documentElement.setAttribute("data-theme", "dark");
     },
     template: `
          <div id="header">
               <div class="header__id">
                    20120470
               </div>
               <div class="header__name">
                    <h1>Movies info</h1>
               </div>
               <div class="header__right">
                    <p>k_spa3r6n5</p>
                    <div class="dark_mode">
                         <label class="switch">
                              <input type="checkbox" v-model="checked">
                              <span class="slider round"></span>
                         </label>
                         <p>Dark Mode</p>
                    </div>
               </div>
          </div>
     `,
};
