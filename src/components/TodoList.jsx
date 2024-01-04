import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default function TodoList(props){

    const listItems = props.todos.map((todo, index)=> <TodoItem key={index} item={todo} removeItem = {props.removeItem} index={index}/>)

    return (
        <section className="h-[500px] pt-2 overflow-auto gap-2 flex flex-col">
            {listItems}
        </section>
    )
}