export class HexEncoderDecoder {
    public static encode(input: string): string[] {
        let encoded: string[] = [];
        for (let i = 0; i < input.length; i++) {
            let ascii = input.charCodeAt(i);
            let hex = ascii.toString(16);
            if (hex.length === 1) hex = '0' + hex;
            encoded.push(hex);
        }
        return encoded;
    }

    public static decode(input: string): string {
        let encoded: string[] = [];
        let decoded = '';
        encoded = input.split(' ');
        encoded.forEach(hexIndex => {
            const decIndex = parseInt(hexIndex, 16);
            decoded += String.fromCharCode(decIndex);
        })
        return decoded;
    }
}

