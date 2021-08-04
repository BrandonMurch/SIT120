<template>
	<nav class="navigation-bar">
		<MainLogo />

		<!-- MOBILE NAV -->
		<div class="icon-container" @click="menuOpen = !menuOpen">
			<img
				class="menu-icon"
				:class="{ menuIconOpen: !menuOpen }"
				src="@/assets/images/MenuIcon.svg"
			/>
			<!-- Close Icon -->
			<!-- https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web -->
			<svg
				class="menu-icon"
				:class="{ menuIconOpen: menuOpen }"
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
			>
				<path
					d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
				/>
			</svg>
		</div>
		<DropDown class="drop-down" :isOpen="menuOpen">
			<template v-slot:inside>
				<a
					v-for="link in links"
					:key="link.text"
					class="navigation-link drop-link"
					:class="{ activeLink: isActive(link.text) }"
					:href="link.url"
					@click="click(link.text)"
					>{{ link.text }}
				</a>
				<a
					class="navigation-link drop-link"
					@click="searchOpen = !searchOpen"
					href="#"
					>search</a
				>
				<SearchBar :isOpen="searchOpen" @close="searchOpen = false" />
			</template>
		</DropDown>

		<!-- DESKTOP NAV -->
		<div class="large-navigation">
			<a
				class="navigation-link"
				@click="searchOpen = !searchOpen"
				href="#"
				>search</a
			>
			<a
				class="navigation-link"
				v-for="link in links"
				:key="link.text"
				:href="link.url"
				@click="click(link.text)"
				:class="{ activeLink: isActive(link.text) }"
				>{{ link.text }}</a
			>
			<SearchBar
				style="{position: relative; top: -1.5rem;}"
				:isOpen="searchOpen"
				@close="searchOpen = false"
			/>
		</div>
	</nav>
</template>

<script>
import DropDown from "./DropDown.vue";
import SearchBar from "./SearchBar.vue";
import MainLogo from "./MainLogo.vue";

export default {
	name: "NavigationBar",
	components: { DropDown, SearchBar, MainLogo },
	props: { activeComponent: String },
	data() {
		return {
			menuOpen: false,
			searchOpen: false,
			links: [
				{ text: "contact", url: "#" },
				{ text: "learn", url: "#" },
				{ text: "explore", url: "#" },
				{ text: "my plants", url: "#" },
			],
		};
	},
	methods: {
		isActive(linkName) {
			// Change once Vue-Router is implemented to verify using location.
			return linkName == this.activeComponent ? true : false;
		},
		click(target) {
			// Used for mocking only the contact and explore pages momentarily
			this.$emit(
				"update:activeComponent",
				target == "contact" ? "contact" : "explore"
			);
		},
	},
};
</script>

<style scoped>
.navigation-bar {
	position: relative;
	min-height: 2rem;
}

.logo-image {
	height: 5rem;
}

.logo-text {
	display: inline;
	color: #bf763c;
	font-size: 4rem;
	position: relative;
	top: -1rem;
	cursor: default;
}

.navigation-link {
	float: right;
	color: #bf763c;
	text-decoration: none;
	margin: 2rem 1rem;
	font-size: 1.5rem;
}

.activeLink {
	text-decoration: underline;
}

.drop-link {
	width: 100%;
	text-align: center;
	border-bottom: 2px solid grey;
	margin: 0;
	padding: 1rem 0;
}

.navigation-link:hover {
	font-weight: bold;
}

.menu-icon {
	height: 4rem;
	width: 4rem;
	position: absolute;
	right: 2rem;
	top: 1rem;
	opacity: 0;
	transition: opacity 0.5s;
	cursor: pointer;
	fill: #bf763c;
}

.menuIconOpen {
	opacity: 1;
	transition: opacity 0.5s;
	transition-delay: 0.5s;
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
