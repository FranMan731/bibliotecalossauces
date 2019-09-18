"use strict";
// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
exports.__esModule = true;
exports.typeDefs = "type AggregateLibro {\n  count: Int!\n}\n\ntype AggregateUser {\n  count: Int!\n}\n\ntype BatchPayload {\n  count: Long!\n}\n\nscalar DateTime\n\ntype Libro {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  titulo: String!\n  fecha_publicado: Int\n  autor: String\n  editorial: String\n  edicion: String\n  tomo: String\n  descripcion: String\n  imagen: String\n  link: String\n}\n\ntype LibroConnection {\n  pageInfo: PageInfo!\n  edges: [LibroEdge]!\n  aggregate: AggregateLibro!\n}\n\ninput LibroCreateInput {\n  id: ID\n  titulo: String!\n  fecha_publicado: Int\n  autor: String\n  editorial: String\n  edicion: String\n  tomo: String\n  descripcion: String\n  imagen: String\n  link: String\n}\n\ntype LibroEdge {\n  node: Libro!\n  cursor: String!\n}\n\nenum LibroOrderByInput {\n  id_ASC\n  id_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  titulo_ASC\n  titulo_DESC\n  fecha_publicado_ASC\n  fecha_publicado_DESC\n  autor_ASC\n  autor_DESC\n  editorial_ASC\n  editorial_DESC\n  edicion_ASC\n  edicion_DESC\n  tomo_ASC\n  tomo_DESC\n  descripcion_ASC\n  descripcion_DESC\n  imagen_ASC\n  imagen_DESC\n  link_ASC\n  link_DESC\n}\n\ntype LibroPreviousValues {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  titulo: String!\n  fecha_publicado: Int\n  autor: String\n  editorial: String\n  edicion: String\n  tomo: String\n  descripcion: String\n  imagen: String\n  link: String\n}\n\ntype LibroSubscriptionPayload {\n  mutation: MutationType!\n  node: Libro\n  updatedFields: [String!]\n  previousValues: LibroPreviousValues\n}\n\ninput LibroSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: LibroWhereInput\n  AND: [LibroSubscriptionWhereInput!]\n  OR: [LibroSubscriptionWhereInput!]\n  NOT: [LibroSubscriptionWhereInput!]\n}\n\ninput LibroUpdateInput {\n  titulo: String\n  fecha_publicado: Int\n  autor: String\n  editorial: String\n  edicion: String\n  tomo: String\n  descripcion: String\n  imagen: String\n  link: String\n}\n\ninput LibroUpdateManyMutationInput {\n  titulo: String\n  fecha_publicado: Int\n  autor: String\n  editorial: String\n  edicion: String\n  tomo: String\n  descripcion: String\n  imagen: String\n  link: String\n}\n\ninput LibroWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  titulo: String\n  titulo_not: String\n  titulo_in: [String!]\n  titulo_not_in: [String!]\n  titulo_lt: String\n  titulo_lte: String\n  titulo_gt: String\n  titulo_gte: String\n  titulo_contains: String\n  titulo_not_contains: String\n  titulo_starts_with: String\n  titulo_not_starts_with: String\n  titulo_ends_with: String\n  titulo_not_ends_with: String\n  fecha_publicado: Int\n  fecha_publicado_not: Int\n  fecha_publicado_in: [Int!]\n  fecha_publicado_not_in: [Int!]\n  fecha_publicado_lt: Int\n  fecha_publicado_lte: Int\n  fecha_publicado_gt: Int\n  fecha_publicado_gte: Int\n  autor: String\n  autor_not: String\n  autor_in: [String!]\n  autor_not_in: [String!]\n  autor_lt: String\n  autor_lte: String\n  autor_gt: String\n  autor_gte: String\n  autor_contains: String\n  autor_not_contains: String\n  autor_starts_with: String\n  autor_not_starts_with: String\n  autor_ends_with: String\n  autor_not_ends_with: String\n  editorial: String\n  editorial_not: String\n  editorial_in: [String!]\n  editorial_not_in: [String!]\n  editorial_lt: String\n  editorial_lte: String\n  editorial_gt: String\n  editorial_gte: String\n  editorial_contains: String\n  editorial_not_contains: String\n  editorial_starts_with: String\n  editorial_not_starts_with: String\n  editorial_ends_with: String\n  editorial_not_ends_with: String\n  edicion: String\n  edicion_not: String\n  edicion_in: [String!]\n  edicion_not_in: [String!]\n  edicion_lt: String\n  edicion_lte: String\n  edicion_gt: String\n  edicion_gte: String\n  edicion_contains: String\n  edicion_not_contains: String\n  edicion_starts_with: String\n  edicion_not_starts_with: String\n  edicion_ends_with: String\n  edicion_not_ends_with: String\n  tomo: String\n  tomo_not: String\n  tomo_in: [String!]\n  tomo_not_in: [String!]\n  tomo_lt: String\n  tomo_lte: String\n  tomo_gt: String\n  tomo_gte: String\n  tomo_contains: String\n  tomo_not_contains: String\n  tomo_starts_with: String\n  tomo_not_starts_with: String\n  tomo_ends_with: String\n  tomo_not_ends_with: String\n  descripcion: String\n  descripcion_not: String\n  descripcion_in: [String!]\n  descripcion_not_in: [String!]\n  descripcion_lt: String\n  descripcion_lte: String\n  descripcion_gt: String\n  descripcion_gte: String\n  descripcion_contains: String\n  descripcion_not_contains: String\n  descripcion_starts_with: String\n  descripcion_not_starts_with: String\n  descripcion_ends_with: String\n  descripcion_not_ends_with: String\n  imagen: String\n  imagen_not: String\n  imagen_in: [String!]\n  imagen_not_in: [String!]\n  imagen_lt: String\n  imagen_lte: String\n  imagen_gt: String\n  imagen_gte: String\n  imagen_contains: String\n  imagen_not_contains: String\n  imagen_starts_with: String\n  imagen_not_starts_with: String\n  imagen_ends_with: String\n  imagen_not_ends_with: String\n  link: String\n  link_not: String\n  link_in: [String!]\n  link_not_in: [String!]\n  link_lt: String\n  link_lte: String\n  link_gt: String\n  link_gte: String\n  link_contains: String\n  link_not_contains: String\n  link_starts_with: String\n  link_not_starts_with: String\n  link_ends_with: String\n  link_not_ends_with: String\n  AND: [LibroWhereInput!]\n  OR: [LibroWhereInput!]\n  NOT: [LibroWhereInput!]\n}\n\ninput LibroWhereUniqueInput {\n  id: ID\n}\n\nscalar Long\n\ntype Mutation {\n  createLibro(data: LibroCreateInput!): Libro!\n  updateLibro(data: LibroUpdateInput!, where: LibroWhereUniqueInput!): Libro\n  updateManyLibroes(data: LibroUpdateManyMutationInput!, where: LibroWhereInput): BatchPayload!\n  upsertLibro(where: LibroWhereUniqueInput!, create: LibroCreateInput!, update: LibroUpdateInput!): Libro!\n  deleteLibro(where: LibroWhereUniqueInput!): Libro\n  deleteManyLibroes(where: LibroWhereInput): BatchPayload!\n  createUser(data: UserCreateInput!): User!\n  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User\n  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!\n  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!\n  deleteUser(where: UserWhereUniqueInput!): User\n  deleteManyUsers(where: UserWhereInput): BatchPayload!\n}\n\nenum MutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\ninterface Node {\n  id: ID!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Query {\n  libro(where: LibroWhereUniqueInput!): Libro\n  libroes(where: LibroWhereInput, orderBy: LibroOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Libro]!\n  libroesConnection(where: LibroWhereInput, orderBy: LibroOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LibroConnection!\n  user(where: UserWhereUniqueInput!): User\n  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!\n  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!\n  node(id: ID!): Node\n}\n\nenum RoleFormat {\n  ADMIN\n  EDITOR\n  LECTOR\n}\n\ntype Subscription {\n  libro(where: LibroSubscriptionWhereInput): LibroSubscriptionPayload\n  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload\n}\n\ntype User {\n  id: ID!\n  email: String!\n  password: String!\n  name: String\n  role: RoleFormat\n}\n\ntype UserConnection {\n  pageInfo: PageInfo!\n  edges: [UserEdge]!\n  aggregate: AggregateUser!\n}\n\ninput UserCreateInput {\n  id: ID\n  email: String!\n  password: String!\n  name: String\n  role: RoleFormat\n}\n\ntype UserEdge {\n  node: User!\n  cursor: String!\n}\n\nenum UserOrderByInput {\n  id_ASC\n  id_DESC\n  email_ASC\n  email_DESC\n  password_ASC\n  password_DESC\n  name_ASC\n  name_DESC\n  role_ASC\n  role_DESC\n}\n\ntype UserPreviousValues {\n  id: ID!\n  email: String!\n  password: String!\n  name: String\n  role: RoleFormat\n}\n\ntype UserSubscriptionPayload {\n  mutation: MutationType!\n  node: User\n  updatedFields: [String!]\n  previousValues: UserPreviousValues\n}\n\ninput UserSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: UserWhereInput\n  AND: [UserSubscriptionWhereInput!]\n  OR: [UserSubscriptionWhereInput!]\n  NOT: [UserSubscriptionWhereInput!]\n}\n\ninput UserUpdateInput {\n  email: String\n  password: String\n  name: String\n  role: RoleFormat\n}\n\ninput UserUpdateManyMutationInput {\n  email: String\n  password: String\n  name: String\n  role: RoleFormat\n}\n\ninput UserWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  email: String\n  email_not: String\n  email_in: [String!]\n  email_not_in: [String!]\n  email_lt: String\n  email_lte: String\n  email_gt: String\n  email_gte: String\n  email_contains: String\n  email_not_contains: String\n  email_starts_with: String\n  email_not_starts_with: String\n  email_ends_with: String\n  email_not_ends_with: String\n  password: String\n  password_not: String\n  password_in: [String!]\n  password_not_in: [String!]\n  password_lt: String\n  password_lte: String\n  password_gt: String\n  password_gte: String\n  password_contains: String\n  password_not_contains: String\n  password_starts_with: String\n  password_not_starts_with: String\n  password_ends_with: String\n  password_not_ends_with: String\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  role: RoleFormat\n  role_not: RoleFormat\n  role_in: [RoleFormat!]\n  role_not_in: [RoleFormat!]\n  AND: [UserWhereInput!]\n  OR: [UserWhereInput!]\n  NOT: [UserWhereInput!]\n}\n\ninput UserWhereUniqueInput {\n  id: ID\n  email: String\n}\n";
//# sourceMappingURL=prisma-schema.js.map