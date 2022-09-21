import {DatabaseType} from "../types/DatabaseTypes";
import {MixedTypes} from "../common/MixedTypes";

export interface BaseDatasourceOptions {

    /**
     * Database type. This is required
     */
    readonly type: DatabaseType;

    /**
     * Connection name. if no name is provided then it will be called `default`.
     * If multiple connection is established then, they must have different name
     */
    readonly name?: string;

    readonly entities?: MixedTypes<Function | string | >


}