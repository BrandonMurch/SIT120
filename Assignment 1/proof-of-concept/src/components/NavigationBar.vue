<template>
	<nav class="navigation-bar">
		<MainLogo />

		<!-- Mobile Navigation -->
		<MenuIcon :isOpen="menuOpen" @click="menuOpen = !menuOpen" />
		<DropDown class="drop-down" :isOpen="menuOpen">
			<template v-slot:inside>
				<a
					v-for="link in links"
					:key="link.text"
					class="navigation-link drop-link"
					:class="{ activeLink: isActive(link.text) }"
					:href="link.url"
					@click="click(link.text)"
				>
					{{ link.text }}
				</a>
				<a
					class="navigation-link drop-link"
					@click="searchOpen = !searchOpen"
					href="#"
				>
					search
				</a>
				<SearchBar :isOpen="searchOpen" @close="searchOpen = false" />
			</template>
		</DropDown>

		<!-- Desktop Navigation -->
		<div class="large-navigation">
			<a
				class="navigation-link"
				@click="searchOpen = !searchOpen"
				href="#"
			>
				search
			</a>
			<a
				class="navigation-link"
				v-for="link in links"
				:key="link.text"
				:href="link.url"
				@click="click(link.text)"
				:class="{ activeLink: isActive(link.text) }"
			>
				{{ link.text }}
			</a>
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
import MenuIcon from "./MenuIcon.vue";

export default {
	name: "NavigationBar",
	components: { DropDown, SearchBar, MainLogo, MenuIcon },
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
