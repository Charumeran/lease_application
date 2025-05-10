
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model EquipmentCategory
 * 
 */
export type EquipmentCategory = $Result.DefaultSelection<Prisma.$EquipmentCategoryPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model Lease
 * 
 */
export type Lease = $Result.DefaultSelection<Prisma.$LeasePayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentCategory`: Exposes CRUD operations for the **EquipmentCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentCategories
    * const equipmentCategories = await prisma.equipmentCategory.findMany()
    * ```
    */
  get equipmentCategory(): Prisma.EquipmentCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leases
    * const leases = await prisma.lease.findMany()
    * ```
    */
  get lease(): Prisma.LeaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Company: 'Company',
    EquipmentCategory: 'EquipmentCategory',
    Equipment: 'Equipment',
    Lease: 'Lease',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "company" | "equipmentCategory" | "equipment" | "lease" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      EquipmentCategory: {
        payload: Prisma.$EquipmentCategoryPayload<ExtArgs>
        fields: Prisma.EquipmentCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>
          }
          findFirst: {
            args: Prisma.EquipmentCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>
          }
          findMany: {
            args: Prisma.EquipmentCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>[]
          }
          create: {
            args: Prisma.EquipmentCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>
          }
          createMany: {
            args: Prisma.EquipmentCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>[]
          }
          delete: {
            args: Prisma.EquipmentCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>
          }
          update: {
            args: Prisma.EquipmentCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentCategoryPayload>
          }
          aggregate: {
            args: Prisma.EquipmentCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentCategory>
          }
          groupBy: {
            args: Prisma.EquipmentCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCategoryCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      Lease: {
        payload: Prisma.$LeasePayload<ExtArgs>
        fields: Prisma.LeaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findFirst: {
            args: Prisma.LeaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findMany: {
            args: Prisma.LeaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          create: {
            args: Prisma.LeaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          createMany: {
            args: Prisma.LeaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          delete: {
            args: Prisma.LeaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          update: {
            args: Prisma.LeaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          deleteMany: {
            args: Prisma.LeaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          upsert: {
            args: Prisma.LeaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          aggregate: {
            args: Prisma.LeaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLease>
          }
          groupBy: {
            args: Prisma.LeaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    company?: CompanyOmit
    equipmentCategory?: EquipmentCategoryOmit
    equipment?: EquipmentOmit
    lease?: LeaseOmit
    chatMessage?: ChatMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leasesAsLender: number
    leasesAsBorrower: number
    sentMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leasesAsLender?: boolean | UserCountOutputTypeCountLeasesAsLenderArgs
    leasesAsBorrower?: boolean | UserCountOutputTypeCountLeasesAsBorrowerArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeasesAsLenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeasesAsBorrowerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    equipments: number
    leasesAsLender: number
    leasesAsBorrower: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    equipments?: boolean | CompanyCountOutputTypeCountEquipmentsArgs
    leasesAsLender?: boolean | CompanyCountOutputTypeCountLeasesAsLenderArgs
    leasesAsBorrower?: boolean | CompanyCountOutputTypeCountLeasesAsBorrowerArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountLeasesAsLenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountLeasesAsBorrowerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Count Type EquipmentCategoryCountOutputType
   */

  export type EquipmentCategoryCountOutputType = {
    equipments: number
  }

  export type EquipmentCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | EquipmentCategoryCountOutputTypeCountEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCategoryCountOutputType without action
   */
  export type EquipmentCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategoryCountOutputType
     */
    select?: EquipmentCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCategoryCountOutputType without action
   */
  export type EquipmentCategoryCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    leases: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | EquipmentCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    phone: string | null
    role: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    phone: string | null
    role: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    phone: number
    role: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    phone?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    phone?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    phone?: true
    role?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    phone: string | null
    role: string
    companyId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leasesAsLender?: boolean | User$leasesAsLenderArgs<ExtArgs>
    leasesAsBorrower?: boolean | User$leasesAsBorrowerArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "phone" | "role" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leasesAsLender?: boolean | User$leasesAsLenderArgs<ExtArgs>
    leasesAsBorrower?: boolean | User$leasesAsBorrowerArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      leasesAsLender: Prisma.$LeasePayload<ExtArgs>[]
      leasesAsBorrower: Prisma.$LeasePayload<ExtArgs>[]
      sentMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      phone: string | null
      role: string
      companyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leasesAsLender<T extends User$leasesAsLenderArgs<ExtArgs> = {}>(args?: Subset<T, User$leasesAsLenderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leasesAsBorrower<T extends User$leasesAsBorrowerArgs<ExtArgs> = {}>(args?: Subset<T, User$leasesAsBorrowerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.leasesAsLender
   */
  export type User$leasesAsLenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * User.leasesAsBorrower
   */
  export type User$leasesAsBorrowerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    prefecture: string | null
    city: string | null
    zipCode: string | null
    phone: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    prefecture: string | null
    city: string | null
    zipCode: string | null
    phone: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    prefecture: number
    city: number
    zipCode: number
    phone: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    prefecture?: true
    city?: true
    zipCode?: true
    phone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    prefecture?: true
    city?: true
    zipCode?: true
    phone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    prefecture?: true
    city?: true
    zipCode?: true
    phone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode: string | null
    phone: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    prefecture?: boolean
    city?: boolean
    zipCode?: boolean
    phone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    equipments?: boolean | Company$equipmentsArgs<ExtArgs>
    leasesAsLender?: boolean | Company$leasesAsLenderArgs<ExtArgs>
    leasesAsBorrower?: boolean | Company$leasesAsBorrowerArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    prefecture?: boolean
    city?: boolean
    zipCode?: boolean
    phone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    prefecture?: boolean
    city?: boolean
    zipCode?: boolean
    phone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    prefecture?: boolean
    city?: boolean
    zipCode?: boolean
    phone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "prefecture" | "city" | "zipCode" | "phone" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    equipments?: boolean | Company$equipmentsArgs<ExtArgs>
    leasesAsLender?: boolean | Company$leasesAsLenderArgs<ExtArgs>
    leasesAsBorrower?: boolean | Company$leasesAsBorrowerArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
      leasesAsLender: Prisma.$LeasePayload<ExtArgs>[]
      leasesAsBorrower: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      prefecture: string
      city: string
      zipCode: string | null
      phone: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipments<T extends Company$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Company$equipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leasesAsLender<T extends Company$leasesAsLenderArgs<ExtArgs> = {}>(args?: Subset<T, Company$leasesAsLenderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leasesAsBorrower<T extends Company$leasesAsBorrowerArgs<ExtArgs> = {}>(args?: Subset<T, Company$leasesAsBorrowerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly prefecture: FieldRef<"Company", 'String'>
    readonly city: FieldRef<"Company", 'String'>
    readonly zipCode: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.equipments
   */
  export type Company$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Company.leasesAsLender
   */
  export type Company$leasesAsLenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Company.leasesAsBorrower
   */
  export type Company$leasesAsBorrowerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentCategory
   */

  export type AggregateEquipmentCategory = {
    _count: EquipmentCategoryCountAggregateOutputType | null
    _min: EquipmentCategoryMinAggregateOutputType | null
    _max: EquipmentCategoryMaxAggregateOutputType | null
  }

  export type EquipmentCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentCategory to aggregate.
     */
    where?: EquipmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentCategories to fetch.
     */
    orderBy?: EquipmentCategoryOrderByWithRelationInput | EquipmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentCategories
    **/
    _count?: true | EquipmentCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentCategoryMaxAggregateInputType
  }

  export type GetEquipmentCategoryAggregateType<T extends EquipmentCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentCategory[P]>
      : GetScalarType<T[P], AggregateEquipmentCategory[P]>
  }




  export type EquipmentCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentCategoryWhereInput
    orderBy?: EquipmentCategoryOrderByWithAggregationInput | EquipmentCategoryOrderByWithAggregationInput[]
    by: EquipmentCategoryScalarFieldEnum[] | EquipmentCategoryScalarFieldEnum
    having?: EquipmentCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCategoryCountAggregateInputType | true
    _min?: EquipmentCategoryMinAggregateInputType
    _max?: EquipmentCategoryMaxAggregateInputType
  }

  export type EquipmentCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: EquipmentCategoryCountAggregateOutputType | null
    _min: EquipmentCategoryMinAggregateOutputType | null
    _max: EquipmentCategoryMaxAggregateOutputType | null
  }

  type GetEquipmentCategoryGroupByPayload<T extends EquipmentCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentCategoryGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipments?: boolean | EquipmentCategory$equipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentCategory"]>

  export type EquipmentCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipmentCategory"]>

  export type EquipmentCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["equipmentCategory"]>

  export type EquipmentCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["equipmentCategory"]>
  export type EquipmentCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | EquipmentCategory$equipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipmentCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipmentCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentCategory"
    objects: {
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipmentCategory"]>
    composites: {}
  }

  type EquipmentCategoryGetPayload<S extends boolean | null | undefined | EquipmentCategoryDefaultArgs> = $Result.GetResult<Prisma.$EquipmentCategoryPayload, S>

  type EquipmentCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCategoryCountAggregateInputType | true
    }

  export interface EquipmentCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentCategory'], meta: { name: 'EquipmentCategory' } }
    /**
     * Find zero or one EquipmentCategory that matches the filter.
     * @param {EquipmentCategoryFindUniqueArgs} args - Arguments to find a EquipmentCategory
     * @example
     * // Get one EquipmentCategory
     * const equipmentCategory = await prisma.equipmentCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentCategoryFindUniqueArgs>(args: SelectSubset<T, EquipmentCategoryFindUniqueArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentCategoryFindUniqueOrThrowArgs} args - Arguments to find a EquipmentCategory
     * @example
     * // Get one EquipmentCategory
     * const equipmentCategory = await prisma.equipmentCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCategoryFindFirstArgs} args - Arguments to find a EquipmentCategory
     * @example
     * // Get one EquipmentCategory
     * const equipmentCategory = await prisma.equipmentCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentCategoryFindFirstArgs>(args?: SelectSubset<T, EquipmentCategoryFindFirstArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCategoryFindFirstOrThrowArgs} args - Arguments to find a EquipmentCategory
     * @example
     * // Get one EquipmentCategory
     * const equipmentCategory = await prisma.equipmentCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentCategories
     * const equipmentCategories = await prisma.equipmentCategory.findMany()
     * 
     * // Get first 10 EquipmentCategories
     * const equipmentCategories = await prisma.equipmentCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentCategoryWithIdOnly = await prisma.equipmentCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentCategoryFindManyArgs>(args?: SelectSubset<T, EquipmentCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentCategory.
     * @param {EquipmentCategoryCreateArgs} args - Arguments to create a EquipmentCategory.
     * @example
     * // Create one EquipmentCategory
     * const EquipmentCategory = await prisma.equipmentCategory.create({
     *   data: {
     *     // ... data to create a EquipmentCategory
     *   }
     * })
     * 
     */
    create<T extends EquipmentCategoryCreateArgs>(args: SelectSubset<T, EquipmentCategoryCreateArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentCategories.
     * @param {EquipmentCategoryCreateManyArgs} args - Arguments to create many EquipmentCategories.
     * @example
     * // Create many EquipmentCategories
     * const equipmentCategory = await prisma.equipmentCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCategoryCreateManyArgs>(args?: SelectSubset<T, EquipmentCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentCategories and returns the data saved in the database.
     * @param {EquipmentCategoryCreateManyAndReturnArgs} args - Arguments to create many EquipmentCategories.
     * @example
     * // Create many EquipmentCategories
     * const equipmentCategory = await prisma.equipmentCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentCategories and only return the `id`
     * const equipmentCategoryWithIdOnly = await prisma.equipmentCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentCategory.
     * @param {EquipmentCategoryDeleteArgs} args - Arguments to delete one EquipmentCategory.
     * @example
     * // Delete one EquipmentCategory
     * const EquipmentCategory = await prisma.equipmentCategory.delete({
     *   where: {
     *     // ... filter to delete one EquipmentCategory
     *   }
     * })
     * 
     */
    delete<T extends EquipmentCategoryDeleteArgs>(args: SelectSubset<T, EquipmentCategoryDeleteArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentCategory.
     * @param {EquipmentCategoryUpdateArgs} args - Arguments to update one EquipmentCategory.
     * @example
     * // Update one EquipmentCategory
     * const equipmentCategory = await prisma.equipmentCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentCategoryUpdateArgs>(args: SelectSubset<T, EquipmentCategoryUpdateArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentCategories.
     * @param {EquipmentCategoryDeleteManyArgs} args - Arguments to filter EquipmentCategories to delete.
     * @example
     * // Delete a few EquipmentCategories
     * const { count } = await prisma.equipmentCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentCategoryDeleteManyArgs>(args?: SelectSubset<T, EquipmentCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentCategories
     * const equipmentCategory = await prisma.equipmentCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentCategoryUpdateManyArgs>(args: SelectSubset<T, EquipmentCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentCategories and returns the data updated in the database.
     * @param {EquipmentCategoryUpdateManyAndReturnArgs} args - Arguments to update many EquipmentCategories.
     * @example
     * // Update many EquipmentCategories
     * const equipmentCategory = await prisma.equipmentCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentCategories and only return the `id`
     * const equipmentCategoryWithIdOnly = await prisma.equipmentCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentCategory.
     * @param {EquipmentCategoryUpsertArgs} args - Arguments to update or create a EquipmentCategory.
     * @example
     * // Update or create a EquipmentCategory
     * const equipmentCategory = await prisma.equipmentCategory.upsert({
     *   create: {
     *     // ... data to create a EquipmentCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentCategory we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentCategoryUpsertArgs>(args: SelectSubset<T, EquipmentCategoryUpsertArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCategoryCountArgs} args - Arguments to filter EquipmentCategories to count.
     * @example
     * // Count the number of EquipmentCategories
     * const count = await prisma.equipmentCategory.count({
     *   where: {
     *     // ... the filter for the EquipmentCategories we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCategoryCountArgs>(
      args?: Subset<T, EquipmentCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentCategoryAggregateArgs>(args: Subset<T, EquipmentCategoryAggregateArgs>): Prisma.PrismaPromise<GetEquipmentCategoryAggregateType<T>>

    /**
     * Group by EquipmentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentCategoryGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentCategory model
   */
  readonly fields: EquipmentCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipments<T extends EquipmentCategory$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentCategory$equipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentCategory model
   */
  interface EquipmentCategoryFieldRefs {
    readonly id: FieldRef<"EquipmentCategory", 'String'>
    readonly name: FieldRef<"EquipmentCategory", 'String'>
    readonly description: FieldRef<"EquipmentCategory", 'String'>
    readonly createdAt: FieldRef<"EquipmentCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"EquipmentCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentCategory findUnique
   */
  export type EquipmentCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentCategory to fetch.
     */
    where: EquipmentCategoryWhereUniqueInput
  }

  /**
   * EquipmentCategory findUniqueOrThrow
   */
  export type EquipmentCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentCategory to fetch.
     */
    where: EquipmentCategoryWhereUniqueInput
  }

  /**
   * EquipmentCategory findFirst
   */
  export type EquipmentCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentCategory to fetch.
     */
    where?: EquipmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentCategories to fetch.
     */
    orderBy?: EquipmentCategoryOrderByWithRelationInput | EquipmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentCategories.
     */
    cursor?: EquipmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentCategories.
     */
    distinct?: EquipmentCategoryScalarFieldEnum | EquipmentCategoryScalarFieldEnum[]
  }

  /**
   * EquipmentCategory findFirstOrThrow
   */
  export type EquipmentCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentCategory to fetch.
     */
    where?: EquipmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentCategories to fetch.
     */
    orderBy?: EquipmentCategoryOrderByWithRelationInput | EquipmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentCategories.
     */
    cursor?: EquipmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentCategories.
     */
    distinct?: EquipmentCategoryScalarFieldEnum | EquipmentCategoryScalarFieldEnum[]
  }

  /**
   * EquipmentCategory findMany
   */
  export type EquipmentCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentCategories to fetch.
     */
    where?: EquipmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentCategories to fetch.
     */
    orderBy?: EquipmentCategoryOrderByWithRelationInput | EquipmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentCategories.
     */
    cursor?: EquipmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentCategories.
     */
    skip?: number
    distinct?: EquipmentCategoryScalarFieldEnum | EquipmentCategoryScalarFieldEnum[]
  }

  /**
   * EquipmentCategory create
   */
  export type EquipmentCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentCategory.
     */
    data: XOR<EquipmentCategoryCreateInput, EquipmentCategoryUncheckedCreateInput>
  }

  /**
   * EquipmentCategory createMany
   */
  export type EquipmentCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentCategories.
     */
    data: EquipmentCategoryCreateManyInput | EquipmentCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentCategory createManyAndReturn
   */
  export type EquipmentCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentCategories.
     */
    data: EquipmentCategoryCreateManyInput | EquipmentCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentCategory update
   */
  export type EquipmentCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentCategory.
     */
    data: XOR<EquipmentCategoryUpdateInput, EquipmentCategoryUncheckedUpdateInput>
    /**
     * Choose, which EquipmentCategory to update.
     */
    where: EquipmentCategoryWhereUniqueInput
  }

  /**
   * EquipmentCategory updateMany
   */
  export type EquipmentCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentCategories.
     */
    data: XOR<EquipmentCategoryUpdateManyMutationInput, EquipmentCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentCategories to update
     */
    where?: EquipmentCategoryWhereInput
    /**
     * Limit how many EquipmentCategories to update.
     */
    limit?: number
  }

  /**
   * EquipmentCategory updateManyAndReturn
   */
  export type EquipmentCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentCategories.
     */
    data: XOR<EquipmentCategoryUpdateManyMutationInput, EquipmentCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentCategories to update
     */
    where?: EquipmentCategoryWhereInput
    /**
     * Limit how many EquipmentCategories to update.
     */
    limit?: number
  }

  /**
   * EquipmentCategory upsert
   */
  export type EquipmentCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentCategory to update in case it exists.
     */
    where: EquipmentCategoryWhereUniqueInput
    /**
     * In case the EquipmentCategory found by the `where` argument doesn't exist, create a new EquipmentCategory with this data.
     */
    create: XOR<EquipmentCategoryCreateInput, EquipmentCategoryUncheckedCreateInput>
    /**
     * In case the EquipmentCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentCategoryUpdateInput, EquipmentCategoryUncheckedUpdateInput>
  }

  /**
   * EquipmentCategory delete
   */
  export type EquipmentCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
    /**
     * Filter which EquipmentCategory to delete.
     */
    where: EquipmentCategoryWhereUniqueInput
  }

  /**
   * EquipmentCategory deleteMany
   */
  export type EquipmentCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentCategories to delete
     */
    where?: EquipmentCategoryWhereInput
    /**
     * Limit how many EquipmentCategories to delete.
     */
    limit?: number
  }

  /**
   * EquipmentCategory.equipments
   */
  export type EquipmentCategory$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * EquipmentCategory without action
   */
  export type EquipmentCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCategory
     */
    select?: EquipmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentCategory
     */
    omit?: EquipmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    quantity: number | null
    available: number | null
    daily_rate: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    quantity: number | null
    available: number | null
    daily_rate: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    quantity: number | null
    available: number | null
    daily_rate: number | null
    categoryId: string | null
    companyId: string | null
    image: string | null
    location: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    quantity: number | null
    available: number | null
    daily_rate: number | null
    categoryId: string | null
    companyId: string | null
    image: string | null
    location: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    quantity: number
    available: number
    daily_rate: number
    categoryId: number
    companyId: number
    image: number
    location: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    quantity?: true
    available?: true
    daily_rate?: true
  }

  export type EquipmentSumAggregateInputType = {
    quantity?: true
    available?: true
    daily_rate?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    available?: true
    daily_rate?: true
    categoryId?: true
    companyId?: true
    image?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    available?: true
    daily_rate?: true
    categoryId?: true
    companyId?: true
    image?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    quantity?: true
    available?: true
    daily_rate?: true
    categoryId?: true
    companyId?: true
    image?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    quantity: number
    available: number
    daily_rate: number | null
    categoryId: string
    companyId: string
    image: string | null
    location: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    available?: boolean
    daily_rate?: boolean
    categoryId?: boolean
    companyId?: boolean
    image?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | EquipmentCategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leases?: boolean | Equipment$leasesArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    available?: boolean
    daily_rate?: boolean
    categoryId?: boolean
    companyId?: boolean
    image?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | EquipmentCategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    available?: boolean
    daily_rate?: boolean
    categoryId?: boolean
    companyId?: boolean
    image?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | EquipmentCategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    available?: boolean
    daily_rate?: boolean
    categoryId?: boolean
    companyId?: boolean
    image?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "quantity" | "available" | "daily_rate" | "categoryId" | "companyId" | "image" | "location" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | EquipmentCategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leases?: boolean | Equipment$leasesArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | EquipmentCategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | EquipmentCategoryDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      category: Prisma.$EquipmentCategoryPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      leases: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      quantity: number
      available: number
      daily_rate: number | null
      categoryId: string
      companyId: string
      image: string | null
      location: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends EquipmentCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentCategoryDefaultArgs<ExtArgs>>): Prisma__EquipmentCategoryClient<$Result.GetResult<Prisma.$EquipmentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leases<T extends Equipment$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly description: FieldRef<"Equipment", 'String'>
    readonly quantity: FieldRef<"Equipment", 'Int'>
    readonly available: FieldRef<"Equipment", 'Int'>
    readonly daily_rate: FieldRef<"Equipment", 'Float'>
    readonly categoryId: FieldRef<"Equipment", 'String'>
    readonly companyId: FieldRef<"Equipment", 'String'>
    readonly image: FieldRef<"Equipment", 'String'>
    readonly location: FieldRef<"Equipment", 'String'>
    readonly status: FieldRef<"Equipment", 'String'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.leases
   */
  export type Equipment$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model Lease
   */

  export type AggregateLease = {
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  export type LeaseAvgAggregateOutputType = {
    quantity: number | null
    totalPrice: number | null
  }

  export type LeaseSumAggregateOutputType = {
    quantity: number | null
    totalPrice: number | null
  }

  export type LeaseMinAggregateOutputType = {
    id: string | null
    equipmentId: string | null
    quantity: number | null
    lenderCompanyId: string | null
    lenderUserId: string | null
    borrowerCompanyId: string | null
    borrowerUserId: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    notes: string | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseMaxAggregateOutputType = {
    id: string | null
    equipmentId: string | null
    quantity: number | null
    lenderCompanyId: string | null
    lenderUserId: string | null
    borrowerCompanyId: string | null
    borrowerUserId: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    notes: string | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaseCountAggregateOutputType = {
    id: number
    equipmentId: number
    quantity: number
    lenderCompanyId: number
    lenderUserId: number
    borrowerCompanyId: number
    borrowerUserId: number
    startDate: number
    endDate: number
    status: number
    notes: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaseAvgAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type LeaseSumAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type LeaseMinAggregateInputType = {
    id?: true
    equipmentId?: true
    quantity?: true
    lenderCompanyId?: true
    lenderUserId?: true
    borrowerCompanyId?: true
    borrowerUserId?: true
    startDate?: true
    endDate?: true
    status?: true
    notes?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseMaxAggregateInputType = {
    id?: true
    equipmentId?: true
    quantity?: true
    lenderCompanyId?: true
    lenderUserId?: true
    borrowerCompanyId?: true
    borrowerUserId?: true
    startDate?: true
    endDate?: true
    status?: true
    notes?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaseCountAggregateInputType = {
    id?: true
    equipmentId?: true
    quantity?: true
    lenderCompanyId?: true
    lenderUserId?: true
    borrowerCompanyId?: true
    borrowerUserId?: true
    startDate?: true
    endDate?: true
    status?: true
    notes?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lease to aggregate.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leases
    **/
    _count?: true | LeaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseMaxAggregateInputType
  }

  export type GetLeaseAggregateType<T extends LeaseAggregateArgs> = {
        [P in keyof T & keyof AggregateLease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLease[P]>
      : GetScalarType<T[P], AggregateLease[P]>
  }




  export type LeaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithAggregationInput | LeaseOrderByWithAggregationInput[]
    by: LeaseScalarFieldEnum[] | LeaseScalarFieldEnum
    having?: LeaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseCountAggregateInputType | true
    _avg?: LeaseAvgAggregateInputType
    _sum?: LeaseSumAggregateInputType
    _min?: LeaseMinAggregateInputType
    _max?: LeaseMaxAggregateInputType
  }

  export type LeaseGroupByOutputType = {
    id: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date
    endDate: Date
    status: string
    notes: string | null
    totalPrice: number | null
    createdAt: Date
    updatedAt: Date
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  type GetLeaseGroupByPayload<T extends LeaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseGroupByOutputType[P]>
        }
      >
    >


  export type LeaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    quantity?: boolean
    lenderCompanyId?: boolean
    lenderUserId?: boolean
    borrowerCompanyId?: boolean
    borrowerUserId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    notes?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    lenderCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    lenderUser?: boolean | UserDefaultArgs<ExtArgs>
    borrowerCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    borrowerUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    quantity?: boolean
    lenderCompanyId?: boolean
    lenderUserId?: boolean
    borrowerCompanyId?: boolean
    borrowerUserId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    notes?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    lenderCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    lenderUser?: boolean | UserDefaultArgs<ExtArgs>
    borrowerCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    borrowerUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    quantity?: boolean
    lenderCompanyId?: boolean
    lenderUserId?: boolean
    borrowerCompanyId?: boolean
    borrowerUserId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    notes?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    lenderCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    lenderUser?: boolean | UserDefaultArgs<ExtArgs>
    borrowerCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    borrowerUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectScalar = {
    id?: boolean
    equipmentId?: boolean
    quantity?: boolean
    lenderCompanyId?: boolean
    lenderUserId?: boolean
    borrowerCompanyId?: boolean
    borrowerUserId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    notes?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "equipmentId" | "quantity" | "lenderCompanyId" | "lenderUserId" | "borrowerCompanyId" | "borrowerUserId" | "startDate" | "endDate" | "status" | "notes" | "totalPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["lease"]>
  export type LeaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    lenderCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    lenderUser?: boolean | UserDefaultArgs<ExtArgs>
    borrowerCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    borrowerUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    lenderCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    lenderUser?: boolean | UserDefaultArgs<ExtArgs>
    borrowerCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    borrowerUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    lenderCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    lenderUser?: boolean | UserDefaultArgs<ExtArgs>
    borrowerCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    borrowerUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lease"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>
      lenderCompany: Prisma.$CompanyPayload<ExtArgs>
      lenderUser: Prisma.$UserPayload<ExtArgs>
      borrowerCompany: Prisma.$CompanyPayload<ExtArgs>
      borrowerUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      equipmentId: string
      quantity: number
      lenderCompanyId: string
      lenderUserId: string
      borrowerCompanyId: string
      borrowerUserId: string
      startDate: Date
      endDate: Date
      status: string
      notes: string | null
      totalPrice: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lease"]>
    composites: {}
  }

  type LeaseGetPayload<S extends boolean | null | undefined | LeaseDefaultArgs> = $Result.GetResult<Prisma.$LeasePayload, S>

  type LeaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseCountAggregateInputType | true
    }

  export interface LeaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lease'], meta: { name: 'Lease' } }
    /**
     * Find zero or one Lease that matches the filter.
     * @param {LeaseFindUniqueArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFindUniqueArgs>(args: SelectSubset<T, LeaseFindUniqueArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFindUniqueOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFindFirstArgs>(args?: SelectSubset<T, LeaseFindFirstArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leases
     * const leases = await prisma.lease.findMany()
     * 
     * // Get first 10 Leases
     * const leases = await prisma.lease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseWithIdOnly = await prisma.lease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFindManyArgs>(args?: SelectSubset<T, LeaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lease.
     * @param {LeaseCreateArgs} args - Arguments to create a Lease.
     * @example
     * // Create one Lease
     * const Lease = await prisma.lease.create({
     *   data: {
     *     // ... data to create a Lease
     *   }
     * })
     * 
     */
    create<T extends LeaseCreateArgs>(args: SelectSubset<T, LeaseCreateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leases.
     * @param {LeaseCreateManyArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseCreateManyArgs>(args?: SelectSubset<T, LeaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leases and returns the data saved in the database.
     * @param {LeaseCreateManyAndReturnArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaseCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lease.
     * @param {LeaseDeleteArgs} args - Arguments to delete one Lease.
     * @example
     * // Delete one Lease
     * const Lease = await prisma.lease.delete({
     *   where: {
     *     // ... filter to delete one Lease
     *   }
     * })
     * 
     */
    delete<T extends LeaseDeleteArgs>(args: SelectSubset<T, LeaseDeleteArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lease.
     * @param {LeaseUpdateArgs} args - Arguments to update one Lease.
     * @example
     * // Update one Lease
     * const lease = await prisma.lease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseUpdateArgs>(args: SelectSubset<T, LeaseUpdateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leases.
     * @param {LeaseDeleteManyArgs} args - Arguments to filter Leases to delete.
     * @example
     * // Delete a few Leases
     * const { count } = await prisma.lease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseDeleteManyArgs>(args?: SelectSubset<T, LeaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseUpdateManyArgs>(args: SelectSubset<T, LeaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases and returns the data updated in the database.
     * @param {LeaseUpdateManyAndReturnArgs} args - Arguments to update many Leases.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaseUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lease.
     * @param {LeaseUpsertArgs} args - Arguments to update or create a Lease.
     * @example
     * // Update or create a Lease
     * const lease = await prisma.lease.upsert({
     *   create: {
     *     // ... data to create a Lease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lease we want to update
     *   }
     * })
     */
    upsert<T extends LeaseUpsertArgs>(args: SelectSubset<T, LeaseUpsertArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseCountArgs} args - Arguments to filter Leases to count.
     * @example
     * // Count the number of Leases
     * const count = await prisma.lease.count({
     *   where: {
     *     // ... the filter for the Leases we want to count
     *   }
     * })
    **/
    count<T extends LeaseCountArgs>(
      args?: Subset<T, LeaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaseAggregateArgs>(args: Subset<T, LeaseAggregateArgs>): Prisma.PrismaPromise<GetLeaseAggregateType<T>>

    /**
     * Group by Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseGroupByArgs['orderBy'] }
        : { orderBy?: LeaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lease model
   */
  readonly fields: LeaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lenderCompany<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lenderUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    borrowerCompany<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    borrowerUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lease model
   */
  interface LeaseFieldRefs {
    readonly id: FieldRef<"Lease", 'String'>
    readonly equipmentId: FieldRef<"Lease", 'String'>
    readonly quantity: FieldRef<"Lease", 'Int'>
    readonly lenderCompanyId: FieldRef<"Lease", 'String'>
    readonly lenderUserId: FieldRef<"Lease", 'String'>
    readonly borrowerCompanyId: FieldRef<"Lease", 'String'>
    readonly borrowerUserId: FieldRef<"Lease", 'String'>
    readonly startDate: FieldRef<"Lease", 'DateTime'>
    readonly endDate: FieldRef<"Lease", 'DateTime'>
    readonly status: FieldRef<"Lease", 'String'>
    readonly notes: FieldRef<"Lease", 'String'>
    readonly totalPrice: FieldRef<"Lease", 'Float'>
    readonly createdAt: FieldRef<"Lease", 'DateTime'>
    readonly updatedAt: FieldRef<"Lease", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lease findUnique
   */
  export type LeaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findUniqueOrThrow
   */
  export type LeaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findFirst
   */
  export type LeaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findFirstOrThrow
   */
  export type LeaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findMany
   */
  export type LeaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Leases to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease create
   */
  export type LeaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Lease.
     */
    data: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
  }

  /**
   * Lease createMany
   */
  export type LeaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lease createManyAndReturn
   */
  export type LeaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease update
   */
  export type LeaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Lease.
     */
    data: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
    /**
     * Choose, which Lease to update.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease updateMany
   */
  export type LeaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
  }

  /**
   * Lease updateManyAndReturn
   */
  export type LeaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease upsert
   */
  export type LeaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Lease to update in case it exists.
     */
    where: LeaseWhereUniqueInput
    /**
     * In case the Lease found by the `where` argument doesn't exist, create a new Lease with this data.
     */
    create: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
    /**
     * In case the Lease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
  }

  /**
   * Lease delete
   */
  export type LeaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter which Lease to delete.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease deleteMany
   */
  export type LeaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leases to delete
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to delete.
     */
    limit?: number
  }

  /**
   * Lease without action
   */
  export type LeaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    content: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    content: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    content: number
    read: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    content?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    content: string
    read: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    content?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "content" | "read" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      content: string
      read: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly receiverId: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly read: FieldRef<"ChatMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    phone: 'phone',
    role: 'role',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    prefecture: 'prefecture',
    city: 'city',
    zipCode: 'zipCode',
    phone: 'phone',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const EquipmentCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentCategoryScalarFieldEnum = (typeof EquipmentCategoryScalarFieldEnum)[keyof typeof EquipmentCategoryScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    available: 'available',
    daily_rate: 'daily_rate',
    categoryId: 'categoryId',
    companyId: 'companyId',
    image: 'image',
    location: 'location',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const LeaseScalarFieldEnum: {
    id: 'id',
    equipmentId: 'equipmentId',
    quantity: 'quantity',
    lenderCompanyId: 'lenderCompanyId',
    lenderUserId: 'lenderUserId',
    borrowerCompanyId: 'borrowerCompanyId',
    borrowerUserId: 'borrowerUserId',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    notes: 'notes',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaseScalarFieldEnum = (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    content: 'content',
    read: 'read',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    companyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    leasesAsLender?: LeaseListRelationFilter
    leasesAsBorrower?: LeaseListRelationFilter
    sentMessages?: ChatMessageListRelationFilter
    receivedMessages?: ChatMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    leasesAsLender?: LeaseOrderByRelationAggregateInput
    leasesAsBorrower?: LeaseOrderByRelationAggregateInput
    sentMessages?: ChatMessageOrderByRelationAggregateInput
    receivedMessages?: ChatMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    companyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    leasesAsLender?: LeaseListRelationFilter
    leasesAsBorrower?: LeaseListRelationFilter
    sentMessages?: ChatMessageListRelationFilter
    receivedMessages?: ChatMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    companyId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    prefecture?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    zipCode?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    equipments?: EquipmentListRelationFilter
    leasesAsLender?: LeaseListRelationFilter
    leasesAsBorrower?: LeaseListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    equipments?: EquipmentOrderByRelationAggregateInput
    leasesAsLender?: LeaseOrderByRelationAggregateInput
    leasesAsBorrower?: LeaseOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    prefecture?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    zipCode?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    equipments?: EquipmentListRelationFilter
    leasesAsLender?: LeaseListRelationFilter
    leasesAsBorrower?: LeaseListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    address?: StringWithAggregatesFilter<"Company"> | string
    prefecture?: StringWithAggregatesFilter<"Company"> | string
    city?: StringWithAggregatesFilter<"Company"> | string
    zipCode?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type EquipmentCategoryWhereInput = {
    AND?: EquipmentCategoryWhereInput | EquipmentCategoryWhereInput[]
    OR?: EquipmentCategoryWhereInput[]
    NOT?: EquipmentCategoryWhereInput | EquipmentCategoryWhereInput[]
    id?: StringFilter<"EquipmentCategory"> | string
    name?: StringFilter<"EquipmentCategory"> | string
    description?: StringNullableFilter<"EquipmentCategory"> | string | null
    createdAt?: DateTimeFilter<"EquipmentCategory"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentCategory"> | Date | string
    equipments?: EquipmentListRelationFilter
  }

  export type EquipmentCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipments?: EquipmentOrderByRelationAggregateInput
  }

  export type EquipmentCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: EquipmentCategoryWhereInput | EquipmentCategoryWhereInput[]
    OR?: EquipmentCategoryWhereInput[]
    NOT?: EquipmentCategoryWhereInput | EquipmentCategoryWhereInput[]
    description?: StringNullableFilter<"EquipmentCategory"> | string | null
    createdAt?: DateTimeFilter<"EquipmentCategory"> | Date | string
    updatedAt?: DateTimeFilter<"EquipmentCategory"> | Date | string
    equipments?: EquipmentListRelationFilter
  }, "id" | "name">

  export type EquipmentCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentCategoryCountOrderByAggregateInput
    _max?: EquipmentCategoryMaxOrderByAggregateInput
    _min?: EquipmentCategoryMinOrderByAggregateInput
  }

  export type EquipmentCategoryScalarWhereWithAggregatesInput = {
    AND?: EquipmentCategoryScalarWhereWithAggregatesInput | EquipmentCategoryScalarWhereWithAggregatesInput[]
    OR?: EquipmentCategoryScalarWhereWithAggregatesInput[]
    NOT?: EquipmentCategoryScalarWhereWithAggregatesInput | EquipmentCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EquipmentCategory"> | string
    name?: StringWithAggregatesFilter<"EquipmentCategory"> | string
    description?: StringNullableWithAggregatesFilter<"EquipmentCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EquipmentCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EquipmentCategory"> | Date | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    name?: StringFilter<"Equipment"> | string
    description?: StringNullableFilter<"Equipment"> | string | null
    quantity?: IntFilter<"Equipment"> | number
    available?: IntFilter<"Equipment"> | number
    daily_rate?: FloatNullableFilter<"Equipment"> | number | null
    categoryId?: StringFilter<"Equipment"> | string
    companyId?: StringFilter<"Equipment"> | string
    image?: StringNullableFilter<"Equipment"> | string | null
    location?: StringNullableFilter<"Equipment"> | string | null
    status?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    category?: XOR<EquipmentCategoryScalarRelationFilter, EquipmentCategoryWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    leases?: LeaseListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    available?: SortOrder
    daily_rate?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    image?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: EquipmentCategoryOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    leases?: LeaseOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    description?: StringNullableFilter<"Equipment"> | string | null
    quantity?: IntFilter<"Equipment"> | number
    available?: IntFilter<"Equipment"> | number
    daily_rate?: FloatNullableFilter<"Equipment"> | number | null
    categoryId?: StringFilter<"Equipment"> | string
    companyId?: StringFilter<"Equipment"> | string
    image?: StringNullableFilter<"Equipment"> | string | null
    location?: StringNullableFilter<"Equipment"> | string | null
    status?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    category?: XOR<EquipmentCategoryScalarRelationFilter, EquipmentCategoryWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    leases?: LeaseListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    available?: SortOrder
    daily_rate?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    image?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    name?: StringWithAggregatesFilter<"Equipment"> | string
    description?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    quantity?: IntWithAggregatesFilter<"Equipment"> | number
    available?: IntWithAggregatesFilter<"Equipment"> | number
    daily_rate?: FloatNullableWithAggregatesFilter<"Equipment"> | number | null
    categoryId?: StringWithAggregatesFilter<"Equipment"> | string
    companyId?: StringWithAggregatesFilter<"Equipment"> | string
    image?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    location?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    status?: StringWithAggregatesFilter<"Equipment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type LeaseWhereInput = {
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    id?: StringFilter<"Lease"> | string
    equipmentId?: StringFilter<"Lease"> | string
    quantity?: IntFilter<"Lease"> | number
    lenderCompanyId?: StringFilter<"Lease"> | string
    lenderUserId?: StringFilter<"Lease"> | string
    borrowerCompanyId?: StringFilter<"Lease"> | string
    borrowerUserId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    status?: StringFilter<"Lease"> | string
    notes?: StringNullableFilter<"Lease"> | string | null
    totalPrice?: FloatNullableFilter<"Lease"> | number | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    lenderCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    lenderUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    borrowerCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    borrowerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeaseOrderByWithRelationInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    quantity?: SortOrder
    lenderCompanyId?: SortOrder
    lenderUserId?: SortOrder
    borrowerCompanyId?: SortOrder
    borrowerUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    lenderCompany?: CompanyOrderByWithRelationInput
    lenderUser?: UserOrderByWithRelationInput
    borrowerCompany?: CompanyOrderByWithRelationInput
    borrowerUser?: UserOrderByWithRelationInput
  }

  export type LeaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    equipmentId?: StringFilter<"Lease"> | string
    quantity?: IntFilter<"Lease"> | number
    lenderCompanyId?: StringFilter<"Lease"> | string
    lenderUserId?: StringFilter<"Lease"> | string
    borrowerCompanyId?: StringFilter<"Lease"> | string
    borrowerUserId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    status?: StringFilter<"Lease"> | string
    notes?: StringNullableFilter<"Lease"> | string | null
    totalPrice?: FloatNullableFilter<"Lease"> | number | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    lenderCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    lenderUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    borrowerCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    borrowerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LeaseOrderByWithAggregationInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    quantity?: SortOrder
    lenderCompanyId?: SortOrder
    lenderUserId?: SortOrder
    borrowerCompanyId?: SortOrder
    borrowerUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaseCountOrderByAggregateInput
    _avg?: LeaseAvgOrderByAggregateInput
    _max?: LeaseMaxOrderByAggregateInput
    _min?: LeaseMinOrderByAggregateInput
    _sum?: LeaseSumOrderByAggregateInput
  }

  export type LeaseScalarWhereWithAggregatesInput = {
    AND?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    OR?: LeaseScalarWhereWithAggregatesInput[]
    NOT?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lease"> | string
    equipmentId?: StringWithAggregatesFilter<"Lease"> | string
    quantity?: IntWithAggregatesFilter<"Lease"> | number
    lenderCompanyId?: StringWithAggregatesFilter<"Lease"> | string
    lenderUserId?: StringWithAggregatesFilter<"Lease"> | string
    borrowerCompanyId?: StringWithAggregatesFilter<"Lease"> | string
    borrowerUserId?: StringWithAggregatesFilter<"Lease"> | string
    startDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    status?: StringWithAggregatesFilter<"Lease"> | string
    notes?: StringNullableWithAggregatesFilter<"Lease"> | string | null
    totalPrice?: FloatNullableWithAggregatesFilter<"Lease"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    receiverId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    read?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    senderId?: StringFilter<"ChatMessage"> | string
    receiverId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    read?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string
    receiverId?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    read?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderUserInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderUserInput
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    leasesAsLender?: LeaseUpdateManyWithoutLenderUserNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderUserNestedInput
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    equipments?: EquipmentCreateNestedManyWithoutCompanyInput
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderCompanyInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    equipments?: EquipmentUncheckedCreateNestedManyWithoutCompanyInput
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderCompanyInput
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    equipments?: EquipmentUpdateManyWithoutCompanyNestedInput
    leasesAsLender?: LeaseUpdateManyWithoutLenderCompanyNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    equipments?: EquipmentUncheckedUpdateManyWithoutCompanyNestedInput
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderCompanyNestedInput
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipments?: EquipmentCreateNestedManyWithoutCategoryInput
  }

  export type EquipmentCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipments?: EquipmentUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type EquipmentCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipments?: EquipmentUpdateManyWithoutCategoryNestedInput
  }

  export type EquipmentCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipments?: EquipmentUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type EquipmentCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: EquipmentCategoryCreateNestedOneWithoutEquipmentsInput
    company: CompanyCreateNestedOneWithoutEquipmentsInput
    leases?: LeaseCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    categoryId: string
    companyId: string
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EquipmentCategoryUpdateOneRequiredWithoutEquipmentsNestedInput
    company?: CompanyUpdateOneRequiredWithoutEquipmentsNestedInput
    leases?: LeaseUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    categoryId: string
    companyId: string
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateInput = {
    id?: string
    quantity: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutLeasesInput
    lenderCompany: CompanyCreateNestedOneWithoutLeasesAsLenderInput
    lenderUser: UserCreateNestedOneWithoutLeasesAsLenderInput
    borrowerCompany: CompanyCreateNestedOneWithoutLeasesAsBorrowerInput
    borrowerUser: UserCreateNestedOneWithoutLeasesAsBorrowerInput
  }

  export type LeaseUncheckedCreateInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutLeasesNestedInput
    lenderCompany?: CompanyUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    lenderUser?: UserUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    borrowerCompany?: CompanyUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
    borrowerUser?: UserUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
  }

  export type LeaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateManyInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type LeaseListRelationFilter = {
    every?: LeaseWhereInput
    some?: LeaseWhereInput
    none?: LeaseWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    prefecture?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EquipmentCategoryScalarRelationFilter = {
    is?: EquipmentCategoryWhereInput
    isNot?: EquipmentCategoryWhereInput
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    available?: SortOrder
    daily_rate?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    image?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    quantity?: SortOrder
    available?: SortOrder
    daily_rate?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    available?: SortOrder
    daily_rate?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    image?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    available?: SortOrder
    daily_rate?: SortOrder
    categoryId?: SortOrder
    companyId?: SortOrder
    image?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    quantity?: SortOrder
    available?: SortOrder
    daily_rate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EquipmentScalarRelationFilter = {
    is?: EquipmentWhereInput
    isNot?: EquipmentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeaseCountOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    quantity?: SortOrder
    lenderCompanyId?: SortOrder
    lenderUserId?: SortOrder
    borrowerCompanyId?: SortOrder
    borrowerUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseAvgOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type LeaseMaxOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    quantity?: SortOrder
    lenderCompanyId?: SortOrder
    lenderUserId?: SortOrder
    borrowerCompanyId?: SortOrder
    borrowerUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseMinOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    quantity?: SortOrder
    lenderCompanyId?: SortOrder
    lenderUserId?: SortOrder
    borrowerCompanyId?: SortOrder
    borrowerUserId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaseSumOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    content?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type LeaseCreateNestedManyWithoutLenderUserInput = {
    create?: XOR<LeaseCreateWithoutLenderUserInput, LeaseUncheckedCreateWithoutLenderUserInput> | LeaseCreateWithoutLenderUserInput[] | LeaseUncheckedCreateWithoutLenderUserInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutLenderUserInput | LeaseCreateOrConnectWithoutLenderUserInput[]
    createMany?: LeaseCreateManyLenderUserInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type LeaseCreateNestedManyWithoutBorrowerUserInput = {
    create?: XOR<LeaseCreateWithoutBorrowerUserInput, LeaseUncheckedCreateWithoutBorrowerUserInput> | LeaseCreateWithoutBorrowerUserInput[] | LeaseUncheckedCreateWithoutBorrowerUserInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutBorrowerUserInput | LeaseCreateOrConnectWithoutBorrowerUserInput[]
    createMany?: LeaseCreateManyBorrowerUserInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput> | ChatMessageCreateWithoutReceiverInput[] | ChatMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReceiverInput | ChatMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatMessageCreateManyReceiverInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutLenderUserInput = {
    create?: XOR<LeaseCreateWithoutLenderUserInput, LeaseUncheckedCreateWithoutLenderUserInput> | LeaseCreateWithoutLenderUserInput[] | LeaseUncheckedCreateWithoutLenderUserInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutLenderUserInput | LeaseCreateOrConnectWithoutLenderUserInput[]
    createMany?: LeaseCreateManyLenderUserInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutBorrowerUserInput = {
    create?: XOR<LeaseCreateWithoutBorrowerUserInput, LeaseUncheckedCreateWithoutBorrowerUserInput> | LeaseCreateWithoutBorrowerUserInput[] | LeaseUncheckedCreateWithoutBorrowerUserInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutBorrowerUserInput | LeaseCreateOrConnectWithoutBorrowerUserInput[]
    createMany?: LeaseCreateManyBorrowerUserInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput> | ChatMessageCreateWithoutReceiverInput[] | ChatMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReceiverInput | ChatMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatMessageCreateManyReceiverInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type LeaseUpdateManyWithoutLenderUserNestedInput = {
    create?: XOR<LeaseCreateWithoutLenderUserInput, LeaseUncheckedCreateWithoutLenderUserInput> | LeaseCreateWithoutLenderUserInput[] | LeaseUncheckedCreateWithoutLenderUserInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutLenderUserInput | LeaseCreateOrConnectWithoutLenderUserInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutLenderUserInput | LeaseUpsertWithWhereUniqueWithoutLenderUserInput[]
    createMany?: LeaseCreateManyLenderUserInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutLenderUserInput | LeaseUpdateWithWhereUniqueWithoutLenderUserInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutLenderUserInput | LeaseUpdateManyWithWhereWithoutLenderUserInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LeaseUpdateManyWithoutBorrowerUserNestedInput = {
    create?: XOR<LeaseCreateWithoutBorrowerUserInput, LeaseUncheckedCreateWithoutBorrowerUserInput> | LeaseCreateWithoutBorrowerUserInput[] | LeaseUncheckedCreateWithoutBorrowerUserInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutBorrowerUserInput | LeaseCreateOrConnectWithoutBorrowerUserInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutBorrowerUserInput | LeaseUpsertWithWhereUniqueWithoutBorrowerUserInput[]
    createMany?: LeaseCreateManyBorrowerUserInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutBorrowerUserInput | LeaseUpdateWithWhereUniqueWithoutBorrowerUserInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutBorrowerUserInput | LeaseUpdateManyWithWhereWithoutBorrowerUserInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput> | ChatMessageCreateWithoutReceiverInput[] | ChatMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReceiverInput | ChatMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutReceiverInput | ChatMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatMessageCreateManyReceiverInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutReceiverInput | ChatMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutReceiverInput | ChatMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutLenderUserNestedInput = {
    create?: XOR<LeaseCreateWithoutLenderUserInput, LeaseUncheckedCreateWithoutLenderUserInput> | LeaseCreateWithoutLenderUserInput[] | LeaseUncheckedCreateWithoutLenderUserInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutLenderUserInput | LeaseCreateOrConnectWithoutLenderUserInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutLenderUserInput | LeaseUpsertWithWhereUniqueWithoutLenderUserInput[]
    createMany?: LeaseCreateManyLenderUserInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutLenderUserInput | LeaseUpdateWithWhereUniqueWithoutLenderUserInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutLenderUserInput | LeaseUpdateManyWithWhereWithoutLenderUserInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutBorrowerUserNestedInput = {
    create?: XOR<LeaseCreateWithoutBorrowerUserInput, LeaseUncheckedCreateWithoutBorrowerUserInput> | LeaseCreateWithoutBorrowerUserInput[] | LeaseUncheckedCreateWithoutBorrowerUserInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutBorrowerUserInput | LeaseCreateOrConnectWithoutBorrowerUserInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutBorrowerUserInput | LeaseUpsertWithWhereUniqueWithoutBorrowerUserInput[]
    createMany?: LeaseCreateManyBorrowerUserInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutBorrowerUserInput | LeaseUpdateWithWhereUniqueWithoutBorrowerUserInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutBorrowerUserInput | LeaseUpdateManyWithWhereWithoutBorrowerUserInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput> | ChatMessageCreateWithoutReceiverInput[] | ChatMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutReceiverInput | ChatMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutReceiverInput | ChatMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatMessageCreateManyReceiverInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutReceiverInput | ChatMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutReceiverInput | ChatMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EquipmentCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EquipmentCreateWithoutCompanyInput, EquipmentUncheckedCreateWithoutCompanyInput> | EquipmentCreateWithoutCompanyInput[] | EquipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCompanyInput | EquipmentCreateOrConnectWithoutCompanyInput[]
    createMany?: EquipmentCreateManyCompanyInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type LeaseCreateNestedManyWithoutLenderCompanyInput = {
    create?: XOR<LeaseCreateWithoutLenderCompanyInput, LeaseUncheckedCreateWithoutLenderCompanyInput> | LeaseCreateWithoutLenderCompanyInput[] | LeaseUncheckedCreateWithoutLenderCompanyInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutLenderCompanyInput | LeaseCreateOrConnectWithoutLenderCompanyInput[]
    createMany?: LeaseCreateManyLenderCompanyInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type LeaseCreateNestedManyWithoutBorrowerCompanyInput = {
    create?: XOR<LeaseCreateWithoutBorrowerCompanyInput, LeaseUncheckedCreateWithoutBorrowerCompanyInput> | LeaseCreateWithoutBorrowerCompanyInput[] | LeaseUncheckedCreateWithoutBorrowerCompanyInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutBorrowerCompanyInput | LeaseCreateOrConnectWithoutBorrowerCompanyInput[]
    createMany?: LeaseCreateManyBorrowerCompanyInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EquipmentCreateWithoutCompanyInput, EquipmentUncheckedCreateWithoutCompanyInput> | EquipmentCreateWithoutCompanyInput[] | EquipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCompanyInput | EquipmentCreateOrConnectWithoutCompanyInput[]
    createMany?: EquipmentCreateManyCompanyInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutLenderCompanyInput = {
    create?: XOR<LeaseCreateWithoutLenderCompanyInput, LeaseUncheckedCreateWithoutLenderCompanyInput> | LeaseCreateWithoutLenderCompanyInput[] | LeaseUncheckedCreateWithoutLenderCompanyInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutLenderCompanyInput | LeaseCreateOrConnectWithoutLenderCompanyInput[]
    createMany?: LeaseCreateManyLenderCompanyInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutBorrowerCompanyInput = {
    create?: XOR<LeaseCreateWithoutBorrowerCompanyInput, LeaseUncheckedCreateWithoutBorrowerCompanyInput> | LeaseCreateWithoutBorrowerCompanyInput[] | LeaseUncheckedCreateWithoutBorrowerCompanyInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutBorrowerCompanyInput | LeaseCreateOrConnectWithoutBorrowerCompanyInput[]
    createMany?: LeaseCreateManyBorrowerCompanyInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EquipmentUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EquipmentCreateWithoutCompanyInput, EquipmentUncheckedCreateWithoutCompanyInput> | EquipmentCreateWithoutCompanyInput[] | EquipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCompanyInput | EquipmentCreateOrConnectWithoutCompanyInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCompanyInput | EquipmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EquipmentCreateManyCompanyInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCompanyInput | EquipmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCompanyInput | EquipmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type LeaseUpdateManyWithoutLenderCompanyNestedInput = {
    create?: XOR<LeaseCreateWithoutLenderCompanyInput, LeaseUncheckedCreateWithoutLenderCompanyInput> | LeaseCreateWithoutLenderCompanyInput[] | LeaseUncheckedCreateWithoutLenderCompanyInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutLenderCompanyInput | LeaseCreateOrConnectWithoutLenderCompanyInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutLenderCompanyInput | LeaseUpsertWithWhereUniqueWithoutLenderCompanyInput[]
    createMany?: LeaseCreateManyLenderCompanyInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutLenderCompanyInput | LeaseUpdateWithWhereUniqueWithoutLenderCompanyInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutLenderCompanyInput | LeaseUpdateManyWithWhereWithoutLenderCompanyInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LeaseUpdateManyWithoutBorrowerCompanyNestedInput = {
    create?: XOR<LeaseCreateWithoutBorrowerCompanyInput, LeaseUncheckedCreateWithoutBorrowerCompanyInput> | LeaseCreateWithoutBorrowerCompanyInput[] | LeaseUncheckedCreateWithoutBorrowerCompanyInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutBorrowerCompanyInput | LeaseCreateOrConnectWithoutBorrowerCompanyInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutBorrowerCompanyInput | LeaseUpsertWithWhereUniqueWithoutBorrowerCompanyInput[]
    createMany?: LeaseCreateManyBorrowerCompanyInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutBorrowerCompanyInput | LeaseUpdateWithWhereUniqueWithoutBorrowerCompanyInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutBorrowerCompanyInput | LeaseUpdateManyWithWhereWithoutBorrowerCompanyInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EquipmentCreateWithoutCompanyInput, EquipmentUncheckedCreateWithoutCompanyInput> | EquipmentCreateWithoutCompanyInput[] | EquipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCompanyInput | EquipmentCreateOrConnectWithoutCompanyInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCompanyInput | EquipmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EquipmentCreateManyCompanyInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCompanyInput | EquipmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCompanyInput | EquipmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutLenderCompanyNestedInput = {
    create?: XOR<LeaseCreateWithoutLenderCompanyInput, LeaseUncheckedCreateWithoutLenderCompanyInput> | LeaseCreateWithoutLenderCompanyInput[] | LeaseUncheckedCreateWithoutLenderCompanyInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutLenderCompanyInput | LeaseCreateOrConnectWithoutLenderCompanyInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutLenderCompanyInput | LeaseUpsertWithWhereUniqueWithoutLenderCompanyInput[]
    createMany?: LeaseCreateManyLenderCompanyInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutLenderCompanyInput | LeaseUpdateWithWhereUniqueWithoutLenderCompanyInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutLenderCompanyInput | LeaseUpdateManyWithWhereWithoutLenderCompanyInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutBorrowerCompanyNestedInput = {
    create?: XOR<LeaseCreateWithoutBorrowerCompanyInput, LeaseUncheckedCreateWithoutBorrowerCompanyInput> | LeaseCreateWithoutBorrowerCompanyInput[] | LeaseUncheckedCreateWithoutBorrowerCompanyInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutBorrowerCompanyInput | LeaseCreateOrConnectWithoutBorrowerCompanyInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutBorrowerCompanyInput | LeaseUpsertWithWhereUniqueWithoutBorrowerCompanyInput[]
    createMany?: LeaseCreateManyBorrowerCompanyInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutBorrowerCompanyInput | LeaseUpdateWithWhereUniqueWithoutBorrowerCompanyInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutBorrowerCompanyInput | LeaseUpdateManyWithWhereWithoutBorrowerCompanyInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type EquipmentCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCategoryInput | EquipmentUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCategoryInput | EquipmentUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCategoryInput | EquipmentUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput> | EquipmentCreateWithoutCategoryInput[] | EquipmentUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCategoryInput | EquipmentCreateOrConnectWithoutCategoryInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCategoryInput | EquipmentUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EquipmentCreateManyCategoryInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCategoryInput | EquipmentUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCategoryInput | EquipmentUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentCategoryCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<EquipmentCategoryCreateWithoutEquipmentsInput, EquipmentCategoryUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentCategoryCreateOrConnectWithoutEquipmentsInput
    connect?: EquipmentCategoryWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<CompanyCreateWithoutEquipmentsInput, CompanyUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEquipmentsInput
    connect?: CompanyWhereUniqueInput
  }

  export type LeaseCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<LeaseCreateWithoutEquipmentInput, LeaseUncheckedCreateWithoutEquipmentInput> | LeaseCreateWithoutEquipmentInput[] | LeaseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutEquipmentInput | LeaseCreateOrConnectWithoutEquipmentInput[]
    createMany?: LeaseCreateManyEquipmentInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<LeaseCreateWithoutEquipmentInput, LeaseUncheckedCreateWithoutEquipmentInput> | LeaseCreateWithoutEquipmentInput[] | LeaseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutEquipmentInput | LeaseCreateOrConnectWithoutEquipmentInput[]
    createMany?: LeaseCreateManyEquipmentInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipmentCategoryUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<EquipmentCategoryCreateWithoutEquipmentsInput, EquipmentCategoryUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentCategoryCreateOrConnectWithoutEquipmentsInput
    upsert?: EquipmentCategoryUpsertWithoutEquipmentsInput
    connect?: EquipmentCategoryWhereUniqueInput
    update?: XOR<XOR<EquipmentCategoryUpdateToOneWithWhereWithoutEquipmentsInput, EquipmentCategoryUpdateWithoutEquipmentsInput>, EquipmentCategoryUncheckedUpdateWithoutEquipmentsInput>
  }

  export type CompanyUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<CompanyCreateWithoutEquipmentsInput, CompanyUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEquipmentsInput
    upsert?: CompanyUpsertWithoutEquipmentsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEquipmentsInput, CompanyUpdateWithoutEquipmentsInput>, CompanyUncheckedUpdateWithoutEquipmentsInput>
  }

  export type LeaseUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<LeaseCreateWithoutEquipmentInput, LeaseUncheckedCreateWithoutEquipmentInput> | LeaseCreateWithoutEquipmentInput[] | LeaseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutEquipmentInput | LeaseCreateOrConnectWithoutEquipmentInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutEquipmentInput | LeaseUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: LeaseCreateManyEquipmentInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutEquipmentInput | LeaseUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutEquipmentInput | LeaseUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<LeaseCreateWithoutEquipmentInput, LeaseUncheckedCreateWithoutEquipmentInput> | LeaseCreateWithoutEquipmentInput[] | LeaseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutEquipmentInput | LeaseCreateOrConnectWithoutEquipmentInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutEquipmentInput | LeaseUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: LeaseCreateManyEquipmentInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutEquipmentInput | LeaseUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutEquipmentInput | LeaseUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type EquipmentCreateNestedOneWithoutLeasesInput = {
    create?: XOR<EquipmentCreateWithoutLeasesInput, EquipmentUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutLeasesInput
    connect?: EquipmentWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutLeasesAsLenderInput = {
    create?: XOR<CompanyCreateWithoutLeasesAsLenderInput, CompanyUncheckedCreateWithoutLeasesAsLenderInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutLeasesAsLenderInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeasesAsLenderInput = {
    create?: XOR<UserCreateWithoutLeasesAsLenderInput, UserUncheckedCreateWithoutLeasesAsLenderInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeasesAsLenderInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutLeasesAsBorrowerInput = {
    create?: XOR<CompanyCreateWithoutLeasesAsBorrowerInput, CompanyUncheckedCreateWithoutLeasesAsBorrowerInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutLeasesAsBorrowerInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeasesAsBorrowerInput = {
    create?: XOR<UserCreateWithoutLeasesAsBorrowerInput, UserUncheckedCreateWithoutLeasesAsBorrowerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeasesAsBorrowerInput
    connect?: UserWhereUniqueInput
  }

  export type EquipmentUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<EquipmentCreateWithoutLeasesInput, EquipmentUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutLeasesInput
    upsert?: EquipmentUpsertWithoutLeasesInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutLeasesInput, EquipmentUpdateWithoutLeasesInput>, EquipmentUncheckedUpdateWithoutLeasesInput>
  }

  export type CompanyUpdateOneRequiredWithoutLeasesAsLenderNestedInput = {
    create?: XOR<CompanyCreateWithoutLeasesAsLenderInput, CompanyUncheckedCreateWithoutLeasesAsLenderInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutLeasesAsLenderInput
    upsert?: CompanyUpsertWithoutLeasesAsLenderInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutLeasesAsLenderInput, CompanyUpdateWithoutLeasesAsLenderInput>, CompanyUncheckedUpdateWithoutLeasesAsLenderInput>
  }

  export type UserUpdateOneRequiredWithoutLeasesAsLenderNestedInput = {
    create?: XOR<UserCreateWithoutLeasesAsLenderInput, UserUncheckedCreateWithoutLeasesAsLenderInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeasesAsLenderInput
    upsert?: UserUpsertWithoutLeasesAsLenderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeasesAsLenderInput, UserUpdateWithoutLeasesAsLenderInput>, UserUncheckedUpdateWithoutLeasesAsLenderInput>
  }

  export type CompanyUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput = {
    create?: XOR<CompanyCreateWithoutLeasesAsBorrowerInput, CompanyUncheckedCreateWithoutLeasesAsBorrowerInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutLeasesAsBorrowerInput
    upsert?: CompanyUpsertWithoutLeasesAsBorrowerInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutLeasesAsBorrowerInput, CompanyUpdateWithoutLeasesAsBorrowerInput>, CompanyUncheckedUpdateWithoutLeasesAsBorrowerInput>
  }

  export type UserUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput = {
    create?: XOR<UserCreateWithoutLeasesAsBorrowerInput, UserUncheckedCreateWithoutLeasesAsBorrowerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeasesAsBorrowerInput
    upsert?: UserUpsertWithoutLeasesAsBorrowerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeasesAsBorrowerInput, UserUpdateWithoutLeasesAsBorrowerInput>, UserUncheckedUpdateWithoutLeasesAsBorrowerInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipments?: EquipmentCreateNestedManyWithoutCompanyInput
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderCompanyInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipments?: EquipmentUncheckedCreateNestedManyWithoutCompanyInput
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderCompanyInput
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type LeaseCreateWithoutLenderUserInput = {
    id?: string
    quantity: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutLeasesInput
    lenderCompany: CompanyCreateNestedOneWithoutLeasesAsLenderInput
    borrowerCompany: CompanyCreateNestedOneWithoutLeasesAsBorrowerInput
    borrowerUser: UserCreateNestedOneWithoutLeasesAsBorrowerInput
  }

  export type LeaseUncheckedCreateWithoutLenderUserInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateOrConnectWithoutLenderUserInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutLenderUserInput, LeaseUncheckedCreateWithoutLenderUserInput>
  }

  export type LeaseCreateManyLenderUserInputEnvelope = {
    data: LeaseCreateManyLenderUserInput | LeaseCreateManyLenderUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutBorrowerUserInput = {
    id?: string
    quantity: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutLeasesInput
    lenderCompany: CompanyCreateNestedOneWithoutLeasesAsLenderInput
    lenderUser: UserCreateNestedOneWithoutLeasesAsLenderInput
    borrowerCompany: CompanyCreateNestedOneWithoutLeasesAsBorrowerInput
  }

  export type LeaseUncheckedCreateWithoutBorrowerUserInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerCompanyId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateOrConnectWithoutBorrowerUserInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutBorrowerUserInput, LeaseUncheckedCreateWithoutBorrowerUserInput>
  }

  export type LeaseCreateManyBorrowerUserInputEnvelope = {
    data: LeaseCreateManyBorrowerUserInput | LeaseCreateManyBorrowerUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutSenderInput = {
    id?: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutReceiverInput = {
    id?: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutReceiverInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput>
  }

  export type ChatMessageCreateManyReceiverInputEnvelope = {
    data: ChatMessageCreateManyReceiverInput | ChatMessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipments?: EquipmentUpdateManyWithoutCompanyNestedInput
    leasesAsLender?: LeaseUpdateManyWithoutLenderCompanyNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipments?: EquipmentUncheckedUpdateManyWithoutCompanyNestedInput
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderCompanyNestedInput
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerCompanyNestedInput
  }

  export type LeaseUpsertWithWhereUniqueWithoutLenderUserInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutLenderUserInput, LeaseUncheckedUpdateWithoutLenderUserInput>
    create: XOR<LeaseCreateWithoutLenderUserInput, LeaseUncheckedCreateWithoutLenderUserInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutLenderUserInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutLenderUserInput, LeaseUncheckedUpdateWithoutLenderUserInput>
  }

  export type LeaseUpdateManyWithWhereWithoutLenderUserInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutLenderUserInput>
  }

  export type LeaseScalarWhereInput = {
    AND?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    OR?: LeaseScalarWhereInput[]
    NOT?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    id?: StringFilter<"Lease"> | string
    equipmentId?: StringFilter<"Lease"> | string
    quantity?: IntFilter<"Lease"> | number
    lenderCompanyId?: StringFilter<"Lease"> | string
    lenderUserId?: StringFilter<"Lease"> | string
    borrowerCompanyId?: StringFilter<"Lease"> | string
    borrowerUserId?: StringFilter<"Lease"> | string
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    status?: StringFilter<"Lease"> | string
    notes?: StringNullableFilter<"Lease"> | string | null
    totalPrice?: FloatNullableFilter<"Lease"> | number | null
    createdAt?: DateTimeFilter<"Lease"> | Date | string
    updatedAt?: DateTimeFilter<"Lease"> | Date | string
  }

  export type LeaseUpsertWithWhereUniqueWithoutBorrowerUserInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutBorrowerUserInput, LeaseUncheckedUpdateWithoutBorrowerUserInput>
    create: XOR<LeaseCreateWithoutBorrowerUserInput, LeaseUncheckedCreateWithoutBorrowerUserInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutBorrowerUserInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutBorrowerUserInput, LeaseUncheckedUpdateWithoutBorrowerUserInput>
  }

  export type LeaseUpdateManyWithWhereWithoutBorrowerUserInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutBorrowerUserInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    receiverId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    read?: BoolFilter<"ChatMessage"> | boolean
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutReceiverInput, ChatMessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<ChatMessageCreateWithoutReceiverInput, ChatMessageUncheckedCreateWithoutReceiverInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutReceiverInput, ChatMessageUncheckedUpdateWithoutReceiverInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutReceiverInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderUserInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderUserInput
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: EquipmentCategoryCreateNestedOneWithoutEquipmentsInput
    leases?: LeaseCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    categoryId: string
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutCompanyInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutCompanyInput, EquipmentUncheckedCreateWithoutCompanyInput>
  }

  export type EquipmentCreateManyCompanyInputEnvelope = {
    data: EquipmentCreateManyCompanyInput | EquipmentCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutLenderCompanyInput = {
    id?: string
    quantity: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutLeasesInput
    lenderUser: UserCreateNestedOneWithoutLeasesAsLenderInput
    borrowerCompany: CompanyCreateNestedOneWithoutLeasesAsBorrowerInput
    borrowerUser: UserCreateNestedOneWithoutLeasesAsBorrowerInput
  }

  export type LeaseUncheckedCreateWithoutLenderCompanyInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderUserId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateOrConnectWithoutLenderCompanyInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutLenderCompanyInput, LeaseUncheckedCreateWithoutLenderCompanyInput>
  }

  export type LeaseCreateManyLenderCompanyInputEnvelope = {
    data: LeaseCreateManyLenderCompanyInput | LeaseCreateManyLenderCompanyInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutBorrowerCompanyInput = {
    id?: string
    quantity: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutLeasesInput
    lenderCompany: CompanyCreateNestedOneWithoutLeasesAsLenderInput
    lenderUser: UserCreateNestedOneWithoutLeasesAsLenderInput
    borrowerUser: UserCreateNestedOneWithoutLeasesAsBorrowerInput
  }

  export type LeaseUncheckedCreateWithoutBorrowerCompanyInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateOrConnectWithoutBorrowerCompanyInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutBorrowerCompanyInput, LeaseUncheckedCreateWithoutBorrowerCompanyInput>
  }

  export type LeaseCreateManyBorrowerCompanyInputEnvelope = {
    data: LeaseCreateManyBorrowerCompanyInput | LeaseCreateManyBorrowerCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    companyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type EquipmentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutCompanyInput, EquipmentUncheckedUpdateWithoutCompanyInput>
    create: XOR<EquipmentCreateWithoutCompanyInput, EquipmentUncheckedCreateWithoutCompanyInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutCompanyInput, EquipmentUncheckedUpdateWithoutCompanyInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutCompanyInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutCompanyInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: StringFilter<"Equipment"> | string
    name?: StringFilter<"Equipment"> | string
    description?: StringNullableFilter<"Equipment"> | string | null
    quantity?: IntFilter<"Equipment"> | number
    available?: IntFilter<"Equipment"> | number
    daily_rate?: FloatNullableFilter<"Equipment"> | number | null
    categoryId?: StringFilter<"Equipment"> | string
    companyId?: StringFilter<"Equipment"> | string
    image?: StringNullableFilter<"Equipment"> | string | null
    location?: StringNullableFilter<"Equipment"> | string | null
    status?: StringFilter<"Equipment"> | string
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
  }

  export type LeaseUpsertWithWhereUniqueWithoutLenderCompanyInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutLenderCompanyInput, LeaseUncheckedUpdateWithoutLenderCompanyInput>
    create: XOR<LeaseCreateWithoutLenderCompanyInput, LeaseUncheckedCreateWithoutLenderCompanyInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutLenderCompanyInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutLenderCompanyInput, LeaseUncheckedUpdateWithoutLenderCompanyInput>
  }

  export type LeaseUpdateManyWithWhereWithoutLenderCompanyInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutLenderCompanyInput>
  }

  export type LeaseUpsertWithWhereUniqueWithoutBorrowerCompanyInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutBorrowerCompanyInput, LeaseUncheckedUpdateWithoutBorrowerCompanyInput>
    create: XOR<LeaseCreateWithoutBorrowerCompanyInput, LeaseUncheckedCreateWithoutBorrowerCompanyInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutBorrowerCompanyInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutBorrowerCompanyInput, LeaseUncheckedUpdateWithoutBorrowerCompanyInput>
  }

  export type LeaseUpdateManyWithWhereWithoutBorrowerCompanyInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutBorrowerCompanyInput>
  }

  export type EquipmentCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEquipmentsInput
    leases?: LeaseCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    companyId: string
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leases?: LeaseUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput>
  }

  export type EquipmentCreateManyCategoryInputEnvelope = {
    data: EquipmentCreateManyCategoryInput | EquipmentCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutCategoryInput, EquipmentUncheckedUpdateWithoutCategoryInput>
    create: XOR<EquipmentCreateWithoutCategoryInput, EquipmentUncheckedCreateWithoutCategoryInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutCategoryInput, EquipmentUncheckedUpdateWithoutCategoryInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutCategoryInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutCategoryInput>
  }

  export type EquipmentCategoryCreateWithoutEquipmentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCategoryUncheckedCreateWithoutEquipmentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCategoryCreateOrConnectWithoutEquipmentsInput = {
    where: EquipmentCategoryWhereUniqueInput
    create: XOR<EquipmentCategoryCreateWithoutEquipmentsInput, EquipmentCategoryUncheckedCreateWithoutEquipmentsInput>
  }

  export type CompanyCreateWithoutEquipmentsInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderCompanyInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerCompanyInput
  }

  export type CompanyUncheckedCreateWithoutEquipmentsInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderCompanyInput
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerCompanyInput
  }

  export type CompanyCreateOrConnectWithoutEquipmentsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEquipmentsInput, CompanyUncheckedCreateWithoutEquipmentsInput>
  }

  export type LeaseCreateWithoutEquipmentInput = {
    id?: string
    quantity: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lenderCompany: CompanyCreateNestedOneWithoutLeasesAsLenderInput
    lenderUser: UserCreateNestedOneWithoutLeasesAsLenderInput
    borrowerCompany: CompanyCreateNestedOneWithoutLeasesAsBorrowerInput
    borrowerUser: UserCreateNestedOneWithoutLeasesAsBorrowerInput
  }

  export type LeaseUncheckedCreateWithoutEquipmentInput = {
    id?: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateOrConnectWithoutEquipmentInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutEquipmentInput, LeaseUncheckedCreateWithoutEquipmentInput>
  }

  export type LeaseCreateManyEquipmentInputEnvelope = {
    data: LeaseCreateManyEquipmentInput | LeaseCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentCategoryUpsertWithoutEquipmentsInput = {
    update: XOR<EquipmentCategoryUpdateWithoutEquipmentsInput, EquipmentCategoryUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<EquipmentCategoryCreateWithoutEquipmentsInput, EquipmentCategoryUncheckedCreateWithoutEquipmentsInput>
    where?: EquipmentCategoryWhereInput
  }

  export type EquipmentCategoryUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: EquipmentCategoryWhereInput
    data: XOR<EquipmentCategoryUpdateWithoutEquipmentsInput, EquipmentCategoryUncheckedUpdateWithoutEquipmentsInput>
  }

  export type EquipmentCategoryUpdateWithoutEquipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCategoryUncheckedUpdateWithoutEquipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpsertWithoutEquipmentsInput = {
    update: XOR<CompanyUpdateWithoutEquipmentsInput, CompanyUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<CompanyCreateWithoutEquipmentsInput, CompanyUncheckedCreateWithoutEquipmentsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEquipmentsInput, CompanyUncheckedUpdateWithoutEquipmentsInput>
  }

  export type CompanyUpdateWithoutEquipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    leasesAsLender?: LeaseUpdateManyWithoutLenderCompanyNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutEquipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderCompanyNestedInput
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerCompanyNestedInput
  }

  export type LeaseUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutEquipmentInput, LeaseUncheckedUpdateWithoutEquipmentInput>
    create: XOR<LeaseCreateWithoutEquipmentInput, LeaseUncheckedCreateWithoutEquipmentInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutEquipmentInput, LeaseUncheckedUpdateWithoutEquipmentInput>
  }

  export type LeaseUpdateManyWithWhereWithoutEquipmentInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type EquipmentCreateWithoutLeasesInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: EquipmentCategoryCreateNestedOneWithoutEquipmentsInput
    company: CompanyCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutLeasesInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    categoryId: string
    companyId: string
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutLeasesInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutLeasesInput, EquipmentUncheckedCreateWithoutLeasesInput>
  }

  export type CompanyCreateWithoutLeasesAsLenderInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    equipments?: EquipmentCreateNestedManyWithoutCompanyInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerCompanyInput
  }

  export type CompanyUncheckedCreateWithoutLeasesAsLenderInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    equipments?: EquipmentUncheckedCreateNestedManyWithoutCompanyInput
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerCompanyInput
  }

  export type CompanyCreateOrConnectWithoutLeasesAsLenderInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutLeasesAsLenderInput, CompanyUncheckedCreateWithoutLeasesAsLenderInput>
  }

  export type UserCreateWithoutLeasesAsLenderInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutLeasesAsLenderInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutLeasesAsLenderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeasesAsLenderInput, UserUncheckedCreateWithoutLeasesAsLenderInput>
  }

  export type CompanyCreateWithoutLeasesAsBorrowerInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    equipments?: EquipmentCreateNestedManyWithoutCompanyInput
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderCompanyInput
  }

  export type CompanyUncheckedCreateWithoutLeasesAsBorrowerInput = {
    id?: string
    name: string
    address: string
    prefecture: string
    city: string
    zipCode?: string | null
    phone?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    equipments?: EquipmentUncheckedCreateNestedManyWithoutCompanyInput
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderCompanyInput
  }

  export type CompanyCreateOrConnectWithoutLeasesAsBorrowerInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutLeasesAsBorrowerInput, CompanyUncheckedCreateWithoutLeasesAsBorrowerInput>
  }

  export type UserCreateWithoutLeasesAsBorrowerInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutLeasesAsBorrowerInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutLeasesAsBorrowerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeasesAsBorrowerInput, UserUncheckedCreateWithoutLeasesAsBorrowerInput>
  }

  export type EquipmentUpsertWithoutLeasesInput = {
    update: XOR<EquipmentUpdateWithoutLeasesInput, EquipmentUncheckedUpdateWithoutLeasesInput>
    create: XOR<EquipmentCreateWithoutLeasesInput, EquipmentUncheckedCreateWithoutLeasesInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutLeasesInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutLeasesInput, EquipmentUncheckedUpdateWithoutLeasesInput>
  }

  export type EquipmentUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EquipmentCategoryUpdateOneRequiredWithoutEquipmentsNestedInput
    company?: CompanyUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutLeasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpsertWithoutLeasesAsLenderInput = {
    update: XOR<CompanyUpdateWithoutLeasesAsLenderInput, CompanyUncheckedUpdateWithoutLeasesAsLenderInput>
    create: XOR<CompanyCreateWithoutLeasesAsLenderInput, CompanyUncheckedCreateWithoutLeasesAsLenderInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutLeasesAsLenderInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutLeasesAsLenderInput, CompanyUncheckedUpdateWithoutLeasesAsLenderInput>
  }

  export type CompanyUpdateWithoutLeasesAsLenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    equipments?: EquipmentUpdateManyWithoutCompanyNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutLeasesAsLenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    equipments?: EquipmentUncheckedUpdateManyWithoutCompanyNestedInput
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerCompanyNestedInput
  }

  export type UserUpsertWithoutLeasesAsLenderInput = {
    update: XOR<UserUpdateWithoutLeasesAsLenderInput, UserUncheckedUpdateWithoutLeasesAsLenderInput>
    create: XOR<UserCreateWithoutLeasesAsLenderInput, UserUncheckedCreateWithoutLeasesAsLenderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeasesAsLenderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeasesAsLenderInput, UserUncheckedUpdateWithoutLeasesAsLenderInput>
  }

  export type UserUpdateWithoutLeasesAsLenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutLeasesAsLenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type CompanyUpsertWithoutLeasesAsBorrowerInput = {
    update: XOR<CompanyUpdateWithoutLeasesAsBorrowerInput, CompanyUncheckedUpdateWithoutLeasesAsBorrowerInput>
    create: XOR<CompanyCreateWithoutLeasesAsBorrowerInput, CompanyUncheckedCreateWithoutLeasesAsBorrowerInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutLeasesAsBorrowerInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutLeasesAsBorrowerInput, CompanyUncheckedUpdateWithoutLeasesAsBorrowerInput>
  }

  export type CompanyUpdateWithoutLeasesAsBorrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    equipments?: EquipmentUpdateManyWithoutCompanyNestedInput
    leasesAsLender?: LeaseUpdateManyWithoutLenderCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutLeasesAsBorrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    prefecture?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    equipments?: EquipmentUncheckedUpdateManyWithoutCompanyNestedInput
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderCompanyNestedInput
  }

  export type UserUpsertWithoutLeasesAsBorrowerInput = {
    update: XOR<UserUpdateWithoutLeasesAsBorrowerInput, UserUncheckedUpdateWithoutLeasesAsBorrowerInput>
    create: XOR<UserCreateWithoutLeasesAsBorrowerInput, UserUncheckedCreateWithoutLeasesAsBorrowerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeasesAsBorrowerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeasesAsBorrowerInput, UserUncheckedUpdateWithoutLeasesAsBorrowerInput>
  }

  export type UserUpdateWithoutLeasesAsBorrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    leasesAsLender?: LeaseUpdateManyWithoutLenderUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutLeasesAsBorrowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderUserInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderUserInput
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    leasesAsLender?: LeaseCreateNestedManyWithoutLenderUserInput
    leasesAsBorrower?: LeaseCreateNestedManyWithoutBorrowerUserInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leasesAsLender?: LeaseUncheckedCreateNestedManyWithoutLenderUserInput
    leasesAsBorrower?: LeaseUncheckedCreateNestedManyWithoutBorrowerUserInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    leasesAsLender?: LeaseUpdateManyWithoutLenderUserNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderUserNestedInput
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    leasesAsLender?: LeaseUpdateManyWithoutLenderUserNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderUserNestedInput
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type LeaseCreateManyLenderUserInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateManyBorrowerUserInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerCompanyId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManySenderInput = {
    id?: string
    receiverId: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyReceiverInput = {
    id?: string
    senderId: string
    content: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateWithoutLenderUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutLeasesNestedInput
    lenderCompany?: CompanyUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    borrowerCompany?: CompanyUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
    borrowerUser?: UserUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
  }

  export type LeaseUncheckedUpdateWithoutLenderUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyWithoutLenderUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUpdateWithoutBorrowerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutLeasesNestedInput
    lenderCompany?: CompanyUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    lenderUser?: UserUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    borrowerCompany?: CompanyUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
  }

  export type LeaseUncheckedUpdateWithoutBorrowerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyWithoutBorrowerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    email: string
    name: string
    password: string
    phone?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateManyCompanyInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    categoryId: string
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateManyLenderCompanyInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderUserId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseCreateManyBorrowerCompanyInput = {
    id?: string
    equipmentId: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leasesAsLender?: LeaseUpdateManyWithoutLenderUserNestedInput
    leasesAsBorrower?: LeaseUpdateManyWithoutBorrowerUserNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leasesAsLender?: LeaseUncheckedUpdateManyWithoutLenderUserNestedInput
    leasesAsBorrower?: LeaseUncheckedUpdateManyWithoutBorrowerUserNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EquipmentCategoryUpdateOneRequiredWithoutEquipmentsNestedInput
    leases?: LeaseUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUpdateWithoutLenderCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutLeasesNestedInput
    lenderUser?: UserUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    borrowerCompany?: CompanyUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
    borrowerUser?: UserUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
  }

  export type LeaseUncheckedUpdateWithoutLenderCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyWithoutLenderCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUpdateWithoutBorrowerCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutLeasesNestedInput
    lenderCompany?: CompanyUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    lenderUser?: UserUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    borrowerUser?: UserUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
  }

  export type LeaseUncheckedUpdateWithoutBorrowerCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyWithoutBorrowerCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    quantity: number
    available?: number
    daily_rate?: number | null
    companyId: string
    image?: string | null
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEquipmentsNestedInput
    leases?: LeaseUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    companyId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leases?: LeaseUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    daily_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    companyId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseCreateManyEquipmentInput = {
    id?: string
    quantity: number
    lenderCompanyId: string
    lenderUserId: string
    borrowerCompanyId: string
    borrowerUserId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    notes?: string | null
    totalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaseUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lenderCompany?: CompanyUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    lenderUser?: UserUpdateOneRequiredWithoutLeasesAsLenderNestedInput
    borrowerCompany?: CompanyUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
    borrowerUser?: UserUpdateOneRequiredWithoutLeasesAsBorrowerNestedInput
  }

  export type LeaseUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    lenderCompanyId?: StringFieldUpdateOperationsInput | string
    lenderUserId?: StringFieldUpdateOperationsInput | string
    borrowerCompanyId?: StringFieldUpdateOperationsInput | string
    borrowerUserId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}