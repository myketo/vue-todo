<template>
	<div class="todo-item" :class="{ 'item-new': isNew }">
		<todo-checkbox></todo-checkbox>
		<span class="text" :class="{ 'text-new': isNew }">{{ text }}</span>
	</div>
</template>

<script>
import TodoCheckbox from "./TodoCheckbox.vue"

export default {
	name: 'TodoItem',
	props: {
		isNew: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			text: 'Create a new todo...',
		}
	},
	components: {
		TodoCheckbox,
	}
}
</script>

<style>
	div.todo-item {
		background: white;
		padding: 22px;
		border-radius: 6px;
		display: inline-flex;
		gap: 20px;
		align-items: center;
		border-bottom: 1px solid var(--light-grey);
	}

	div.todo-item.item-new {
		margin-bottom: 25px;
	}

	div.todo-item span.text {
		margin-bottom: -3px;
	}

	div.todo-item span.text-new {
		color: var(--dark-grey);
	}
</style>

<!-- 0px 0px 40px 10px hsl(235deg 19% 35% / 35%) -->