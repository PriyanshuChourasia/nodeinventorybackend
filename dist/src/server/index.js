"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInitialization = serverInitialization;
const env_config_1 = require("../config/env.config");
const port = env_config_1.env.PORT;
function serverInitialization(app) {
    app.listen(port, () => {
        console.log(`Application running at ${port}`);
        console.log(`Application url http://localhost:${port}`);
    });
    app.get("/", (req, res) => {
        res.status(200).json({
            data: "Inventory Management",
            success: true
        });
    });
}
//# sourceMappingURL=index.js.map