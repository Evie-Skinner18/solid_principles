import { FileProcessor, FileType } from "./FileProcessor";


const fileProcessor = new FileProcessor(FileType.Markdown);

const sanitisedFileContents = fileProcessor.getSanitisedFile('evies_secret_recipe.txt');

if (sanitisedFileContents){
    fileProcessor.writeToFile('./recipes/', sanitisedFileContents);
} else {
    console.log('No file to process :<');
}
