import errorHandler from "../../errorHandler";
import Token from "../../utils/Token";
import httpService from "../../utils/httpService";
export const uploadImage = async (testId, studentId, image) => {
  try {
    const { data } = await httpService.post(
      "/api/snapshot/upload",
      {
        testId,
        studentId,
        image,
      },
      Token()
    );
  } catch (ex) {
    errorHandler(ex);
  }
};

export const getAllImages = async (testId, studentId) => {
  try {
    const { data } = await httpService.post(
      "/api/snapshot/get/all",
      {
        testId,
        studentId,
      },
      Token()
    );

    return data;
  } catch (ex) {
    errorHandler(ex);
  }
};
