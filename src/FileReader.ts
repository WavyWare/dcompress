import fs from 'node:fs'

export class FileReader {
    constructor(private readonly filePath: string) {}

    public read(): string {
        try {
            return fs.readFileSync(this.filePath, 'utf8').toString();
        } catch (e) {
            console.error(e);
            return '';
        }
    }

}