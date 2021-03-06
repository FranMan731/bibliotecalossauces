/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */






declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  LibroCreateInput: { // input type
    autor?: string | null; // String
    descripcion?: string | null; // String
    edicion?: string | null; // String
    editorial?: string | null; // String
    fecha_publicado?: number | null; // Int
    id?: string | null; // ID
    imagen?: string | null; // String
    link?: string | null; // String
    titulo: string; // String!
    tomo?: string | null; // String
  }
  LibroUpdateInput: { // input type
    autor?: string | null; // String
    descripcion?: string | null; // String
    edicion?: string | null; // String
    editorial?: string | null; // String
    fecha_publicado?: number | null; // Int
    imagen?: string | null; // String
    link?: string | null; // String
    titulo?: string | null; // String
    tomo?: string | null; // String
  }
  LibroUpdateManyMutationInput: { // input type
    autor?: string | null; // String
    descripcion?: string | null; // String
    edicion?: string | null; // String
    editorial?: string | null; // String
    fecha_publicado?: number | null; // Int
    imagen?: string | null; // String
    link?: string | null; // String
    titulo?: string | null; // String
    tomo?: string | null; // String
  }
  LibroWhereInput: { // input type
    AND?: NexusGenInputs['LibroWhereInput'][] | null; // [LibroWhereInput!]
    autor?: string | null; // String
    autor_contains?: string | null; // String
    autor_ends_with?: string | null; // String
    autor_gt?: string | null; // String
    autor_gte?: string | null; // String
    autor_in?: string[] | null; // [String!]
    autor_lt?: string | null; // String
    autor_lte?: string | null; // String
    autor_not?: string | null; // String
    autor_not_contains?: string | null; // String
    autor_not_ends_with?: string | null; // String
    autor_not_in?: string[] | null; // [String!]
    autor_not_starts_with?: string | null; // String
    autor_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    descripcion?: string | null; // String
    descripcion_contains?: string | null; // String
    descripcion_ends_with?: string | null; // String
    descripcion_gt?: string | null; // String
    descripcion_gte?: string | null; // String
    descripcion_in?: string[] | null; // [String!]
    descripcion_lt?: string | null; // String
    descripcion_lte?: string | null; // String
    descripcion_not?: string | null; // String
    descripcion_not_contains?: string | null; // String
    descripcion_not_ends_with?: string | null; // String
    descripcion_not_in?: string[] | null; // [String!]
    descripcion_not_starts_with?: string | null; // String
    descripcion_starts_with?: string | null; // String
    edicion?: string | null; // String
    edicion_contains?: string | null; // String
    edicion_ends_with?: string | null; // String
    edicion_gt?: string | null; // String
    edicion_gte?: string | null; // String
    edicion_in?: string[] | null; // [String!]
    edicion_lt?: string | null; // String
    edicion_lte?: string | null; // String
    edicion_not?: string | null; // String
    edicion_not_contains?: string | null; // String
    edicion_not_ends_with?: string | null; // String
    edicion_not_in?: string[] | null; // [String!]
    edicion_not_starts_with?: string | null; // String
    edicion_starts_with?: string | null; // String
    editorial?: string | null; // String
    editorial_contains?: string | null; // String
    editorial_ends_with?: string | null; // String
    editorial_gt?: string | null; // String
    editorial_gte?: string | null; // String
    editorial_in?: string[] | null; // [String!]
    editorial_lt?: string | null; // String
    editorial_lte?: string | null; // String
    editorial_not?: string | null; // String
    editorial_not_contains?: string | null; // String
    editorial_not_ends_with?: string | null; // String
    editorial_not_in?: string[] | null; // [String!]
    editorial_not_starts_with?: string | null; // String
    editorial_starts_with?: string | null; // String
    fecha_publicado?: number | null; // Int
    fecha_publicado_gt?: number | null; // Int
    fecha_publicado_gte?: number | null; // Int
    fecha_publicado_in?: number[] | null; // [Int!]
    fecha_publicado_lt?: number | null; // Int
    fecha_publicado_lte?: number | null; // Int
    fecha_publicado_not?: number | null; // Int
    fecha_publicado_not_in?: number[] | null; // [Int!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    imagen?: string | null; // String
    imagen_contains?: string | null; // String
    imagen_ends_with?: string | null; // String
    imagen_gt?: string | null; // String
    imagen_gte?: string | null; // String
    imagen_in?: string[] | null; // [String!]
    imagen_lt?: string | null; // String
    imagen_lte?: string | null; // String
    imagen_not?: string | null; // String
    imagen_not_contains?: string | null; // String
    imagen_not_ends_with?: string | null; // String
    imagen_not_in?: string[] | null; // [String!]
    imagen_not_starts_with?: string | null; // String
    imagen_starts_with?: string | null; // String
    link?: string | null; // String
    link_contains?: string | null; // String
    link_ends_with?: string | null; // String
    link_gt?: string | null; // String
    link_gte?: string | null; // String
    link_in?: string[] | null; // [String!]
    link_lt?: string | null; // String
    link_lte?: string | null; // String
    link_not?: string | null; // String
    link_not_contains?: string | null; // String
    link_not_ends_with?: string | null; // String
    link_not_in?: string[] | null; // [String!]
    link_not_starts_with?: string | null; // String
    link_starts_with?: string | null; // String
    NOT?: NexusGenInputs['LibroWhereInput'][] | null; // [LibroWhereInput!]
    OR?: NexusGenInputs['LibroWhereInput'][] | null; // [LibroWhereInput!]
    titulo?: string | null; // String
    titulo_contains?: string | null; // String
    titulo_ends_with?: string | null; // String
    titulo_gt?: string | null; // String
    titulo_gte?: string | null; // String
    titulo_in?: string[] | null; // [String!]
    titulo_lt?: string | null; // String
    titulo_lte?: string | null; // String
    titulo_not?: string | null; // String
    titulo_not_contains?: string | null; // String
    titulo_not_ends_with?: string | null; // String
    titulo_not_in?: string[] | null; // [String!]
    titulo_not_starts_with?: string | null; // String
    titulo_starts_with?: string | null; // String
    tomo?: string | null; // String
    tomo_contains?: string | null; // String
    tomo_ends_with?: string | null; // String
    tomo_gt?: string | null; // String
    tomo_gte?: string | null; // String
    tomo_in?: string[] | null; // [String!]
    tomo_lt?: string | null; // String
    tomo_lte?: string | null; // String
    tomo_not?: string | null; // String
    tomo_not_contains?: string | null; // String
    tomo_not_ends_with?: string | null; // String
    tomo_not_in?: string[] | null; // [String!]
    tomo_not_starts_with?: string | null; // String
    tomo_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  LibroWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    email: string; // String!
    id?: string | null; // ID
    name?: string | null; // String
    password: string; // String!
    role?: NexusGenEnums['RoleFormat'] | null; // RoleFormat
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
    password?: string | null; // String
    role?: NexusGenEnums['RoleFormat'] | null; // RoleFormat
  }
  UserUpdateManyMutationInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
    password?: string | null; // String
    role?: NexusGenEnums['RoleFormat'] | null; // RoleFormat
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    role?: NexusGenEnums['RoleFormat'] | null; // RoleFormat
    role_in?: NexusGenEnums['RoleFormat'][] | null; // [RoleFormat!]
    role_not?: NexusGenEnums['RoleFormat'] | null; // RoleFormat
    role_not_in?: NexusGenEnums['RoleFormat'][] | null; // [RoleFormat!]
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  LibroOrderByInput: "autor_ASC" | "autor_DESC" | "createdAt_ASC" | "createdAt_DESC" | "descripcion_ASC" | "descripcion_DESC" | "edicion_ASC" | "edicion_DESC" | "editorial_ASC" | "editorial_DESC" | "fecha_publicado_ASC" | "fecha_publicado_DESC" | "id_ASC" | "id_DESC" | "imagen_ASC" | "imagen_DESC" | "link_ASC" | "link_DESC" | "titulo_ASC" | "titulo_DESC" | "tomo_ASC" | "tomo_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  RoleFormat: "ADMIN" | "EDITOR" | "LECTOR"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "password_ASC" | "password_DESC" | "role_ASC" | "role_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregateLibro: { // root type
    count: number; // Int!
  }
  AggregateUser: { // root type
    count: number; // Int!
  }
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Libro: { // root type
    autor?: string | null; // String
    createdAt: any; // DateTime!
    descripcion?: string | null; // String
    edicion?: string | null; // String
    editorial?: string | null; // String
    fecha_publicado?: number | null; // Int
    id: string; // ID!
    imagen?: string | null; // String
    link?: string | null; // String
    titulo: string; // String!
    tomo?: string | null; // String
    updatedAt: any; // DateTime!
  }
  LibroConnection: { // root type
    edges: NexusGenRootTypes['LibroEdge'][]; // [LibroEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  LibroEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Libro']; // Libro!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // ID!
    name?: string | null; // String
    role?: NexusGenEnums['RoleFormat'] | null; // RoleFormat
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  LibroCreateInput: NexusGenInputs['LibroCreateInput'];
  LibroUpdateInput: NexusGenInputs['LibroUpdateInput'];
  LibroUpdateManyMutationInput: NexusGenInputs['LibroUpdateManyMutationInput'];
  LibroWhereInput: NexusGenInputs['LibroWhereInput'];
  LibroWhereUniqueInput: NexusGenInputs['LibroWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  LibroOrderByInput: NexusGenEnums['LibroOrderByInput'];
  RoleFormat: NexusGenEnums['RoleFormat'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregateLibro: { // field return type
    count: number; // Int!
  }
  AggregateUser: { // field return type
    count: number; // Int!
  }
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Libro: { // field return type
    autor: string | null; // String
    createdAt: any; // DateTime!
    descripcion: string | null; // String
    edicion: string | null; // String
    editorial: string | null; // String
    fecha_publicado: number | null; // Int
    id: string; // ID!
    imagen: string | null; // String
    link: string | null; // String
    titulo: string; // String!
    tomo: string | null; // String
    updatedAt: any; // DateTime!
  }
  LibroConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateLibro']; // AggregateLibro!
    edges: NexusGenRootTypes['LibroEdge'][]; // [LibroEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  LibroEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Libro']; // Libro!
  }
  Mutation: { // field return type
    createLibro: NexusGenRootTypes['Libro']; // Libro!
    createUser: NexusGenRootTypes['User']; // User!
    deleteLibro: NexusGenRootTypes['Libro'] | null; // Libro
    deleteManyLibroes: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteUser: NexusGenRootTypes['User'] | null; // User
    editRol: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateLibro: NexusGenRootTypes['Libro'] | null; // Libro
    updateManyLibroes: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateUser: NexusGenRootTypes['User'] | null; // User
    upsertLibro: NexusGenRootTypes['Libro']; // Libro!
    upsertUser: NexusGenRootTypes['User']; // User!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    libro: NexusGenRootTypes['Libro'] | null; // Libro
    libroes: NexusGenRootTypes['Libro'][]; // [Libro!]!
    libroesConnection: NexusGenRootTypes['LibroConnection']; // LibroConnection!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
    role: NexusGenEnums['RoleFormat'] | null; // RoleFormat
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createLibro: { // args
      data: NexusGenInputs['LibroCreateInput']; // LibroCreateInput!
    }
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteLibro: { // args
      where: NexusGenInputs['LibroWhereUniqueInput']; // LibroWhereUniqueInput!
    }
    deleteManyLibroes: { // args
      where?: NexusGenInputs['LibroWhereInput'] | null; // LibroWhereInput
    }
    deleteManyUsers: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deleteUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    editRol: { // args
      id?: string | null; // ID
      role?: string | null; // String
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    signup: { // args
      email?: string | null; // String
      name?: string | null; // String
      password?: string | null; // String
    }
    updateLibro: { // args
      data: NexusGenInputs['LibroUpdateInput']; // LibroUpdateInput!
      where: NexusGenInputs['LibroWhereUniqueInput']; // LibroWhereUniqueInput!
    }
    updateManyLibroes: { // args
      data: NexusGenInputs['LibroUpdateManyMutationInput']; // LibroUpdateManyMutationInput!
      where?: NexusGenInputs['LibroWhereInput'] | null; // LibroWhereInput
    }
    updateManyUsers: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updateUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    upsertLibro: { // args
      create: NexusGenInputs['LibroCreateInput']; // LibroCreateInput!
      update: NexusGenInputs['LibroUpdateInput']; // LibroUpdateInput!
      where: NexusGenInputs['LibroWhereUniqueInput']; // LibroWhereUniqueInput!
    }
    upsertUser: { // args
      create: NexusGenInputs['UserCreateInput']; // UserCreateInput!
      update: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    libro: { // args
      where: NexusGenInputs['LibroWhereUniqueInput']; // LibroWhereUniqueInput!
    }
    libroes: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['LibroOrderByInput'] | null; // LibroOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['LibroWhereInput'] | null; // LibroWhereInput
    }
    libroesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['LibroOrderByInput'] | null; // LibroOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['LibroWhereInput'] | null; // LibroWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateLibro" | "AggregateUser" | "AuthPayload" | "BatchPayload" | "Libro" | "LibroConnection" | "LibroEdge" | "Mutation" | "PageInfo" | "Query" | "User" | "UserConnection" | "UserEdge";

export type NexusGenInputNames = "LibroCreateInput" | "LibroUpdateInput" | "LibroUpdateManyMutationInput" | "LibroWhereInput" | "LibroWhereUniqueInput" | "UserCreateInput" | "UserUpdateInput" | "UserUpdateManyMutationInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "LibroOrderByInput" | "RoleFormat" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}