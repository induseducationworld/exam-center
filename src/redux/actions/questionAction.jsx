import * as question from "../constants/questionConstant";
import httpService from "../../utils/httpService";
import { toast } from "react-toastify";
import Token from "../../utils/Token";
import errorHandler from "../../errorHandler";
import { getNotConductedTestPaper } from "./testAction";
export const addQuestion = (questions, newQuestion) => async (dispatch) => {
  try {
    const { data } = await httpService.post(
      "/api/questions/create",
      newQuestion,
      Token()
    );
    const arr = [...questions];
    arr.push(data);
    dispatch({ type: question.QUESTION_LIST_SUCCESS, payload: err });
  } catch (err) {
    errorHandler(err);
  }
};

export const getAllQuestions = () => async (dispatch, getState) => {
  try {
    dispatch({ type: question.QUESTION_LIST_REQUEST });

    const { data } = await httpService.get(
      "/api/questions/details/all",
      Token()
    );

    dispatch({
      type: question.QUESTION_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    errorHandler(err);
  }
};

export const deleteQuestion = (questions, id) => async (dispatch, getState) => {
  try {
    const { data } = await httpService.delete(
      `/api/questions/delete/${id}`,
      Token()
    );
    const arr = questions.filter((ques) => ques._id !== id);

    dispatch({ type: question.QUESTION_LIST_SUCCESS, payload: arr });
    dispatch(getNotConductedTestPaper());
    toast.success(data);
  } catch (err) {
    errorHandler(err);
  }
};
