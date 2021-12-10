<template>
	<div>
		<h1>{{ title }}</h1>
	</div>
</template>

<script>
export default {
	name: 'TodoList',
	props: {
		title: String,
	}
}
</script>

<style scoped>
	div {
		width: 37.5%;
		margin: 80px 0;
	}

	div h1 {
		letter-spacing: 19px;
		color: white;
		font-size: revert;
		font-weight: revert;
	}
</style>