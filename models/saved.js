const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
    isSaved: { type: Boolean, required: true, default: true },
    hasApplied: { type: Boolean, required: true, default: false },
    jobSite: { type: String, required: true },
    jobId: [Schema.Types.Mixed],
    empId: [Schema.Types.Mixed],
    easily: Boolean,
    jobField: String,
    jobLocation: String,
    companyImage: String,
    jobRating: String,
    salaryRange: String,
    minSalary: String,
    medSalary: String,
    maxSalary: String,
    jobCompany: String,
    positionTitle: String,
    employerId : String,
    jobReqId : String,
    jobDescription : String,
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;