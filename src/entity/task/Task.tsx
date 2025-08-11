'use client';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type Props = {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
    return (
        <li style={{ marginTop: 10 }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    marginLeft: 8,
                }}
            >
        {todo.text}
      </span>
            <button onClick={() => onDelete(todo.id)} style={{ marginLeft: 8 }}>
                x
            </button>
        </li>
    );
}