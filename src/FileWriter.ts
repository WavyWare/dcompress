import fs from "node:fs";

export class FileWriter {
    constructor(private readonly filePath: string) {}

    public writeArray(data: string[]):void {
        let content = '';
        data.forEach((item) => {
            content += `${item} `;
        })
        content = content.trim()
        this.write(content);
    }

    public write(data: string):void {
        try {
            fs.writeFileSync(this.filePath, data, 'utf8');
        } catch (e) {
            console.error(e);
            return;
        }
    }

}