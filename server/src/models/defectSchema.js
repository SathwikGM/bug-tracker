"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
// Defects schema
var defectsSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        "default": function () { return new mongoose_1["default"].Types.ObjectId(); }
    },
    defectId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owners: [{
            type: String
        }],
    status: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    environment: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        "default": Date.now
    }
});
// Create the Mongoose model
exports["default"] = mongoose_1["default"].model('Defects', defectsSchema);
