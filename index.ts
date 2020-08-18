const getView = function(buffer:ArrayBuffer,view:1|2|4){
  switch(view){
    case 1:
      return new Uint8Array(buffer)
    case 2:
      return new Uint16Array(buffer.slice(0,buffer.byteLength - (buffer.byteLength%2)))
    case 4:
      return new Uint32Array(buffer)
    default:
      throw new Error("param view error")
  }
}

/**
 * 读取10进制正整数  
 * @param buffer 
 * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节
 * @param len 所读整数占的长度，占位越长可能的值越大.
 * @param view 将多少字节视为一个单位，分别对应Uint8Array|Uint16Array|Uint32Array  
 */
export const readInt = function(buffer:ArrayBuffer,start:number,len:number,view:1|2|4 = 1):number{
  let bufferView:Uint8Array|Uint16Array|Uint32Array = getView(buffer,view)
  
  let result = 0
  for(let i=len - 1;i >= 0;i--){
    result += Math.pow(Math.pow(2,8*view),len - i - 1) * bufferView[start + i]
  }
  return result
}

/**
 * 写入无符号10进制正整数  
 * 请注意，如果写入长度大于一，将以大端在左的方式写入
 * @param buffer ArrayBuffer或bufferView，传入bufferView时view参数无效
 * @param start 从0开始,单位为view，比如view为4的时候，start为1表示从第5个字节(第33个二进制位)开始读取长度len*view个字节
 * @param len 该整数所占长度
 * @param value 10进制正整数 最大可写入的整数为2^(8*view*len)-1
 * @param view 将多少字节视为一个单位，默认为Uint8Array，分别对应Uint8Array|Uint16Array|Uint32Array
 */
export const writeInt = function(buffer:ArrayBuffer|Uint16Array|Uint8Array,start:number,len:number,value:number,view:1|2|4 = 1):void{
  let bufferView:Uint8Array|Uint16Array|Uint32Array
  if(buffer instanceof ArrayBuffer){
    bufferView = getView(buffer,view)
  }else{
    bufferView = buffer
  }
  if(value > (Math.pow(2,len*8*view) - 1)){
    throw new Error(`Cannot write Int greater than 2^${len*8}-1`)
  }
  if(bufferView.length < start + len){
    throw new Error(`Cannot write an Int of length ${len} at position ${start},because the input bufferView length is ${bufferView.length}`)
  }
  let i=0
  while(i<len){
    bufferView[start + i] = value/Math.pow(Math.pow(2,8*view),len - i - 1)
    i++
  }
}

export const utf16beToUTF16le = function(utf16be:Uint8Array):Uint8Array{
  const utf16le = new Uint8Array(utf16be.length)
  for(let i = 0;i<utf16be.length+2;i=i+2){
    utf16le[i] = utf16be[i+1]
    utf16le[i+1] = utf16be[i]
  }
  return utf16le
}

/**
 * 此方法会清除位于前面的字符顺序标记(只有utf16或传入Uint16Array才可能会有)
 * @param arrayBuffer ArrayBuffer或者view
 * @param encode 传入view时该项无效，ascii使用Uint8Array utf16使用Uint16Array
 * @param cleanZero 是否清除读取到的0
 */
export const toString = function(arrayBuffer:ArrayBuffer|Uint16Array|Uint8Array,encode:'ascii'|'utf16le'|'utf16be' = 'ascii',cleanZero:boolean = false):string{
  let dataString = "";
  let bufferView:Uint16Array|Uint8Array
  if(arrayBuffer instanceof ArrayBuffer){
    if(encode === 'ascii'){
      bufferView = <Uint8Array>getView(arrayBuffer,1)
    }else if(encode === 'utf16le'){
      bufferView = <Uint16Array>getView(arrayBuffer,2)
      if(bufferView[0] === 0xFFFE){
        bufferView = bufferView.slice(1)
      }
      // utf16 要去除前两个判断高地位顺序的字节
    }else if(encode === 'utf16be'){
      bufferView = utf16beToUTF16le(<Uint8Array>getView(arrayBuffer,1))
      bufferView = <Uint16Array>getView(bufferView.buffer,2)
      if(bufferView[0] === 0xFEFF){
        bufferView = bufferView.slice(1)
      }
    }else{
      throw new Error("unsupport encode: "+encode)
    }
  }else{
    bufferView = arrayBuffer
    if(bufferView instanceof Uint16Array && (bufferView[0] === 0xFFFE || bufferView[0] === 0xFEFF)){
      bufferView = bufferView.slice(1)
    }
  }
  for (let i = 0; i < bufferView.length; i++) {
    if(bufferView[i] === 0 && cleanZero){
      continue
    }
    dataString += String.fromCharCode(bufferView[i]);
  }
  return dataString
}

/**
 * 字符串转arrayBuffer  
 * utf16编码时会添加字节顺序标记  
 * js默认使用小端在前(utf16le)
 * @param str 
 * @param encode 
 */
export const toArrayBuffer = function(str:string,encode:'ascii'|'utf16le'|'utf16be'):ArrayBuffer{
  let bufferView
  if(encode === 'ascii'){
    bufferView = new Uint8Array(str.length)
    for(let i=0;i<str.length;i++){
      writeInt(bufferView,i,1,str.charCodeAt(i))
    }
  }else if(encode === 'utf16le'){
    // 小端在前
    bufferView = new Uint8Array(str.length*2+2)
    bufferView[0] = 0xFE
    bufferView[1] = 0xFF
    // 因为writeInt写入是大端在前，之后统一反转
    for(let i=0;i<str.length;i++){
      writeInt(bufferView,i*2+2,2,str.charCodeAt(i))
    }
    bufferView = utf16beToUTF16le(bufferView)
  }else if(encode === 'utf16be'){
    // 大端在前
    bufferView = new Uint8Array(str.length*2+2)
    bufferView[0] = 0xFE
    bufferView[1] = 0xFF
    // 因为之后需要le转换
    for(let i=0;i<str.length;i++){
      writeInt(bufferView,i*2+2,2,str.charCodeAt(i))
    }
  }else{
    throw new Error("unsupport encode: "+encode)
  }
  return bufferView.buffer
  
}

/**
 * 从指定地方开始读取字符串，直到遇到0x00 或0x0000为止  
 * 返回bufferView 不会清除字节顺序标记  
 * ASCII时返回Uint8Array utf16时返回Uint16Array
 * @param arrayBuffer 
 * @param start 
 * @param encode 
 */
export const readStringToZero = function(arrayBuffer:ArrayBuffer,start:number,encode:'ascii'|'utf16'):Uint16Array|Uint8Array{
  let bufferView:Uint16Array|Uint8Array
  if(encode === 'ascii'){
    bufferView = <Uint8Array>getView(arrayBuffer,1)
  }else if(encode === 'utf16'){
    bufferView = <Uint16Array>getView(arrayBuffer,2)
  }else{
    throw new Error('unsupport encode: '+encode)
  }
  for(let i=start;i<bufferView.length;i++){
    if(bufferView[i] === 0){
      return bufferView.slice(start,i)
    }
  }
  return bufferView.slice(start)
}

export const bufferToArrayBuffer = function(buffer:Buffer):ArrayBuffer {
  let arrayBuffer = new ArrayBuffer(buffer.length);
  let bufferView = new Uint8Array(arrayBuffer);
  for (let i = 0; i < buffer.length; ++i) {
    bufferView[i] = buffer[i];
  }
  return arrayBuffer;
}