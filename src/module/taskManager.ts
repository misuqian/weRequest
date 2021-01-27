import { IRequestOption } from "../interface"
import requestHandler from './requestHandler'
// 依赖登录态的请求队列逻辑，在发现登录态失效时及时进行abort，登录态生效之后重新请求

const taskQueue : any = {}; // 请求任务队列
let waitRedoTask : IRequestOption[] = []; // 准备重新请求的队列

function addSessionTask(task : any, obj: IRequestOption) {
  if (!obj.notNeedSession) {
    const index = obj.tag + '';
    taskQueue[index] = {
      task,
      obj
    };
  }
}

function abortSessionTask() {
  for (const tag in taskQueue) {
    const data = taskQueue[tag];
    if (data.task && data.obj) {
      data.task.abort();
      data.obj.aborted = true;
      delSessionTask(data.obj.tag);
      waitRedoTask.push(data.obj);
    }
  }
}

function redoSessionTask() {
  if (!waitRedoTask) return;
  if (waitRedoTask.length === 0) return;
  for (const taskObj of waitRedoTask) {
    taskObj.aborted = false;
    requestHandler.request(taskObj);
  }
  waitRedoTask = [];
}

function delSessionTask(tag: Number) {
  const index = tag + '';
  if (taskQueue[index]) {
    taskQueue[index] = null;
    delete taskQueue[index];
  }
}

export default {
  addSessionTask,
  delSessionTask,
  abortSessionTask,
  redoSessionTask,
}