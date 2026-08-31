const { validateAdminArgs } = require('firebase-admin/data-connect');

const connectorConfig = {
  connector: 'example',
  serviceId: 'mohamedtazi',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

function createUserAccount(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateUserAccount', undefined, inputOpts);
}
exports.createUserAccount = createUserAccount;

function createServiceRequest(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateServiceRequest', inputVars, inputOpts);
}
exports.createServiceRequest = createServiceRequest;

function updateServiceRequestStatus(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateServiceRequestStatus', inputVars, inputOpts);
}
exports.updateServiceRequestStatus = updateServiceRequestStatus;

function deleteServiceRequest(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeleteServiceRequest', inputVars, inputOpts);
}
exports.deleteServiceRequest = deleteServiceRequest;

function getMyServiceRequests(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetMyServiceRequests', undefined, inputOpts);
}
exports.getMyServiceRequests = getMyServiceRequests;

function createJobAssignment(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateJobAssignment', inputVars, inputOpts);
}
exports.createJobAssignment = createJobAssignment;

function updateJobAssignmentTimes(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateJobAssignmentTimes', inputVars, inputOpts);
}
exports.updateJobAssignmentTimes = updateJobAssignmentTimes;

function deleteJobAssignment(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeleteJobAssignment', inputVars, inputOpts);
}
exports.deleteJobAssignment = deleteJobAssignment;

function listAllJobAssignments(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListAllJobAssignments', undefined, inputOpts);
}
exports.listAllJobAssignments = listAllJobAssignments;

function addWorkDoc(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('AddWorkDoc', inputVars, inputOpts);
}
exports.addWorkDoc = addWorkDoc;

function removeWorkDoc(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('RemoveWorkDoc', inputVars, inputOpts);
}
exports.removeWorkDoc = removeWorkDoc;

function updateWorkDoc(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateWorkDoc', inputVars, inputOpts);
}
exports.updateWorkDoc = updateWorkDoc;

function listWorkDocs(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListWorkDocs', inputVars, inputOpts);
}
exports.listWorkDocs = listWorkDocs;

function submitFeedback(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('SubmitFeedback', inputVars, inputOpts);
}
exports.submitFeedback = submitFeedback;

function deleteFeedback(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeleteFeedback', inputVars, inputOpts);
}
exports.deleteFeedback = deleteFeedback;

function getJobFeedback(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetJobFeedback', inputVars, inputOpts);
}
exports.getJobFeedback = getJobFeedback;

