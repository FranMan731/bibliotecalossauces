"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var nexus_1 = require("nexus");
var nexus_prisma_1 = require("nexus-prisma");
var bcrypt_1 = require("bcrypt");
var utils_1 = require("../utils");
var jsonwebtoken_1 = require("jsonwebtoken");
exports.Mutation = nexus_prisma_1.prismaObjectType({
    name: 'Mutation',
    definition: function (t) {
        var _this = this;
        t.prismaFields(['*']);
        t.field('signup', {
            type: 'AuthPayload',
            args: {
                name: nexus_1.stringArg({ nullable: true }),
                email: nexus_1.stringArg(),
                password: nexus_1.stringArg()
            },
            resolve: function (_parent, _a, ctx) {
                var name = _a.name, email = _a.email, password = _a.password;
                return __awaiter(_this, void 0, void 0, function () {
                    var hashedPassword, user;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, bcrypt_1.hash(password, 10)];
                            case 1:
                                hashedPassword = _b.sent();
                                return [4 /*yield*/, ctx.prisma.createUser({
                                        name: name,
                                        email: email,
                                        password: hashedPassword
                                    })];
                            case 2:
                                user = _b.sent();
                                return [2 /*return*/, {
                                        token: jsonwebtoken_1.sign({ userId: user.id }, utils_1.APP_SECRET),
                                        user: user
                                    }];
                        }
                    });
                });
            }
        });
        t.field('login', {
            type: 'AuthPayload',
            args: {
                email: nexus_1.stringArg(),
                password: nexus_1.stringArg()
            },
            resolve: function (_parent, _a, context) {
                var email = _a.email, password = _a.password;
                return __awaiter(_this, void 0, void 0, function () {
                    var user, passwordValid;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, context.prisma.user({ email: email })];
                            case 1:
                                user = _b.sent();
                                if (!user) {
                                    throw new Error("Ning\u00FAn usuario encontrado con el siguiente email: " + email);
                                }
                                return [4 /*yield*/, bcrypt_1.compare(password, user.password)];
                            case 2:
                                passwordValid = _b.sent();
                                if (!passwordValid) {
                                    throw new Error('Contraseña incorrecta.');
                                }
                                return [2 /*return*/, {
                                        token: jsonwebtoken_1.sign({ userId: user.id }, utils_1.APP_SECRET),
                                        user: user
                                    }];
                        }
                    });
                });
            }
        });
        t.field('editRol', {
            type: 'User',
            args: {
                id: nexus_1.idArg(),
                role: nexus_1.stringArg()
            },
            resolve: function (_parent, _a, context) {
                var id = _a.id, role = _a.role;
                return __awaiter(_this, void 0, void 0, function () {
                    var user;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, context.prisma.user({ id: id })];
                            case 1:
                                user = _b.sent();
                                if (!user) {
                                    throw new Error("Ning\u00FAn usuario encontrado: " + id);
                                }
                                return [2 /*return*/, context.prisma.updateUser({
                                        where: { id: id },
                                        data: { role: role }
                                    })];
                        }
                    });
                });
            }
        });
    }
});
//# sourceMappingURL=Mutation.js.map