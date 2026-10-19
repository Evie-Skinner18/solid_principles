enum FileType {
    Csv = 'csv',
    Markdown = 'md',
    WordDoc = 'docx'
}

export class FileProcessor {
    private fileType: FileType;


    constructor(fileType: FileType) {
        this.fileType = fileType;
    }

    public locateFile(filePath: string): File {
        // find the file we want to process
    }

    public saveFileToDirectory(directoryPath: string): boolean {
        // save it to local
    }

    public sanitiseFile(filePath: string){
        const fileBlob = this.locateFile('evies-diary.txt');
        const fileContents = new FileReader().readAsText(fileBlob);

        // sanitise the file contents
    }

    public processFile(filePath: string): boolean {
        const file = this.locateFile(filePath);
        switch(file.type){
            case FileType.Csv:
        }
    }
}