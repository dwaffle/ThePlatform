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
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const authenticator_1 = require("../../../middleware/authenticator");
const article_1 = require("../../../models/article");
function get(app) {
    app.get("/tasks/:taskId", authenticator_1.authenticateToken, (request, response) => __awaiter(this, void 0, void 0, function* () {
        const taskId = request.params.taskId;
        const foundTask = yield article_1.TaskModel.getById(taskId);
        if (foundTask) {
            response.send(foundTask);
        }
        else {
            response.status(404).send({
                error: 404,
                message: `Cannot find task with id ${taskId}`
            });
        }
    }));
}
exports.get = get;
//# sourceMappingURL=get.js.map