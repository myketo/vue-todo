<template>
	<input type="text" :placeholder="value">
</template>


<script>
export default {
	name: 'TodoInput',
	props: {
		value: String,
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
		color: var(--grey);
	}
</style>