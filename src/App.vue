<template>
	<div class="app-container" :class="{ dark: darkTheme }">
		<todo-list title="TODO" @changeTheme="changeTheme"></todo-list>
	</div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
	name: 'App',
	
	components: {
		TodoList,
	},

	data() {
		return {
			darkTheme: false,
		}
	},

	methods: {
		changeTheme() {
			this.darkTheme = !this.darkTheme
			localStorage.darkTheme = this.darkTheme
		}
	},

	mounted() {
		if (localStorage.darkTheme) {
			this.darkTheme = JSON.parse(localStorage.darkTheme)
		}
	},
}
</script>

<style>
:root {
	--bright-blue: hsl(220, 98%, 61%);
	--check-background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
	--black: hsl(235, 19%, 35%);
	--grey: hsl(236, 9%, 61%);
	--dark-grey: hsl(236, 9%, 61%);
	--light-grey: hsl(236, 33%, 92%);
	--mid-grey: hsl(233, 11%, 84%);
	--light-blue: hsl(220, 98%, 61%);
	
	--dark-blue: hsl(233, 14%, 35%);
	--dark-grey-blue: hsl(234, 11%, 52%);
	--very-dark-blue: hsl(237, 14%, 26%);
	--light-grey-blue: hsl(234, 39%, 85%);
	--darkest-blue: hsl(235, 24%, 19%);
}

*, * > * {
	box-sizing: border-box;
	font-family: 'Josefin Sans', sans-serif;
}

.app-container {
	font-size: 18px;
	color: var(--black);
	font-family: 'Josefin Sans', sans-serif;
	display: flex;
	justify-content: center;
	background-repeat: no-repeat;
	background-size: 100% auto;
	width: 100vw;
	height: 100vh;
	background-image: url('./assets/images/bg-desktop-light.jpg');
}

.dark {
	background-color: hsl(235, 21%, 11%);
	background-image: url('./assets/images/bg-desktop-dark.jpg');
}
</style>