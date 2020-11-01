import  Vue  from 'vue';
import Component from 'vue-class-component';

@Component
export default class TagHelper extends Vue {
    addTag() {
        const tag = window.prompt("请输入标签名：");
        if (tag) {
            this.$store.commit("addTag", tag);
        }
    } 
}