import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface AddWorkDocData {
  workDocumentation_insert: WorkDocumentation_Key;
}

export interface AddWorkDocVariables {
  jobId: UUIDString;
  url: string;
  type: string;
}

export interface CreateJobAssignmentData {
  jobAssignment_insert: JobAssignment_Key;
}

export interface CreateJobAssignmentVariables {
  reqId: UUIDString;
  techId: UUIDString;
  time: TimestampString;
}

export interface CreateServiceRequestData {
  serviceRequest_insert: ServiceRequest_Key;
}

export interface CreateServiceRequestVariables {
  desc: string;
}

export interface CreateUserAccountData {
  user_insert: User_Key;
}

export interface DeleteFeedbackData {
  feedback_delete?: Feedback_Key | null;
}

export interface DeleteFeedbackVariables {
  id: UUIDString;
}

export interface DeleteJobAssignmentData {
  jobAssignment_delete?: JobAssignment_Key | null;
}

export interface DeleteJobAssignmentVariables {
  id: UUIDString;
}

export interface DeleteServiceRequestData {
  serviceRequest_delete?: ServiceRequest_Key | null;
}

export interface DeleteServiceRequestVariables {
  id: UUIDString;
}

export interface Feedback_Key {
  id: UUIDString;
  __typename?: 'Feedback_Key';
}

export interface GetJobFeedbackData {
  feedbacks: ({
    rating: number;
    comment: string;
    client: {
      name: string;
    };
  })[];
}

export interface GetJobFeedbackVariables {
  jobId: UUIDString;
}

export interface GetMyServiceRequestsData {
  serviceRequests: ({
    id: UUIDString;
    description: string;
    status: string;
  } & ServiceRequest_Key)[];
}

export interface JobAssignment_Key {
  id: UUIDString;
  __typename?: 'JobAssignment_Key';
}

export interface ListAllJobAssignmentsData {
  jobAssignments: ({
    id: UUIDString;
    scheduledTime: TimestampString;
    technician: {
      name: string;
    };
  } & JobAssignment_Key)[];
}

export interface ListWorkDocsData {
  workDocumentations: ({
    fileUrl: string;
    type: string;
  })[];
}

export interface ListWorkDocsVariables {
  jobId: UUIDString;
}

export interface RemoveWorkDocData {
  workDocumentation_delete?: WorkDocumentation_Key | null;
}

export interface RemoveWorkDocVariables {
  id: UUIDString;
}

export interface ServiceRequest_Key {
  id: UUIDString;
  __typename?: 'ServiceRequest_Key';
}

export interface SubmitFeedbackData {
  feedback_insert: Feedback_Key;
}

export interface SubmitFeedbackVariables {
  jobId: UUIDString;
  rating: number;
  comment: string;
}

export interface UpdateJobAssignmentTimesData {
  jobAssignment_update?: JobAssignment_Key | null;
}

export interface UpdateJobAssignmentTimesVariables {
  id: UUIDString;
  start?: TimestampString | null;
  end?: TimestampString | null;
}

export interface UpdateServiceRequestStatusData {
  serviceRequest_update?: ServiceRequest_Key | null;
}

export interface UpdateServiceRequestStatusVariables {
  id: UUIDString;
  status: string;
}

export interface UpdateWorkDocData {
  workDocumentation_update?: WorkDocumentation_Key | null;
}

export interface UpdateWorkDocVariables {
  id: UUIDString;
  url: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface WorkDocumentation_Key {
  id: UUIDString;
  __typename?: 'WorkDocumentation_Key';
}

/** Generated Node Admin SDK operation action function for the 'CreateUserAccount' Mutation. Allow users to execute without passing in DataConnect. */
export function createUserAccount(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserAccountData>>;
/** Generated Node Admin SDK operation action function for the 'CreateUserAccount' Mutation. Allow users to pass in custom DataConnect instances. */
export function createUserAccount(options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserAccountData>>;

/** Generated Node Admin SDK operation action function for the 'CreateServiceRequest' Mutation. Allow users to execute without passing in DataConnect. */
export function createServiceRequest(dc: DataConnect, vars: CreateServiceRequestVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateServiceRequestData>>;
/** Generated Node Admin SDK operation action function for the 'CreateServiceRequest' Mutation. Allow users to pass in custom DataConnect instances. */
export function createServiceRequest(vars: CreateServiceRequestVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateServiceRequestData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateServiceRequestStatus' Mutation. Allow users to execute without passing in DataConnect. */
export function updateServiceRequestStatus(dc: DataConnect, vars: UpdateServiceRequestStatusVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateServiceRequestStatusData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateServiceRequestStatus' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateServiceRequestStatus(vars: UpdateServiceRequestStatusVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateServiceRequestStatusData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteServiceRequest' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteServiceRequest(dc: DataConnect, vars: DeleteServiceRequestVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteServiceRequestData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteServiceRequest' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteServiceRequest(vars: DeleteServiceRequestVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteServiceRequestData>>;

/** Generated Node Admin SDK operation action function for the 'GetMyServiceRequests' Query. Allow users to execute without passing in DataConnect. */
export function getMyServiceRequests(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetMyServiceRequestsData>>;
/** Generated Node Admin SDK operation action function for the 'GetMyServiceRequests' Query. Allow users to pass in custom DataConnect instances. */
export function getMyServiceRequests(options?: OperationOptions): Promise<ExecuteOperationResponse<GetMyServiceRequestsData>>;

/** Generated Node Admin SDK operation action function for the 'CreateJobAssignment' Mutation. Allow users to execute without passing in DataConnect. */
export function createJobAssignment(dc: DataConnect, vars: CreateJobAssignmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateJobAssignmentData>>;
/** Generated Node Admin SDK operation action function for the 'CreateJobAssignment' Mutation. Allow users to pass in custom DataConnect instances. */
export function createJobAssignment(vars: CreateJobAssignmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateJobAssignmentData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateJobAssignmentTimes' Mutation. Allow users to execute without passing in DataConnect. */
export function updateJobAssignmentTimes(dc: DataConnect, vars: UpdateJobAssignmentTimesVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateJobAssignmentTimesData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateJobAssignmentTimes' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateJobAssignmentTimes(vars: UpdateJobAssignmentTimesVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateJobAssignmentTimesData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteJobAssignment' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteJobAssignment(dc: DataConnect, vars: DeleteJobAssignmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteJobAssignmentData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteJobAssignment' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteJobAssignment(vars: DeleteJobAssignmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteJobAssignmentData>>;

/** Generated Node Admin SDK operation action function for the 'ListAllJobAssignments' Query. Allow users to execute without passing in DataConnect. */
export function listAllJobAssignments(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListAllJobAssignmentsData>>;
/** Generated Node Admin SDK operation action function for the 'ListAllJobAssignments' Query. Allow users to pass in custom DataConnect instances. */
export function listAllJobAssignments(options?: OperationOptions): Promise<ExecuteOperationResponse<ListAllJobAssignmentsData>>;

/** Generated Node Admin SDK operation action function for the 'AddWorkDoc' Mutation. Allow users to execute without passing in DataConnect. */
export function addWorkDoc(dc: DataConnect, vars: AddWorkDocVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AddWorkDocData>>;
/** Generated Node Admin SDK operation action function for the 'AddWorkDoc' Mutation. Allow users to pass in custom DataConnect instances. */
export function addWorkDoc(vars: AddWorkDocVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AddWorkDocData>>;

/** Generated Node Admin SDK operation action function for the 'RemoveWorkDoc' Mutation. Allow users to execute without passing in DataConnect. */
export function removeWorkDoc(dc: DataConnect, vars: RemoveWorkDocVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<RemoveWorkDocData>>;
/** Generated Node Admin SDK operation action function for the 'RemoveWorkDoc' Mutation. Allow users to pass in custom DataConnect instances. */
export function removeWorkDoc(vars: RemoveWorkDocVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<RemoveWorkDocData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateWorkDoc' Mutation. Allow users to execute without passing in DataConnect. */
export function updateWorkDoc(dc: DataConnect, vars: UpdateWorkDocVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateWorkDocData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateWorkDoc' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateWorkDoc(vars: UpdateWorkDocVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateWorkDocData>>;

/** Generated Node Admin SDK operation action function for the 'ListWorkDocs' Query. Allow users to execute without passing in DataConnect. */
export function listWorkDocs(dc: DataConnect, vars: ListWorkDocsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListWorkDocsData>>;
/** Generated Node Admin SDK operation action function for the 'ListWorkDocs' Query. Allow users to pass in custom DataConnect instances. */
export function listWorkDocs(vars: ListWorkDocsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListWorkDocsData>>;

/** Generated Node Admin SDK operation action function for the 'SubmitFeedback' Mutation. Allow users to execute without passing in DataConnect. */
export function submitFeedback(dc: DataConnect, vars: SubmitFeedbackVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<SubmitFeedbackData>>;
/** Generated Node Admin SDK operation action function for the 'SubmitFeedback' Mutation. Allow users to pass in custom DataConnect instances. */
export function submitFeedback(vars: SubmitFeedbackVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<SubmitFeedbackData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteFeedback' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteFeedback(dc: DataConnect, vars: DeleteFeedbackVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteFeedbackData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteFeedback' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteFeedback(vars: DeleteFeedbackVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteFeedbackData>>;

/** Generated Node Admin SDK operation action function for the 'GetJobFeedback' Query. Allow users to execute without passing in DataConnect. */
export function getJobFeedback(dc: DataConnect, vars: GetJobFeedbackVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetJobFeedbackData>>;
/** Generated Node Admin SDK operation action function for the 'GetJobFeedback' Query. Allow users to pass in custom DataConnect instances. */
export function getJobFeedback(vars: GetJobFeedbackVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetJobFeedbackData>>;

