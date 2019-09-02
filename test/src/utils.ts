import { CommonRegExp } from "./CommonRegExp";
/**
 * 删除注释
 * @param text
 */
export function removeComments(text: string): string {
    let newtext = text.replace(CommonRegExp.inlineComment, "");
    newtext = text.replace(CommonRegExp.multLineComment, "");
    return newtext;
}

/**
 * 获取一个完整的语句
 * @param text
 */
function getOneStatement(text: string): string[] {
    const matches = text.match(CommonRegExp.statement);
    return matches;
}
/**
 * 获取枚举定义
 * @param text
 */
function getEnumStructure(text: string): string[] {
    const matches = text.match(CommonRegExp.enumDeclare);
    return matches;
}

/**
 * 获取所有的赋值表达式
 * @param text 原始字符串
 */
function getAssignmentStatements(text: string): string[] {
    const matches = text.match(CommonRegExp.assignmentStatement);
    return matches || [];
}

/**
 * 获取赋值表达式左边的字串
 * @param assignment
 */
function getLeftValue(assignment: string): string {
    const matches = assignment.match(/\w+\s*=/);
    if (matches.length < 1) {
        throw new Error(assignment + "不匹配");
    }
    return matches[0].replace("=", "").replace(" ", "");
}

/**
 * 获取enum的名称
 * @param enumDeclare
 */
function getEnumName(enumDeclare: string): string {
    const matches = enumDeclare.match(CommonRegExp.enumName);
    return matches[0];
}

/**
 * 获取赋值表达式的右边的字串
 * @param assignment
 */
function getRightValue(assignment: string): string {
    const matches = assignment.match(/=.*[;,]/);
    if (matches.length < 1) {
        throw new Error(assignment + "不匹配");
    }
    return matches[0].replace("=", "").replace(",", "").replace(";", "");
}

/**
 * 从表达式中获取变量及值
 * @param text 表达式
 * @param context 上下文 包含已经解析出来的变量 用于计算新的变量的值
 */
function getVariablesFromExpression(text: string, context: Map<string, number>): Map<string, number> {
    const variables: Map<string, number> = new Map();
    const expressions = getAssignmentStatements(text); // 获取赋值表达式
    for (let i = 0; i < expressions.length; ++i) {
        const assign = expressions[i];
        const left = getLeftValue(assign); // 获取等号左边的字符串
        const right = getRightValue(assign); // 获取等号右边的字符串
        try {
            // tslint:disable-next-line: no-eval
            const val = eval(right); // 若右侧的值可以计算出来, 则更新variables
            context.set(left, val);
            variables.set(left, val);
        } catch (reason) {
        }
    }

    for (let i = 0; i < expressions.length; ++i) {
        const assign = expressions[i];
        const left = getLeftValue(assign); // 获取等号左边的字符串
        let right = getRightValue(assign); // 获取等号右边的字符串
        try {
            // tslint:disable-next-line: no-eval
            const val = eval(right);
            context.set(left, val);
            variables.set(left, val);
        } catch (reason) {
            context.forEach((v, k) => {
                right = right.replace(k, `${v}`);
            });
            // console.log(right);
            // tslint:disable-next-line: no-eval
            const val = eval(right);
            context.set(left, val);
            variables.set(left, val);
        }
    }

    return variables;
}
/**
 * 将表达式替换为值
 * @param text 原始字符串
 */
export function evaluateExpression(text: string): IEnumStructure[] {

    const enumStructures: IEnumStructure[] = [];

    const context: Map<string, number> = new Map();
    const newText = removeComments(text);
    const statements = getOneStatement(newText);
    statements.forEach((stat) => {
        getVariablesFromExpression(stat, context);
    });

    const enums = getEnumStructure(newText);
    enums.forEach((item) => {
        const enumName = getEnumName(item);
        const expressions = getAssignmentStatements(item); // 获取赋值表达式
        const vars = getVariablesFromExpression(item, context);
        enumStructures.push({
            name: enumName,
            variables: vars,
        });
    });

    return enumStructures;
}

interface IEnumStructure {
    name: string;
    variables: Map<string, number>;
}
