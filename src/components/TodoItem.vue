<template>
	<div 
		class="todo-item" 
		:class="{ 'item-new': isNew }" 
		@mouseenter="toggleShowRemove"
		@mouseleave="toggleShowRemove"
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
			showRemove: this.$isMobile(),
		}
	},
	methods: {
		toggleComplete(isActive) {
			this.isCompleted = isActive
			this.$emit('statusChanged', {id: this.id, completed: isActive})
		},

		toggleShowRemove() {
			if (!this.$isMobile()) {
				this.showRemove = !this.showRemove
			}
		}
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
		border-bottom: none;
	}

	div.todo-item span.text {
		margin-bottom: -3px;
	}

	.dark div.todo-item {
		background-color: hsl(235, 24%, 19%);
		border-bottom: 1px solid var(--dark-blue);
	}

	.dark div.todo-item.item-new {
		border-bottom: none;
	}

	.dark div.todo-item span.text {
		color: var(--light-grey-blue);
	}

	@media (max-width: 767px) {
		div.todo-item {
			gap: 10px;
			padding: 14px 22px;
		}

		div.todo-item.item-new {
			margin-bottom: 15px;
		}
	}
</style>