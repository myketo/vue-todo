<template>
	<div class="todo-item" :class="{ 'item-new': isNew }">
		<todo-checkbox></todo-checkbox>
		<todo-input :value="text" :disabled="!isNew" :class="{ 'text-new': isNew }"></todo-input>
	</div>
</template>

<script>
import TodoCheckbox from "./TodoCheckbox.vue"
import TodoInput from "./TodoInput.vue"

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
		TodoInput,
	}
}
</script>

<style>
	div.todo-item {
		background: white;
		padding: 21px;
		display: inline-flex;
		gap: 20px;
		align-items: center;
		border-bottom: 1px solid var(--light-grey);
	}

	div.todo-item:first-of-type {
		border-radius: 6px 6px 0 0;
	}

	div.todo-item.item-new {
		margin-bottom: 25px;
		border-radius: 6px;
	}

	div.todo-item span.text {
		margin-bottom: -3px;
	}
</style>