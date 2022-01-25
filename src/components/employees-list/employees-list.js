import EmployersListItem from "../employees-list-item/employers-list-item";

import './employees-list.css'

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise, onChangeSalary}) => {

    const elements = data.map(item => {
        
        const {id, ...itemProps} = item;

        return (
            <EmployersListItem {...itemProps} 
            key={id} 
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}
            onChangeSalary={(salary) => onChangeSalary(id, salary)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;