const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
]

// const [state, dispatch] = useReducer(first, second, third)

const todoReducer = (state = initialState, action) => {
  // ?, Si la action tiene algun valor lee el type sino no, no hagas nada
  if (action?.type === 'agregar') {
    return [...state, action.payload]
  }
  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false,
}

const agregarTodoAction = {
  type: 'agregar',
  // newTodo: newTodo,
  payload: newTodo,
}

todos = todoReducer(todos, agregarTodoAction)

console.log(todos)
