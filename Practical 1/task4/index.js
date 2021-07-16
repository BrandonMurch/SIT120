/* 
    Using the Vue.js guide located: 
    https://v3.vuejs.org/guide/introduction.html#what-is-vue-js
*/


// window.onload is used to make sure the DOM loads before VUE.
// This solution is modified from https://stackoverflow.com/questions/29484431/vue-warn-cannot-find-element
window.onload = function() {
    Vue.component('todo-item', {
        props: ['todo'],
        template: `
            <li>
                <input 
                    type="checkbox" 
                    :id="todo.key"  
                    v-model="todo.complete"
                >
                <label for="key">{{ todo.text }}</label>
            </li>`
    })
    

    var app = new Vue({
        el: '#todo-app',
        data() {
            return {
                newToDoText : '',
                groceryList: [
                    {id: "task-0", text: 'Vegetables', complete: true},
                    {id: "task-1", text: 'Cheese', complete: true},
                    {id: "task-2", text: 'Milk', complete: false},
                ], 
            }
        },
        methods: {
            addTask() {
                this.groceryList.push({
                    id: `task-${this.groceryList.length}`,
                    text: this.newToDoText,
                    complete: false,
                })
                this.newToDoText = '';
            }
        }
    });
}


