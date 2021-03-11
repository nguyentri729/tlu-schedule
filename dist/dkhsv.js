"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const agent_1 = __importStar(require("./agent"));
class DKHSV {
    constructor() { }
    auth(infoAuth) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield node_fetch_1.default("http://dkhsv.tlu.edu.vn:8099/education/oauth/token", {
                headers: {
                    accept: "application/json, text/plain, */*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/x-www-form-urlencoded",
                },
                referrer: "http://dkhsv.tlu.edu.vn/",
                referrerPolicy: "strict-origin-when-cross-origin",
                body: `client_id=education_client&grant_type=password&username=${infoAuth.username}&password=${infoAuth.password}&client_secret=password`,
                method: "POST",
                mode: "cors",
            }).then((res) => res.json());
            if (result.access_token)
                agent_1.setAuth(result.access_token);
            return result;
        });
    }
    getCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return agent_1.default.get("/users/getCurrentUser").then((res) => res.data);
        });
    }
    getSemesterInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return agent_1.default.get("/semester/semester_info").then((res) => res.data);
        });
    }
    getStudentCourseSubject(semesterId) {
        return __awaiter(this, void 0, void 0, function* () {
            return agent_1.default
                .get("/StudentCourseSubject/studentLoginUser/" + semesterId)
                .then((res) => res.data);
        });
    }
    getStudentmMark() {
        return __awaiter(this, void 0, void 0, function* () {
            return agent_1.default
                .get("/studentsubjectmark/getListMarkDetailStudent")
                .then((res) => res.data);
        });
    }
}
exports.default = DKHSV;
//# sourceMappingURL=dkhsv.js.map