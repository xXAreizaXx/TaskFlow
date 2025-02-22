// UI - Task
import TaskCreate from "@ui/tasks/TaskCreate";
import TaskEdit from "@ui/tasks/TaskEdit";

export const slideModules: Record<TModule, React.ReactNode> = {
    "task-create": <TaskCreate />,
    "task-edit": <TaskEdit />,
};