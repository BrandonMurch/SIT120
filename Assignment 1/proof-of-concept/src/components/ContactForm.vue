<template>
    <div class="contact-container">
        <form class="form" v-on:submit.stop.prevent="onSubmit">
            <h1 class="contact-title">Send us a message!</h1>
            <input class="input-box"  placeholder="Name:" type="test" v-model="userName">
            <input class="input-box"  placeholder="Email:" type="email" v-model="userEmail">
            <textarea class="input-box" placeholder="Enter a message..." type="text" v-model="userMessage"></textarea>
            <input class="button" type="submit">
            <input class="button" type="reset">
        </form>
    </div>
</template>

<script>
export default {
    name: "ContactForm",
    data() {
        return {
            userName: "",
            userEmail: "",
            userMessage: "",
        }
    },
    methods: {
        onSubmit() {
            alert(`Thank you ${this.userName}! We will get in touch shortly.`)
        }
    }
}
</script>

<style scoped>

    .contact-title {
        width: 100%;
        text-align: center;
        display: block;
        text-transform: lowercase;
    }
 .contact-container {
     width: 100%;
     display: flex;
     justify-content: center;
     position: relative;
     z-index: 5;
 }

 .form{
     width: 50%;
     max-width: 800px;
     min-width: 400px;
 }

 .input-box {
     width: 100%;
     border-radius: 10px; 
     border: 4px solid #3D6B56;
     margin: 0.5rem;
     font-family: fell, serif;
     font-size: 1rem;
 }

 .input-box:focus {
     outline: none;
     border: 4px solid #BF763C;
 }

 .button {
     width: 30%;
     display: block;
     float: right;
     border: 4px solid #3D6B56;
     border-radius: 5px;
     background-color: #D8DAD4;
     color: 3F463D;
     font-family: fell, serif;
     font-size: 1rem;
     margin-left: 1rem;
     text-transform: lowercase;
     cursor: pointer;
 }

 .button:hover {
    color: #D8DAD4;
    background-color: #3D6B56;
 }
</style>