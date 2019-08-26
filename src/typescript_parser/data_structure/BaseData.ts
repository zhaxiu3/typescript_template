import { Expression } from "./Expression";

export class BaseData {
    public type: string;
    public name: string;
    public value: BaseData | Expression;
}
