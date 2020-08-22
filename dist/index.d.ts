/**
 * 读取10进制正整数
 * @param buffer
 * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节
 * @param len 所读整数占的长度，占位越长可能的值越大.
 * @param view 将多少字节视为一个单位，分别对应Uint8Array|Uint16Array|Uint32Array
 */
export declare const readInt: (buffer: ArrayBuffer, start: number, len: number, view?: 1 | 2 | 4) => number;
/**
 * 写入无符号10进制正整数
 * 会直接修改传入的arraybuffer
 * 请注意，如果写入长度大于一，将以大端在左的方式写入
 * @param buffer ArrayBuffer或bufferView，传入bufferView时view参数无效
 * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节
 * @param len 该整数所占长度
 * @param value 10进制正整数 最大可写入的整数为2^(8*view*len)-1
 * @param view 将多少字节视为一个单位，默认为Uint8Array，分别对应Uint8Array|Uint16Array|Uint32Array
 * @return ArrayBuffer 返回传入的arraybuffer引用
 */
export declare const writeInt: (buffer: ArrayBuffer | Uint16Array | Uint8Array, start: number, len: number, value: number, view?: 1 | 2 | 4) => ArrayBuffer;
export declare const writeHex: (target: ArrayBuffer, start: number, values: number[]) => ArrayBuffer;
export declare const utf16beToUTF16le: (utf16be: Uint8Array) => Uint8Array;
/**
 * 此方法会清除位于前面的字符顺序标记(只有utf16或传入Uint16Array才可能会有)
 * @param arrayBuffer ArrayBuffer或者view
 * @param encode 传入view时该项无效，ascii使用Uint8Array utf16使用Uint16Array
 * @param cleanZero 是否清除非结尾的0,结尾的0会被删除
 */
export declare const toString: (arrayBuffer: ArrayBuffer | Uint16Array | Uint8Array, encode?: 'ascii' | 'utf16le' | 'utf16be', cleanZero?: boolean) => string;
/**
 * 字符串转arrayBuffer
 * utf16编码时会添加字节顺序标记
 * js默认使用小端在前(utf16le)
 * @param str
 * @param encode
 * @param addBOM default false 添加fffe或feff的字节顺序控制符(只用utf16le/utf16be编码有效) 当str不为空字符串才有效
 * @param addEnd default false 添加0或00的结束控制字符
 * @param fixLen 固定输出的字节长度，长度不足时补0，超出时报错
 */
export declare const toArrayBuffer: (str: string, encode: 'ascii' | 'utf16le' | 'utf16be', addBOM?: boolean, addEnd?: boolean, fixLen?: number | undefined) => ArrayBuffer;
/**
 * 从指定地方开始截取到0x00或0x0000为止
 * 不会清除字节顺序标记
 * 返回的arraybuffer不包括最后的0x00 或0x0000
 * @param arrayBuffer
 * @param start
 * @param encode
 */
export declare const sliceToZero: (arrayBuffer: ArrayBuffer, start: number, encode: 'ascii' | 'utf16') => ArrayBuffer;
/**
 *
 * @param buffer NODEJS Buffer
 */
export declare const bufferToArrayBuffer: (buffer: any) => ArrayBuffer;
export declare const concat: (...args: ArrayBuffer[]) => ArrayBuffer;
