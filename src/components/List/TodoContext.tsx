import React, { createContext, useContext, ReactNode } from 'react';
import { useTodos } from '@/shared/hooks/useTodos';

type TodoContextType = ReturnType<typeof useTodos>;

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
    const todoActions = useTodos();
    return (
        <TodoContext.Provider value={todoActions}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodoContext() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within TodoProvider');
    }
    return context;
}