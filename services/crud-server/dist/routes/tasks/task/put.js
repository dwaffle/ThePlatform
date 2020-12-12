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
exports.put = void 0;
const authenticator_1 = require("../../../middleware/authenticator");
const article_1 = require("../../../models/article");
function put(app) {
    app.put("/tasks/:taskId", authenticator_1.authenticateToken, (request, response) => __awaiter(this, void 0, void 0, function* () {
        const taskId = request.params.taskId;
        const currentTask = yield article_1.TaskModel.getById(taskId);
        if (!currentTask) {
            response.status(404).send({
                error: 404,
                message: `Cannot find task with id ${taskId}`
            });
            return;
        }
        if (request.body.id && request.body.id !== taskId) {
            response.status(400).send({
                error: 400,
                message: `The task id (${taskId}) sent in the request path does not match the id in the request body (${request.body.id})`
            });
            return;
        }
        const task = yield article_1.TaskModel.updateFromJson(request.body);
        response.status(200).send(task);
    }));
}
exports.put = put;
//# sourceMappingURL=put.js.map