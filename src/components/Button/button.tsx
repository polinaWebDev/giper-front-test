'use client';
import { useState } from 'react';
import { useTodos } from '@/shared/hooks/useTodos';

export default function AddTodo() {
    const [text, setText] = useState('');
    const { addTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить новую задачу..."
            />
            <button type="submit">Добавить</button>
        </form>
    );
}