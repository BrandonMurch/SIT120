<!-- An button component that applies common styling throughout the application
 -->

<template>
	<button class="button" :type="type" :form="form"><slot /></button>
</template>

<script>
export default {
	name: "Button",
	props: {
		type: String,
		form: String,
	},
};
</script>

<style scoped>
.button {
	height: 2rem;
	padding: 0.5rem;
	padding-bottom: 2rem;
	margin: 0.3rem;
	border-radius: 5px;
	background-color: #3d6b56;
	color: #dce0d1;
	font-family: fell, serif;
	text-transform: lowercase;
	font-size: 1.25rem;
	cursor: pointer;
	transition: 0.5s;
}

.button:hover {
	color: #dce0d1;
	background-color: #bf763c;
	height: 2.1rem;
	transform: scalex(1.1);
	transition: 0.5s;
}
</style>
