"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var prisma_client_1 = require("./generated/prisma-client");
var path = require("path");
var nexus_prisma_1 = require("nexus-prisma");
var permissions_1 = require("./permissions");
var allTypes = require("./resolvers");
var nexus_prisma_2 = require("./generated/nexus-prisma");
var schema = nexus_prisma_1.makePrismaSchema({
    // Provide all the GraphQL types we've implemented
    types: allTypes,
    // Configure the interface to Prisma
    prisma: {
        datamodelInfo: nexus_prisma_2["default"],
        client: prisma_client_1.prisma
    },
    // Specify where Nexus should put the generated files
    outputs: {
        schema: path.join(__dirname, './generated/schema.graphql'),
        typegen: path.join(__dirname, './generated/nexus.ts')
    },
    // Configure nullability of input arguments: All arguments are non-nullable by default
    nonNullDefaults: {
        input: false,
        output: false
    },
    // Configure automatic type resolution for the TS representations of the associated types
    typegenAutoConfig: {
        sources: [
            {
                source: path.join(__dirname, './types.ts'),
                alias: 'types'
            },
        ],
        contextType: 'types.Context'
    }
});
var server = new graphql_yoga_1.GraphQLServer({
    schema: schema,
    middlewares: [permissions_1.permissions],
    context: function (request) {
        return __assign({}, request, { prisma: prisma_client_1.prisma });
    }
});
server.start(function () { return console.log("\uD83D\uDE80 Server ready at http://localhost:4000"); });
//# sourceMappingURL=index.js.map