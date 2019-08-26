import { BaseData } from "../data_structure";

export class BaseParser {
    public parse(block: string): BaseData[] {
        throw new Error("not implemented");
    }
}
