const mongoose = require("mongoose");
const ENUM = require("../Roles");

const Attributes = mongoose.Schema({
  _id: false,
  phoneNumbers: [{ type: String, required: false }],
  emailIds: [{ type: String, required: false }],
  dob: { type: Date, required: false },
  bloodGroup: { type: String, required: false },
  age: { type: Number, required: false },
  gender: { type: String, enum: ENUM.GenderTypes, required: false },
  avatar: {
    type: String,
    required: false,
    default:
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
  },
  roll: { type: String, required: false },
  meta: { type: Object, required: false },
  assignedRoute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
  },
  assignedRoutePoint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoutePoint",
  },
});

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  uniqueId: { type: String, required: true, unique: true, default: null },
  attributes: Attributes,
  isCaretaker: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ENUM.UserRoles,
    required: true,
  },
  groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  // mappedGE: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Masterdata',
  //   default: null,
  // },
  primaryGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: [true, "organization is a required field"],
  },
  beacon: { type: mongoose.Schema.Types.ObjectId, ref: "Beacon" },
  beaconMac: { type: String ,readOnly: true},
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: new Date() },
  updatedOn: { type: Date, default: new Date() },
});

const Subject = (module.exports =
  mongoose.models.Subject || mongoose.model("Subject", SubjectSchema));

module.exports = Subject;
