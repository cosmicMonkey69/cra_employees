import { Component } from 'react';
import './employees-list-item.css'

class EmployersListItem extends Component {

    // onIncrease = () => {
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }

    // addLike = () => {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // }
    
    changeSalary = (e) => {
        const newSalary = parseInt(e.target.value)
        this.props.onChangeSalary(newSalary)
    }

    render () {
        const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, like} = this.props

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += " increase"
        }
        if (like) {
            classNames += " like"
        }

        return (
        <li className={classNames}>
        <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+" $"} onChange={this.changeSalary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
        )
    }
}

export default EmployersListItem;