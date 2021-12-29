<template>
	<input type="text" v-model="newText" :placeholder="value" @keyup.enter="saveItem">
</template>


<script>
export default {
	name: 'TodoInput',
	props: {
		value: String,
	},
	data() {
		return {
			newText: '',
		}
	},
	methods: {
		saveItem() {
			this.$parent.$emit(
				"newItem", 
				{text: this.newText, completed: this.$parent.isCompleted}
			)

			this.newText = ''
		}
	}
}
</script>

<style>
	input[type=text] {
		width: 100%;
		height: 100%;
		font-size: 18px;
		color: var(--black);
		border: none;
		background-color: white;
		caret-color: var(--light-blue);
		margin-top: 3px;
	}

	input[type=text].text-new::placeholder {
		color: var(--dark-grey);
	}

	input[type=text]:focus {
		outline-width: 0;
	}

	input[type=text]:not(.text-new) {
		cursor: grab;
	}

	input[type=text].text-crossed,
	input[type=text].text-crossed::placeholder {
		text-decoration: line-through;
		color: var(--mid-grey);
	}

	.dark input[type=text],
	.dark input[type=text]:not(.text-new)::placeholder {
		background-color: var(--darkest-blue);
		color: var(--light-grey-blue);
	}

	.dark input[type=text].text-crossed,
	.dark input[type=text].text-crossed::placeholder {
		color: var(--dark-blue);
	}

	@media (max-width: 767px) {
		input[type=text] {
			font-size: 11px;
			margin-top: 2px;
		}
	}
</style>