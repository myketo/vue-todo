<template>
	<div class="todo-checkbox">
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
		}
	}
}
</script>

<style>
	div.todo-checkbox {
		border: 2px solid var(--light-grey);
		border-radius: 20px;
		width: 22px;
		height: 22px;
		cursor: pointer;
	}

	div.todo-checkbox input {
		display: none;
	}
</style>