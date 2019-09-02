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

    /**
     * 获取目录下符合filter规则的文件并处理
     * @param dirPath 目录地址
     * @param callback 处理函数
     * @param filter 筛选函数
     */
    public Process(dirPath: string, callback: (filePath: string, text: string) => Promise<any>, filter?: (filePath: string) => boolean): Promise<any> {
        const promiseArr: Array<Promise<any>> = [];
        this.getFiles(dirPath).then((files) => {
            files.forEach((filePath) => {
                if (filter === undefined || filter(filePath) === false) {
                    return;
                }
                fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
                    const text = data.toString();
                    promiseArr.push(callback(filePath, text));
                });
            });
        });
        return Promise.all(promiseArr);
    }
}
