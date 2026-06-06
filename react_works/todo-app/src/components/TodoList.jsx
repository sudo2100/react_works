
export default function TodoList({todos, onToggleComplete}){

  return(
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input 
              type='checkbox'
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
            /> {todo.text}
          </li>
        ))}
        </ul>
    </div>
  )
}