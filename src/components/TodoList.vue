<template>
	<div class="todo-list">
		<div class="todo-header">
			<h1>{{ title }}</h1>
			
			<div class="theme-icon">
				<img @click="toggleTheme" :src="iconSource">
			</div>
		</div>

		<todo-item is-new @newItem="newItem"></todo-item>

		<div class="items-container">
			<todo-item 
				v-for="item in items"
				:id="item.id"
				:key="item.id"
				:text="item.text"
				:checked="item.checked"
				@statusChanged="updateItem"
				@removeItem="removeItem"
			></todo-item>

			<div v-if="!this.items.length" class="no-items">
				<p>No items on list. Add a new item!</p>
			</div>

			<todo-footer :count="items.length"></todo-footer>
		</div>
	</div>
</template>

<script>
import TodoItem from "./TodoItem.vue"
import TodoFooter from "./TodoFooter.vue"

export default {
	name: 'TodoList',
	
	props: {
		title: String,
	},

	components: {
		TodoItem,
		TodoFooter,
	},

	data() {
		return {
			iconType: 'moon',
			items: [],
		}
	},
	
	computed: {
		iconSource() {
			return require('../assets/images/icon-' + this.iconType + '.svg')
		},
	},

	methods: {
		toggleTheme() {
			this.iconType = this.iconType == 'sun' ? 'moon' : 'sun'
		},

		newItem(newText) {
			this.items.push(
				{
					id: this.items.length,
					text: newText,
					checked: false,
				}
			)

			this.setLocalStorageItems()
		},

		updateItem(updItem) {
			const index = this.items.findIndex(item => {
				return (updItem.id == item.id)
			})
			this.items[index].checked = updItem.checked

			this.setLocalStorageItems()
		},

		removeItem(id) {
			const index = this.items.findIndex(item => {
				return (id == item.id)
			})
			this.items.splice(index, 1)

			this.setLocalStorageItems()
		},

		setLocalStorageItems() {
			const parsed = JSON.stringify(this.items)
			localStorage.setItem('items', parsed)
		},
	},

	mounted() {
		if (localStorage.getItem('items')) {
			this.items = JSON.parse(localStorage.getItem('items'))
		}
	},
}
</script>

<style>
	div.todo-list {
		width: 37.5%;
		display: flex;
		flex-direction: column;
		margin: 80px 0;
	}

	div.todo-list div.items-container {
		width: 100%;
		box-shadow: 0px 0px 40px 10px hsl(235deg 19% 35% / 35%);
		border-radius: 6px;
		display: flex;
		flex-direction: column;
	}

	div.todo-list h1 {
		letter-spacing: 19px;
		color: white;
		font-size: revert;
		font-weight: revert;
		margin-bottom: 41px;
	}

	div.todo-list .no-items {
		background: white;
		padding: 21px;
		gap: 20px;
		align-items: center;
		border-bottom: 1px solid var(--light-grey);
		color: var(--grey);
		text-align: center;
		border-radius: 6px 6px 0 0;
	}

	div.todo-header {
		display: flex;
		justify-content: space-between;
	}

	div.todo-header .theme-icon img {
		height: 30px;
	}
</style>