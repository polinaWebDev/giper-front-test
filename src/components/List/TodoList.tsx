'use client';

import TodoItem from "@/entity/task/Task";
import AddTodo from "@/components/Button/button";
import {useTodos} from "@/shared/hooks/useTodos";

export default function TodoList() {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

    return (
        <>
            <AddTodo onAdd={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
        </>
    );
}