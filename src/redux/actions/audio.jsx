import httpService from "../../utils/httpService";
import errorHandler from "../../errorHandler";
import Token from "../../utils/Token";

export const uploadAudio = async (testId, studentId, audioRecording) => {
  try {
    const { data } = await httpService.post(
      "/api/audio/upload",
      {
        testId,
        studentId,
        audioRecording,
      },
      Token()
    );
  } catch (ex) {
    errorHandler(ex);
  }
};

export const getAllAudioRec = async (testId, studentId) => {
  try {
    const { data } = await httpService.post(
      "/api/audio/get/all",
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
