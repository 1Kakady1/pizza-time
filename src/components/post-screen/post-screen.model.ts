import { ITask } from "../task-list/state/task-list.state.model";

export interface IPostItemProps{
    post: ITask;
    sliderData:  ITask[];
    isLoad: boolean;
    isRefresh: boolean;
    onRefresh: ()=> void;
    nav: (id: string)=> void;
}