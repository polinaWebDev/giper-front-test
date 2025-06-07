'use client';

import { useState } from 'react';

type Props = {
    onAdd: (text: string) => void;
};

export default function AddTodo({ onAdd }: Props) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (!input.trim()) return;
        onAdd(input);
        setInput('');
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Новая задача"
            />
            <button onClick={handleAdd} style={{ marginLeft: 8 }}>
                Добавить
            </button>
        </div>
    );
}