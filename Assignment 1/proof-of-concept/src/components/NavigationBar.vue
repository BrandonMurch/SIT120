<template>
	<nav class="navigation-bar">
		<MainLogo />

		<!-- Mobile Navigation -->
		<MenuIcon :isOpen="menuOpen" @click="menuOpen = !menuOpen" />
		<DropDown class="drop-down" :isOpen="menuOpen">
			<template v-slot:inside>
				<NavigationLinks
					v-if="menuOpen"
					:links="links"
					:dropDown="true"
					:activeComponent="activeComponent"
					@update:activeComponent="updateActiveComponent"
				/>
			</template>
		</DropDown>

		<!-- Desktop Navigation -->
		<div class="large-navigation">
			<NavigationLinks
				v-if="!menuOpen"
				:dropDown="false"
				:links="links"
				:activeComponent="activeComponent"
				@update:activeComponent="updateActiveComponent"
			/>
		</div>
	</nav>
</template>

<script>
import DropDown from "./DropDown.vue";
import MainLogo from "./MainLogo.vue";
import MenuIcon from "./MenuIcon.vue";
import NavigationLinks from "./NavigationLinks.vue";

export default {
	name: "NavigationBar",
	components: { DropDown, MainLogo, MenuIcon, NavigationLinks },
	props: { activeComponent: String },
	data() {
		return {
			menuOpen: false,
			links: [
				{ text: "contact", url: "#" },
				{ text: "learn", url: "#" },
				{ text: "explore", url: "#" },
				{ text: "my plants", url: "#" },
			],
		};
	},
	methods: {
		updateActiveComponent(target) {
			this.$emit("update:activeComponent", target);
		},
	},
};
</script>

<style scoped>
.navigation-bar {
	position: relative;
	min-height: 2rem;
}

@media (min-width: 800px) {
	.drop-down,
	.icon-container {
		display: none;
	}

	.large-navigation {
		display: inline;
	}
}

@media (max-width: 800px) {
	.large-navigation {
		display: none;
	}
}
</style>
