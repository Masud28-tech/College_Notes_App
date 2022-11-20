export const host = "http://localhost:5000";

export const registerStudentRoute = `${host}/api/auth/studentRegister`;
export const loginStudentRoute = `${host}/api/auth/studentLogin`;

export const registerTeacherRoute = `${host}/api/auth/teacherRegister`;
export const loginTeacherRoute = `${host}/api/auth/teacherLogin`;

export const registerAdminRoute = `${host}/api/auth/adminRegister`;
export const loginAdminRoute = `${host}/api/auth/adminLogin`;

export const addNotesDataRoute = `${host}/api/data/addNotesData`;
export const fetchNotesDataRoute = `${host}/api/data/fetchNotesData`;
export const uploadPDFNotesRoute = `${host}/api/data/pushIntoTopicsPDFNotes`;
export const uploadImageNotesRoute = `${host}/api/data/pushIntoTopicsImageNotes`;
