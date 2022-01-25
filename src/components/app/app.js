import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employees-list/employees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form'

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Smith', salary: 800, increase: true, like: true, id: 1},
                {name: 'Bill Murray', salary: 3000, increase: true, like: false, id: 2},
                {name: 'Steve Mcgee', salary: 5000, increase: false, like: false, id: 3}
            ],
            term: '',
            filter: ''
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id == id)

            // const before = data.slice(0, index)
            // const after = data.slice(index+1)

            // const newArr = [...before, ...after]
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
            const item = {
                name, 
                salary,
                increase: false,
                like: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, item]
                return {
                    data: newArr
                }
            })
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id)

        //     const old = data[index]
        //     const newItem = {...old, increase: !old.increase}
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]

        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, like: !item.like}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'like':
                return items.filter(item => item.like)
            case 'salary': 
                return items.filter(item => item.salary>1000)
            default: return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    onChangeSalary = (id, salary) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if(item.id === id) {
                        return {...item, salary: salary}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    render () {

        const {data, term, filter} = this.state
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)

        const increased = this.state.data.filter(item => item.increase).length
        return (
            <div className='app'>
                <AppInfo employees={this.state.data.length} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                    onChangeSalary={this.onChangeSalary}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App