import * as fs from "fs";

export class ProcessTextFilesInDir {
    private getFiles(path: string): Promise<string[]> {
        return new Promise((resolve) => {
            fs.readdir(path, { withFileTypes: true }, (err, files) => {
                const fileList: string[] = [];
                files.forEach((dirent) => {
                    if (dirent.isFile()) {
                        fileList.push(path + "/" + dirent.name);
                    }
                });
                resolve(fileList);
            });
        });
    }
    public Process(dirPath: string, callback: (filePath: string, text: string) => Promise<any>): Promise<any> {
        const promiseArr: Array<Promise<any>> = [];
        this.getFiles(dirPath).then((files) => {
            files.forEach((filePath) => {
                fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
                    const text = data.toString();
                    promiseArr.push(callback(filePath, text));
                });
            });
        });
        return Promise.all(promiseArr);
    }
}
