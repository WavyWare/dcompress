import {FileWriter} from "./FileWriter";
import {FileReader} from "./FileReader";
import {HexEncoderDecoder} from "./HexEncoderDecoder";

class Compressor {
    constructor(
        private readonly reader: FileReader,
        private readonly writer: FileWriter
    ) {}

    public run() {
        const fileContent = this.reader.read();
        const encoded = HexEncoderDecoder.encode(fileContent);
        this.writer.writeArray(encoded);
    }
}

const reader = new FileReader('in/inputToCompress.txt');
const writer = new FileWriter('out/compressedOutput.txt');
const compressor = new Compressor(reader, writer);

compressor.run();