<template>
	<div class="todo-list">
		<div class="todo-header">
			<h1>{{ title }}</h1>
			
			<div class="theme-icon">
				<img @click="toggleTheme" :src="iconSource">
			</div>
		</div>

		<todo-item is-new></todo-item>

		<div class="items-container">
			<todo-item></todo-item>
			<todo-item></todo-item>
			<todo-item></todo-item>
			<todo-item></todo-item>
			<todo-item></todo-item>
			<todo-item></todo-item>

			<todo-footer></todo-footer>
		</div>
	</div>
</template>

<script>
import TodoItem from "./TodoItem.vue"
import TodoFooter from "./TodoFooter.vue"

export default {
	name: 'TodoList',
	props: {
		title: String,
	},
	components: {
		TodoItem,
		TodoFooter,
	},
	data() {
		return {
			iconType: 'sun',
		}
	},
	computed: {
		iconSource() {
			return require('../assets/images/icon-' + this.iconType + '.svg')
		},
	},
	methods: {
		toggleTheme() {
			this.iconType = this.iconType == 'sun' ? 'moon' : 'sun'
		}
	}
}
</script>

<style>
	div.todo-list {
		width: 37.5%;
		display: flex;
		flex-direction: column;
		margin: 80px 0;
	}

	div.todo-list div.items-container {
		width: 100%;
		box-shadow: 0px 0px 40px 10px hsl(235deg 19% 35% / 35%);
		border-radius: 6px;
		display: flex;
		flex-direction: column;
	}

	div.todo-list h1 {
		letter-spacing: 19px;
		color: white;
		font-size: revert;
		font-weight: revert;
		margin-bottom: 41px;
	}

	div.todo-header {
		display: flex;
		justify-content: space-between;
	}

	div.todo-header .theme-icon img {
		height: 30px;
	}
</style>