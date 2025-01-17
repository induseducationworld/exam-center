import errorHandler from "../../errorHandler";
import { toast } from "react-toastify";
import Token from "../../utils/Token";
import httpService from "../../utils/httpService";
export const responseSheetOfStudent = async ({ studentId, testId }) => {
  try {
    const { data } = await httpService.post(
      "/api/student/responseSheet",
      {
        studentId,
        testId,
      },
      Token()
    );

    toast.success(data);
    return data;
  } catch (ex) {
    errorHandler(ex);
  }
};

export const getResponsePdf = async (studentId, testId) => {
  try {
    const { data } = await httpService.post(
      "/api/student/responseSheet/pdf",
      {
        studentId,
        testId,
      },
      Token()
    );
    //console.log(data);
    return data;
  } catch (ex) {
    errorHandler(ex);
  }
};

export const addAnswerForGivenQuestion = async (body) => {
  try {
    const { data } = await httpService.post(
      "/api/student/updateResponse",
      body,
      Token()
    );
    toast.success(data);
  } catch (ex) {
    errorHandler(ex);
  }
};

export const uploadPdf = async (testId, studentId, pdf) => {
  try {
    const { data } = await httpService.post(
      "/api/student/pdf/upload",
      {
        testId,
        studentId,
        pdf,
      },
      Token()
    );
    toast.success(`ResponseSheet uploaded successfully`);
    return data;
  } catch (ex) {
    errorHandler(ex);
  }
};

export const checkGivenTestForStudent = async (testId, studentId) => {
  try {
    const { data } = await httpService.post(
      "/api/student/test/complete",
      { testId, studentId },
      Token()
    );
    //console.log(data);
    return data;
  } catch (ex) {
    errorHandler(ex);
  }
};
