<template>
	<button :class="{ active: this.active }">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'TodoButton',
	props: {
		active: {
			type: Boolean,
			default: false,
		}
	},
}
</script>

<style scoped>
	button {
		font-weight: bold;
		margin: 0 12px;
		border: none;
		background: none;
		color: var(--grey);
		cursor: pointer;
		transition: color 0.25s ease;
		padding: 0;
	}

	button:last-of-type {
		margin: 0;
	}

	button:not(.active):hover {
		color: var(--black);
	}

	button.active {
		color: var(--light-blue);
	}

	.dark button:not(.active) {
		color: var(--dark-blue);
	}

	.dark button:not(.active):hover {
		color: white;
	}

	@media (max-width: 767px) {
		button {
			font-size: 11px;
		}
	}
</style>