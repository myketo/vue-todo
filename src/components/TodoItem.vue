<template>
	<div 
		class="todo-item" 
		:class="{ 'item-new': isNew }" 
		@mouseenter="showRemove = !showRemove"
		@mouseleave="showRemove = !showRemove"
	>
		<todo-checkbox @toggled="toggleComplete"></todo-checkbox>
		<todo-input 
			:value="text" 
			:disabled="!isNew" 
			:class="{ 'text-new': isNew, 'text-crossed': isCompleted }"
		></todo-input>
		<todo-remove 
			v-if="!isNew" 
			v-show="showRemove" 
			@removeItem="$emit('removeItem', this.id)"
		></todo-remove>
	</div>
</template>

<script>
import TodoCheckbox from "./TodoCheckbox.vue"
import TodoInput from "./TodoInput.vue"
import TodoRemove from "./TodoRemove.vue"

export default {
	name: 'TodoItem',
	props: {
		isNew: {
			type: Boolean,
			default: false,
		},
		text: {
			type: String,
			default: 'Create a new todo...',
		},
		id: {
			type: Number,
		},
		completed: {
			type: Boolean,
			default: false,
		}
	},
	components: {
		TodoCheckbox,
		TodoInput,
		TodoRemove,
	},
	data() {
		return {
			isCompleted: this.completed,
			showRemove: false,
		}
	},
	methods: {
		toggleComplete(isActive) {
			this.isCompleted = isActive
			this.$emit('statusChanged', {id: this.id, completed: isActive})
		},
	}
}
</script>

<style>
	div.todo-item {
		background: white;
		padding: 20px;
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