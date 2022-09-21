import {EntitySchemaOptions} from "./EntitySchemaOptions";

export class EntitySchema<T = any> {
    readonly "@instanceof" = Symbol.for("EntitySchema");

    constructor(public options: EntitySchemaOptions<T>) {
    }
}