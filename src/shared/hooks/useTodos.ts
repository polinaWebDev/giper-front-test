import { useEffect, useState } from 'react';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('todos');
        if (stored) setTodos(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
    };
}