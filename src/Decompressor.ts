import {FileReader} from "./FileReader";
import {FileWriter} from "./FileWriter";
import {HexEncoderDecoder} from "./HexEncoderDecoder";

class Decompressor {
    constructor(
        private readonly reader: FileReader,
        private readonly writer: FileWriter,
    ) {}

    public run() {
        const fileContent = this.reader.read();
        const decoded = HexEncoderDecoder.decode(fileContent);
        this.writer.write(decoded)
    }
}
const reader = new FileReader('in/inputToDecompress.txt');
const writer = new FileWriter('out/decompressedOutput.txt');
const decompressor = new Decompressor(reader, writer);

decompressor.run();