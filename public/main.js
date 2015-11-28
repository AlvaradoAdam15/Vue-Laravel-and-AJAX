/**
 * Created by adam on 28/11/15.
 */
Vue.component('tasks', {
    template: '#tasks-template',

    props: ['list']

    created(){
    this.list = JSON.parse(this.list);
    }
});

new Vue({
    el: body
});