"use strict";
exports.__esModule = true;
var nexus_prisma_1 = require("nexus-prisma");
exports.User = nexus_prisma_1.prismaObjectType({
    name: 'User',
    definition: function (t) {
        t.prismaFields([
            'id',
            'name',
            'email',
            'role'
        ]);
    }
});
//# sourceMappingURL=User.js.map