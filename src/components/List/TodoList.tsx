'use client';
import TodoItem from "@/entity/task/Task";
import AddTodo from "@/components/Button/button";
import { useTodos } from "@/shared/hooks/useTodos";

export default function TodoList() {
    const { todos } = useTodos();

    return (
        <>
            <AddTodo />
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
        </>
    );
}