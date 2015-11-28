/**
 * Created by adam on 28/11/15.
 */
Vue.component('tasks', {
    template: '#tasks-template',

    data: function(){
        return {
            list: []
        };
    },

    created: function(){
        $.getJSON('api/tasks', function(tasks){
            this.list = tasks;
        }.bind(this ));
    },

    methods: {
        delete: function(task) {
            this.list.$remove(task);
        }
    }
});

new Vue({
    el: body
});