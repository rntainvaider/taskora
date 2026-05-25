import { ListChecks, Plus } from 'lucide-react';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { useState } from 'react';
import TaskItem from '../components/UI/TaskItem';
import type { Task } from "../types/task";


type Filter = "all" | "active" | "completed";

function Main() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [dragOverId, setDragOverId] = useState<number | null>(null);

  const completedTasks = tasks.filter(task => task.completed).length;

  const filters = [
    { value: "all", label: "Все" },
    { value: "active", label: "Активные" },
    { value: "completed", label: "Выполненные" },
  ] as const;

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (!task.trim()) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);
    setTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "active":
        return !task.completed;

      case "completed":
        return task.completed;

      default:
        return true;
    }
  });

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText } : task
      )
    );

    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const moveTask = (fromId: number, toId: number) => {
    const fromIndex = tasks.findIndex(t => t.id === fromId);
    const toIndex = tasks.findIndex(t => t.id === toId);

    if (fromIndex === -1 || toIndex === -1) return;

    const updated = [...tasks];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);

    setTasks(updated);
  };

  return (
    <div className="flex items-start justify-center px-4 pt-12 pb-12">
      <div className='w-full max-w-md space-y-6'>
        <div className='flex items-center gap-3'>
          <div className='flex justify-center items-center bg-(--primary) w-10 h-10 rounded-xl'>
            <ListChecks className='w-5 h-5 text-white' />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>
              Мои задачи
            </h1>
            <p className='text-xs text-(--muted-foreground)'>
              {completedTasks} из {tasks.length} выполнено
            </p>
          </div>
        </div>
        <form onSubmit={handleAddTask} className='flex gap-2'>
          <Input value={task} onChange={(e) => setTask(e.target.value)} />
          <Button disabled={!task.trim()}>
            <Plus className='w-5 h-5 text-white' />
          </Button>
        </form>
        <div className='flex gap-1 rounded-lg bg-(--secondary) p-1'>
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${filter === item.value
                ? "bg-(--card) text-(--foreground)"
                : "text-(--muted-foreground) hover:text-(--foreground)"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {filteredTasks.length === 0 ? (
          <p className="py-8 text-center text-sm text-(--muted-foreground)">
            Нет задач — добавьте первую!
          </p>
        ) : (
          <div className="space-y-2">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={startEdit}
                isEditing={editingId === task.id}
                editText={editText}
                setEditText={setEditText}
                onSave={saveEdit}
                onCancel={cancelEdit}
                moveTask={moveTask}
                dragOverId={dragOverId}
                setDragOverId={setDragOverId}
              />
            ))}
          </div>
        )}
      </div>
    </div >
  )
}

export default Main;
