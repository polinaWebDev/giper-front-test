import {useTodoContext} from "@/components/List/TodoContext";
import {Todo} from "@/shared/hooks/useTodos";

export default function TodoItemWithContext({ todo }: { todo: Todo }) {
    const { toggleTodo, deleteTodo } = useTodoContext();

    return (
        <li style={{ marginTop: 10 }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    marginLeft: 8,
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 8 }}>
                x
            </button>
        </li>
    );
}