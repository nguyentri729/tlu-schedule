"use strict";
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
exports.setAuth = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("./consts/index");
let access_token;
const axiosApiInstance = axios_1.default.create({
    baseURL: index_1.DKHSV_BASE_API + "/education/api",
});
axiosApiInstance.interceptors.request.use((config) => __awaiter(void 0, void 0, void 0, function* () {
    if (!access_token)
        throw new Error("Please login first !! ");
    if (access_token) {
        config.headers = {
            Authorization: `Bearer ${access_token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        };
    }
    return config;
}), (error) => {
    return Promise.reject(error);
});
function setAuth(token) {
    access_token = token;
}
exports.setAuth = setAuth;
exports.default = axiosApiInstance;
//# sourceMappingURL=agent.js.map