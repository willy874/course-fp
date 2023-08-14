interface CurryFunction2<A, B, R> {
  (a: A): (b: B) => R;
  (a: A, b: B): R;
}

interface CurryFunction3<A, B, C, R> {
  (a: A): CurryFunction2<B, C, R>;
  (a: A, b: B): (c: C) => R;
  (a: A, b: B, c: C): R;
}

interface CurryFunction4<A, B, C, D, R> {
  (a: A): CurryFunction3<B, C, D, R>;
  (a: A, b: B): CurryFunction2<C, D, R>;
  (a: A, b: B, c: C): (d: D) => R;
  (a: A, b: B, c: C, d: D): R;
}

type CurryFunction<F extends (a: any, b: any, c: any, d: any) => any> = Parameters<F>[0] extends void
  ? () => ReturnType<F>
  : Parameters<F>[1] extends void
  ? (a: Parameters<F>[0]) => ReturnType<F>
  : Parameters<F>[2] extends void
  ? CurryFunction2<Parameters<F>[0], Parameters<F>[1], ReturnType<F>>
  : Parameters<F>[3] extends void
  ? CurryFunction3<Parameters<F>[0], Parameters<F>[1], Parameters<F>[2], ReturnType<F>>
  : Parameters<F>[4] extends void
  ? CurryFunction4<Parameters<F>[0], Parameters<F>[1], Parameters<F>[2], Parameters<F>[3], ReturnType<F>>
  : F

function fp<F extends (a: any, b: any, c: any, d: any) => any>(this: ThisType<F> | any, fn: F): CurryFunction<F> {
  const [a, b, c, d] = arguments
  if (typeof a !== 'undefined' && typeof b !== 'undefined' && typeof c !== 'undefined' && typeof d !== 'undefined') {
    return fn(a, b, c, d)
  }
  return (fp as any).bind(this, fn, a, b, c) as CurryFunction<F>
}

const add = function (a: boolean, b: number, c: string) {
  return Symbol(b + c + a);
}

const r1 = fp(add)
const r5 = fp(add)(true)(2, '3')
const r6 = fp(add)(true, 2)('3')
const r7 = fp(add)(true)(2)('3')
const r8 = fp(add)(true, 2, '3')
const r9 = fp(add)(true)(2)('3')
