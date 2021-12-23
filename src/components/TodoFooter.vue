<template>
	<div class="todo-footer" :class="{detached: detached}">
		<span v-if="!detached">{{ count }} item{{ count != 1 ? 's' : '' }} left</span>
		<div v-if="!$isMobile() || detached">
			<todo-button 
				:key="index" 
				v-for="(button, index) in buttons"
				@click="setActive(index)"
				:active="button.active"
			>
				{{ button.text }}
			</todo-button>
		</div>

		<todo-button v-if="!detached" @click="$emit('clearCompleted')">Clear Completed</todo-button>
	</div>
</template>

<script>
import TodoButton from './TodoButton'

export default {
	name: 'TodoFooter',
	props: {
		count: Number,
		detached: Boolean,
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

			this.$emit('buttonChange', this.buttons[index].text.toLowerCase())
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

	.todo-footer.detached {
		margin-top: 15px;
		border-radius: 6px;
		justify-content: center;
		box-shadow: 0px 0px 40px 10px hsl(235deg 19% 35% / 35%);
	}

	.dark .todo-footer {
		background: var(--darkest-blue);
		color: var(--dark-blue);
	}

	.dark .todo-footer.detached {
		box-shadow: 0px 0px 40px 10px hsl(0deg 0% 0% / 35%);
	}

	@media (max-width: 767px) {
		.todo-footer {
			font-size: 11px;
			padding: 18px 22px;
		}
	}
</style>