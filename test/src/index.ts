import { removeComments, evaluateExpression } from "./utils";
import { ProcessTextFilesInDir } from "./ProcessTextFilesInDir";

const tsDefsRoot = "./defs/";

const processer = new ProcessTextFilesInDir();
processer.Process(tsDefsRoot, (filePath, text) => {
    return new Promise((resolve) => {
        const result = evaluateExpression(text);
        console.log(result);
        resolve(text);
    });
});
