import * as fs from 'fs';

export enum FileType {
    Csv = 'csv',
    Markdown = 'md',
    WordDoc = 'docx'
}

// todo this has multiple reasons to change
export class FileProcessor {
    private fileType: FileType;


    constructor(fileType: FileType) {
        this.fileType = fileType;
    }

    private readFile(filePath: string): string | undefined {
        try {
            const contents = fs.readFileSync(filePath, 'utf8');
            return contents;
        } catch (error) {
            console.error(error);
        }
    }

    public getSanitisedFile(filePath: string): string | undefined {
        const fileContents = this.readFile(filePath);
        if (fileContents){
            const sanitisedFileContents = fileContents?.trim().replaceAll('$', '')
            .replaceAll('<', '').replaceAll('>', '');

            return sanitisedFileContents;
        } else {
            return undefined;
        }
        
    }


    public writeToFile(filePath: string, contents: string): void {        
        try {
            fs.writeFileSync(filePath, contents, 'utf8');
            console.log('File written successfully');
        } catch (error) {
            console.error(error);
        }
    }
}