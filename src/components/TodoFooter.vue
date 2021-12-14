<template>
	<div class="todo-footer">
		<span>{{ count }} items left</span>

		<div>
			<todo-button 
				:key="index" 
				v-for="(button, index) in buttons"
				@click="setActive(index)"
				:active="button.active"
			>
				{{ button.text }}
			</todo-button>
		</div>

		<todo-button @click="$emit('clearCompleted')">Clear Completed</todo-button>
	</div>
</template>

<script>
import TodoButton from './TodoButton'

export default {
	name: 'TodoFooter',
	props: {
		count: Number,
	},
	data() {
		return {
			buttons: [
				{text: 'All', active: true},
				{text: 'Active'},
				{text: 'Completed'},
			],
		}
	},
	methods: {
		setActive(index) {
			const activeIndex = this.buttons.findIndex(button => {
				return (button.active == true)
			})

			this.buttons[activeIndex].active = false
			this.buttons[index].active = true

			this.$parent.button = this.buttons[index].text.toLowerCase()
		},
	},
	components: {
		TodoButton,
	}
}
</script>

<style>
	.todo-footer {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		color: var(--dark-grey);
		background: white;
		padding: 20px;
		border-radius: 0 0 6px 6px;
	}
</style>