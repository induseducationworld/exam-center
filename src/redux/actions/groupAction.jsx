import { toast } from "react-toastify";
import * as group from "../constants/groupConstant";
import errorHandler from "../../errorHandler";
import httpService from "../../utils/httpService";
import Token from "../../utils/Token";

export const getAllGroup = () => async (dispatch) => {
  try {
    dispatch({ type: group.GROUP_LIST_REQUEST });
    const { data } = await httpService.get("/api/groups/allGroup", Token());

    dispatch({ type: group.GROUP_LIST_SUCCESS, payload: data.group });
  } catch (err) {
    errorHandler(err);
  }
};

export const createGroup = async (groupName, groupCode) => {
  try {
    const { data } = await httpService.post(
      "/api/groups/create-group",
      { groupName, groupCode },
      Token()
    );
    toast.success("Successfully created.");
  } catch (err) {
    errorHandler(err);
  }
};

export const joinGroup = async (groupCode) => {
  try {
    const { data } = await httpService.post(
      "/api/groups/join-group",
      { groupCode },
      Token()
    );

    if (typeof data === "string") toast.info(data);
  } catch (err) {
    errorHandler(err);
  }
};

export const getGroupStudents = async (groupId) => {
  try {
    const { data } = await httpService.post(
      "/api/groups/students",
      { groupId },
      Token()
    );
    return data;
  } catch (err) {
    errorHandler();
  }
};

export const getGroupTestPaper = async (groupId) => {
  try {
    let { data } = await httpService.post(
      "/api/groups/tests",
      { groupId },
      Token()
    );
    data = [].concat(data).sort((a, b) => (a.createdAt ? 1 : -1));
    return data;
  } catch (err) {
    errorHandler();
  }
};
