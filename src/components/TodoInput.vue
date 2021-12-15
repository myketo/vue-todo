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
	}

	input[type=text].text-new::placeholder {
		color: var(--dark-grey);
	}

	input[type=text]:focus {
		outline-width: 0;
	}

	input[type=text].text-crossed,
	input[type=text].text-crossed::placeholder {
		text-decoration: line-through;
		color: var(--mid-grey);
	}
</style>