
// window.onload is used to make sure the DOM loads before VUE.
// This solution is modified from https://stackoverflow.com/questions/29484431/vue-warn-cannot-find-element
window.onload = function() {
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })

    var app = new Vue({
        el: '#todo-app',
        data: {
            groceryList: [
                {id: 0, text: 'Vegetables', complete: true},
                {id: 1, text: 'Cheese', complete: true},
                {id: 2, text: 'Milk', complete: false},
            ], 
        }
    });
}


