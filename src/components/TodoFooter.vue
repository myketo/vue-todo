<template>
	<div class="todo-footer">
		<span>{{ count }} items left</span>

		<div class="buttons">
			<span class="active">All</span>
			<span>Active</span>
			<span>Completed</span>
		</div>

		<span>Clear Completed</span>
	</div>
</template>

<script>
export default {
	name: 'TodoFooter',
	props: {
		count: String,
	},
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

	.todo-footer .buttons span {
		font-weight: bold;
		padding: 12px;
	}

	.todo-footer .buttons span.active {
		color: var(--light-blue);
	}
</style>