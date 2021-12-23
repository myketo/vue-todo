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
				v-for="(item, index) in items"
				:key="item.id"
				v-show="isFiltered(index)"
				:id="item.id"
				:text="item.text"
				:completed="item.completed"
				@statusChanged="updateItem"
				@removeItem="removeItem"
			></todo-item>

			<div v-if="countItems() == 0" class="no-items">
				<p>
					No {{ button == 'all' ? '' : ' ' + button}} items on list. 
					Add a new item!
				</p>
			</div>

			<todo-footer :count="countItems()" @clearCompleted="clearCompleted"></todo-footer>
		</div>

		<todo-footer v-if="$isMobile()" :count="countItems()" @clearCompleted="clearCompleted" detached></todo-footer>
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

	emits: [
		'changeTheme',
	],

	components: {
		TodoItem,
		TodoFooter,
	},

	data() {
		return {
			items: [],
			button: 'all',
			iconType: 'moon',
		}
	},
	
	computed: {
		iconSource() {
			return require('../assets/images/icon-' + this.iconType + '.svg')
		},
	},

	methods: {
		toggleTheme() {
			this.iconType = this.iconType === 'moon' ? 'sun' : 'moon'
			this.$emit('changeTheme')
		},

		newItem(data) {
			this.items.push(
				{
					id: this.items.length,
					text: data.text,
					completed: data.completed,
				}
			)

			this.setLocalStorageItems()
		},

		updateItem(updItem) {
			const index = this.items.findIndex(item => {
				return (updItem.id == item.id)
			})
			this.items[index].completed = updItem.completed

			this.setLocalStorageItems()
		},

		removeItem(id) {
			const index = this.items.findIndex(item => {
				return (id == item.id)
			})
			this.items.splice(index, 1)

			this.setLocalStorageItems()
		},

		clearCompleted() {
			this.items = this.items.filter(item => {
				return !item.completed
			})
			this.setLocalStorageItems()
		},

		isFiltered(index) {
			switch(this.button){
				case 'all':
					return true
				case 'active':
					return (this.items[index].completed == false)
				case 'completed':
					return (this.items[index].completed == true)
			}
		},

		countItems() {
			if (this.button == 'all') {
				return this.items.length
			}

			if (this.button == 'active') {
				const active = this.items.filter(item => {
					return item.completed == false
				})

				return active.length
			}

			if (this.button == 'completed') {
				const completed = this.items.filter(item => {
					return item.completed == true
				})

				return completed.length
			}
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

		if (localStorage.darkTheme) {
			this.iconType = JSON.parse(localStorage.darkTheme) === true ? 'sun' : 'moon'
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
	
	div.todo-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 41px;
	}

	div.todo-header h1 {
		letter-spacing: 19px;
		color: white;
		font-size: revert;
		font-weight: revert;
	}

	div.todo-header .theme-icon img {
		height: 27px;
		cursor: pointer;
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

	.item-list-move {
		transition: transform 0.8s ease;
	}

	.dark div.todo-list div.items-container {
		box-shadow: 0px 0px 40px 10px hsl(0deg 0% 0% / 35%);
	}

	.dark div.todo-list .no-items {
		background-color: var(--darkest-blue);
		color: var(--light-grey-blue);
		border-bottom: 1px solid var(--dark-blue);
	}

	@media (max-width: 767px) {
		div.todo-list {
			width: 86%;
			margin: 49px 0;
		}

		div.todo-header {
			margin-bottom: 33px;
		}

		div.todo-header h1 {
			letter-spacing: 10px;
			font-size: 26px;
		}

		div.todo-header .theme-icon img {
			height: 20px;
		}

		div.todo-list .no-items {
			padding: 16px;
		}
	}
</style>