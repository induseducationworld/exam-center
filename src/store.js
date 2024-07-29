import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { urlPathReducer, userLoginReducer } from "./redux/reducer/userReducer";
import { questionListReducer } from "./redux/reducer/questionReducer";
import {
  getTestPaperReducer,
  getSingleTestPaperReducer,
} from "./redux/reducer/testReducer";
import {
  registeredStudentListReducer,
  studentDetailReducer,
  studentTestListReducer,
} from "./redux/reducer/studentRegistrationReducer";

import {
  getSupervisorReducer,
  getSupervisorReqReducer,
  updateSupervisorReducer,
} from "./redux/reducer/supervisorReducer";
import { generateResultReducer } from "./redux/reducer/generateResultReducer";
import { groupListReducer } from "./redux/reducer/groupReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  urlPath: urlPathReducer,
  questionList: questionListReducer,
  getTestPaper: getTestPaperReducer,
  singleTestPaper: getSingleTestPaperReducer,
  registeredStudentList: registeredStudentListReducer,
  studentDetail: studentDetailReducer,
  generateResult: generateResultReducer,
  supervisorList: getSupervisorReducer,
  supervisorReqList: getSupervisorReqReducer,
  updateSupervisor: updateSupervisorReducer,
  groupList: groupListReducer,
  studentTestList: studentTestListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
