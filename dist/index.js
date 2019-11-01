"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const wxapp_1 = __importDefault(require("./wxapp"));
commander_1.default
    .version('0.0.1')
    .option('-c, --config <path>', 'custom config file')
    .option('-s, --silent', 'silent log')
    .parse(process.argv);
wxapp_1.default();
//# sourceMappingURL=index.js.map