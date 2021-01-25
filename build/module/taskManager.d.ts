import { IRequestOption } from "../interface";
declare function addSessionTask(task: any, obj: IRequestOption): void;
declare function abortSessionTask(): void;
declare function redoSessionTask(): void;
declare function delSessionTask(tag: Number): void;
declare const _default: {
    addSessionTask: typeof addSessionTask;
    delSessionTask: typeof delSessionTask;
    abortSessionTask: typeof abortSessionTask;
    redoSessionTask: typeof redoSessionTask;
};
export default _default;
