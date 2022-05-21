//最佳实践 一路interface

interface IPlus<T> {
  (a: T, b: T): T;
}

interface IWithLength {
  length: number;
}

type NameResolver=()=>string
type NameOrResolver=string|NameResolver

class Util {
  readonly name: string; //readonly修饰符
  version: string;

  //note : es2022 static block

  //generics
  static swap = function <T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
  };

  static getLength = function <T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg;
  };

  static plus: IPlus<number> = (a, b) => a + b;

  //type alias

 
  static getName =(n :NameOrResolver)=>{
      if (typeof n ==='function'){
          return n()
      }else{
          return n
      }
  }


  constructor(name: string, version: string) {
    this.name = name;
    this.version = version;
  }
}

export default Util;
