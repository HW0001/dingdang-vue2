import  Vue  from 'vue';
import Component from 'vue-class-component';

@Component
export default class VueScroll extends Vue { 
    mounted() {
        window.addEventListener("load", function () {
            setTimeout(function () {
                window.scrollTo(0, 200);
            }, 50);
        });
    }
}