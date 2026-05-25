import { Check, GripVertical, Pencil, Trash2, Save, X } from "lucide-react";
import type { Task } from "../../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
  isEditing: boolean;
  editText: string;
  setEditText: (value: string) => void;
  onSave: (id: number) => void;
  onCancel: () => void;
  moveTask: (fromId: number, toId: number) => void;
  dragOverId: number | null;
  setDragOverId: (id: number | null) => void;
}

function TaskItem({ task, onToggle, onDelete, onEdit, isEditing, editText, setEditText, onSave, onCancel, moveTask, dragOverId, setDragOverId }: TaskItemProps) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", String(task.id));
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOverId(task.id);
      }}
      onDragLeave={() => setDragOverId(null)}
      onDrop={(e) => {
        e.preventDefault();

        const fromId = Number(e.dataTransfer.getData("text/plain"));
        moveTask(fromId, task.id);

        setDragOverId(null);
      }}
      className={`
        group flex items-center gap-2 rounded-lg border bg-(--card) p-3
        transition-all duration-200
        hover:bg-(--secondary)
        ${dragOverId === task.id
          ? "border-(--primary) bg-(--secondary) scale-[1.02]"
          : "border-(--border)"
        }
      `}
    >
      <button
        type="button"
        className='text-(--muted-foreground)/40 cursor-grab hover:text-(--muted-foreground) transition-colors'
      >
        <GripVertical className='h-4 w-4' />
      </button>
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        className={`flex h-6 w-6 items-center justify-center rounded-xl border-2 transition-colors ${task.completed
          ? "bg-(--accent) border-(--accent)"
          : "border-(--muted-foreground)/40 hover:border-(--accent)"
          }`}
      >
        {task.completed && (
          <Check className="h-4 w-4 text-white" />
        )}
      </button>
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full rounded-md border border-(--input) bg-(--card) px-2 py-1 text-sm text-(--foreground)"
          />
        ) : (
          <span
            className={`block whitespace-normal break-words ${task.completed
              ? "line-through text-(--muted-foreground)"
              : "text-(--foreground)"
              }`}
          >
            {task.text}
          </span>
        )}
      </div>
      {isEditing ? (
        <div className="ml-auto flex items-center gap-2">
          <button onClick={onCancel}>
            <X className="w-4 h-4 cursor-pointer" />
          </button>

          <button
            disabled={!editText.trim()}
            onClick={() => onSave(task.id)}
            className="text-(--primary) disabled:opacity-40 cursor-pointer"
          >
            <Save className="w-4 h-4" />
          </button>
        </div>
      ) : task.completed ? (
        <div className="flex ml-auto opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-600 transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={() => onEdit(task)}
            className="text-(--muted-foreground) hover:text-(--foreground) cursor-pointer"
          >
            <Pencil className="w-4 h-4" />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-600 cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}

export default TaskItem;