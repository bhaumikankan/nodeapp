const mongoose = require('mongoose');
const ENUM = require('../Roles');

const Schema = mongoose.Schema;

const refObjectId = Schema.ObjectId;

const InfraPresenceSchema = new mongoose.Schema(
  {
    organization: { type: refObjectId, ref: 'Organization' },
    beaconMac: {
      type: String,
      required: true,
    },
    role: {
        type: String,
        enum: ENUM.UserRoles,
        required: true,
    },
    primaryGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
    },
    uniqueId: { type: String, required: true, unique: true, default: null },
    gatewayAttachmentType: {
      type: String,
      //   validate: {
      //     validate: (_) => ENUMS.GATEWAY_TYPE_EVENT_TYPES.includes(this.type),
      //     message: (_) => 'gatewayAttachType is required',
      //   },
    },
    asset: { type: refObjectId, ref: 'Subject' },
    status: { type: String },
    data: { type: Object },
    confidence: String,
    entrySession: { type: refObjectId, ref: 'LocationEngineLog' },
    exitedSession: { type: refObjectId, ref: 'LocationEngineLog' },
    resolved: { type: Boolean, default: false },
    entryTime: { type: Date, default: new Date() },
    exitTime: { type: Date },
  },
  { timestamps: true }
);

InfraPresenceSchema.index({ beaconMac: 1, gatewayMac: 1, organization: 1, gatewayAttachType: 1, status: 1, type: 1 });
InfraPresenceSchema.index({ asset: 1, organization: 1, beaconMac: 1, gatewayAttachType: 1, type: 1, resolved: 1 });
InfraPresenceSchema.index({ beaconMac: 1, gatewayMac: 1, organization: 1, gatewayAttachType: 1, status: 1, type: 1 });
InfraPresenceSchema.index({ organization: 1, gatewayAttachType: 1, type: 1, beaconMac: 1, updatedAt: 1, resolved: 1 });
InfraPresenceSchema.index({ organization: 1, type: 1, resolved: 1, createdAt: 1 });
InfraPresenceSchema.index({ status: 1, type: 1, updatedAt: 1, resolved: 1 });
InfraPresenceSchema.index({ type: 1, resolved: 1, createdAt: 1 });

const InfraPresence = mongoose.models.InfraPresence || mongoose.model('InfraPresence', InfraPresenceSchema);

module.exports = InfraPresence;