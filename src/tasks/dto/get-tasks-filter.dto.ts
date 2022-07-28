import { TaskSatus } from "../task.model";

export class GetTasksFilterDto {
  status: TaskSatus;
  search: string;
}