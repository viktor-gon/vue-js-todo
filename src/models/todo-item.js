import { TodoStatusMap, StatusCodes } from '@/models/status';

export function TodoItem({ text, id, status, code }) {
  this.text = text;
  this.id = id;
  this.status = status || TodoStatusMap[StatusCodes.new].name;
  this.code = code || TodoStatusMap[StatusCodes.new].code;
}
