<template>
	<div class="todo-list">
		<h1>{{ title }}</h1>

		<todo-item is-new></todo-item>

		<div class="items-container">
			<todo-item></todo-item>
			<todo-item></todo-item>
			<todo-item></todo-item>
			<todo-item></todo-item>
			<todo-item></todo-item>
			<todo-item></todo-item>
		</div>
	</div>
</template>

<script>
import TodoItem from "./TodoItem.vue"

export default {
	name: 'TodoList',
	props: {
		title: String,
	},
	components: {
		TodoItem
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
</style>