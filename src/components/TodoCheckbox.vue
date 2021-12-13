<template>
	<div class="todo-checkbox" @click="toggle" :class="{active: isActive}">
		<input type="checkbox" :id="inputId">
		<label :for="inputId"></label>
	</div>
</template>

<script>
export default {
	name: 'TodoCheckbox',
	data() {
		return {
			isNew: this.$parent.isNew,
			inputId: 'input-1',
			isActive: false,
		}
	}, 
	methods: {
		toggle() {
			this.isActive = !this.isActive
		}
	}
}
</script>

<style>
	div.todo-checkbox {
		border: 1px solid var(--light-grey);
		border-radius: 20px;
		width: 25px;
		height: 25px;
		min-width: 25px;
		min-height: 25px;
		cursor: pointer;
		position: relative;
	}

	div.todo-checkbox.active {
		background: linear-gradient(0.35turn, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
	}

	div.todo-checkbox.active:after {
		content: url('../assets/images/icon-check.svg');
		position: absolute;
		left: 6px;
		top: 3px;
	}

	div.todo-checkbox input {
		display: none;
	}
</style>