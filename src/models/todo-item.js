import { TodoStatusMap, StatusCodes } from '@/models/status';

export function TodoItem({ title, id, code }) {
  this.title = title;
  this.id = id;
  this.code = code || TodoStatusMap[StatusCodes.new].code;
}
