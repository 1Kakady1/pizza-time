import { ITaskExcept } from "../../task-list/state/task-list.state.model";

export interface ICardVertical {
    data: ITaskExcept;
    nav: (id:string)=>void;
    height?: string | number;
    width?:  string | number;
    numberOfLines?: number;
}