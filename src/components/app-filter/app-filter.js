import { Component } from 'react'
import './app-filter.css'

class AppFilter extends Component {

    filterPost = (e) => {
        const filter = e.target.dataset.filter
        this.props.onFilterSelect(filter)
    }

    render () {
        return (
            <div className="btn-group" onClick={this.filterPost}>
                <button type="button"
                    className="btn btn-light"
                    data-filter='all'>
                        Все сотрудники
                </button>
                <button type="button"
                    className="btn btn-outline-light"
                    data-filter='like'>
                        Сотрудники на повышение
                </button>
                <button type="button"
                    className="btn btn-outline-light"
                    data-filter='salary'>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter