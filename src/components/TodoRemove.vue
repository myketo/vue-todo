<template>
	<transition name="fade">
		<button class="remove-icon" @click="$emit('removeItem')"></button>
	</transition>
</template>

<script>
export default {
	name: 'TodoRemove',
	emits: [
		'removeItem',
	],
}
</script>

<style>
	.remove-icon {
		background: url("../assets/images/icon-cross.svg") no-repeat center;
		width: 25px;
		height: 25px;
		min-width: 25px;
		min-height: 25px;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	@media (max-width: 767px) {
		.remove-icon {
			width: 11px;
			height: 11px;
			min-width: 11px;
			min-height: 11px;
		}
	}
</style>