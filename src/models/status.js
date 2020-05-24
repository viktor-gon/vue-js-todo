// The name of status code should be similar to StatusExplanation/Types/...
// For example code 'BREAKING' should lead to StatusExplanation/Types/StatusBreaking.vue component
// It was done to follow open-close SOLID principle...
export const StatusCodes = {
  new: 'New',
  done: 'Done',
  forget: 'Forget',
};

export const getStatusPriorityByCode = {
  [StatusCodes.new]: 0,
  [StatusCodes.done]: 1,
  [StatusCodes.forget]: 2,
};

export const getStatusNameByCode = {
  [StatusCodes.new]: 'Новое',
  [StatusCodes.done]: 'Сделано',
  [StatusCodes.forget]: 'Забыть',
  unknown: 'Неизвестно',
};

function TodoStatus(code, color, background) {
  const _code = code.toLowerCase();
  this.name = getStatusNameByCode[code];
  this.code = _code.slice(0, 1).toUpperCase() + _code.slice(1);
  this.color = color;
  this.backgroundColor = background;
}

const statusNew = new TodoStatus(StatusCodes.new, 'white', 'orange');
const statusDone = new TodoStatus(StatusCodes.done, 'white', 'green');
const statusForget = new TodoStatus(StatusCodes.forget, 'white', 'red');

export const TodoStatusMap = {
  [StatusCodes.new]: statusNew,
  [StatusCodes.done]: statusDone,
  [StatusCodes.forget]: statusForget,
};

export const statusLabels = Object.values(TodoStatusMap);

export const getStatusByName = statusName => {
  return statusLabels.find(status => status.name == statusName);
};

import StatusDone from '@/components/StatusExplanation/Types/StatusDone';
import StatusNew from '@/components/StatusExplanation/Types/StatusNew';
import StatusForget from '@/components/StatusExplanation/Types/StatusForget';
import StatusUnknown from '@/components/StatusExplanation/Types/StatusUnknown';

export const STATUS_COMPONENT_MAPPING = {
  StatusDone,
  StatusNew,
  StatusForget,
  StatusUnknown,
};
