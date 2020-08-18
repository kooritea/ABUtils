/// <reference types="node" />
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
 * 请注意，如果写入长度大于一，将以大端在左的方式写入
 * @param buffer ArrayBuffer或bufferView，传入bufferView时view参数无效
 * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节
 * @param len 该整数所占长度
 * @param value 10进制正整数 最大可写入的整数为2^(8*view*len)-1
 * @param view 将多少字节视为一个单位，默认为Uint8Array，分别对应Uint8Array|Uint16Array|Uint32Array
 */
export declare const writeInt: (buffer: ArrayBuffer | Uint16Array | Uint8Array, start: number, len: number, value: number, view?: 1 | 2 | 4) => void;
export declare const utf16beToUTF16le: (utf16be: Uint8Array) => Uint8Array;
/**
 * 此方法会清除位于前面的字符顺序标记(只有utf16或传入Uint16Array才可能会有)
 * @param arrayBuffer ArrayBuffer或者view
 * @param encode 传入view时该项无效，ascii使用Uint8Array utf16使用Uint16Array
 * @param cleanZero 是否清除读取到的0
 */
export declare const toString: (arrayBuffer: ArrayBuffer | Uint16Array | Uint8Array, encode?: 'ascii' | 'utf16le' | 'utf16be', cleanZero?: boolean) => string;
/**
 * 字符串转arrayBuffer
 * utf16编码时会添加字节顺序标记
 * js默认使用小端在前(utf16le)
 * @param str
 * @param encode
 */
export declare const toArrayBuffer: (str: string, encode: 'ascii' | 'utf16le' | 'utf16be') => ArrayBuffer;
/**
 * 从指定地方开始读取字符串，直到遇到0x00 或0x0000为止
 * 返回bufferView 不会清除字节顺序标记
 * ASCII时返回Uint8Array utf16时返回Uint16Array
 * @param arrayBuffer
 * @param start
 * @param encode
 */
export declare const readStringToZero: (arrayBuffer: ArrayBuffer, start: number, encode: 'ascii' | 'utf16') => Uint16Array | Uint8Array;
export declare const bufferToArrayBuffer: (buffer: Buffer) => ArrayBuffer;
