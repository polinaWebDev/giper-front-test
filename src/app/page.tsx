import TodoList from "@/components/List/TodoList";
import Link from "next/link";

export default function FirstTask() {
    return (
        <main>
            <h1><i>Task 1</i></h1>
            <h3>Todo List</h3>
            <TodoList/>
            <Link href='/posts'>Ко второму заданию</Link>
        </main>
    );
}