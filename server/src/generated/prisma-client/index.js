"use strict";
// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
exports.__esModule = true;
var prisma_client_lib_1 = require("prisma-client-lib");
var prisma_schema_1 = require("./prisma-schema");
/**
 * Model Metadata
 */
exports.models = [
    {
        name: "User",
        embedded: false
    },
    {
        name: "RoleFormat",
        embedded: false
    },
    {
        name: "Libro",
        embedded: false
    }
];
/**
 * Type Defs
 */
exports.Prisma = prisma_client_lib_1.makePrismaClientClass({
    typeDefs: prisma_schema_1.typeDefs,
    models: exports.models,
    endpoint: "https://us1.prisma.sh/franco-manzanares-041764/server-cloud/devz"
});
exports.prisma = new exports.Prisma();
//# sourceMappingURL=index.js.map