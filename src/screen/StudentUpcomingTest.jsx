import React, { useEffect } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { studentTestPaperList } from "../redux/actions/studentRegistrationAction";
import StudentTestTable from "../components/Group/StudentGroupTestTable";
import Loader from "../utils/Loader";

const StudentUpcomingTest = () => {
  const { loading, notGivenPaper } = useSelector(
    (state) => state.studentTestList
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!notGivenPaper) dispatch(studentTestPaperList());
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      <Row className="align-items-center">
        <Col>
          <h3 style={{ color: "black" }}>Upcoming Test</h3>
        </Col>
        <Col className="text-right">
          <Button
            variant="outline-primary"
            className="my-3"
            onClick={() => dispatch(studentTestPaperList())}
          >
            <i className="fas fa-sync"></i>&nbsp;&nbsp;Reload
          </Button>
        </Col>
      </Row>
      <StudentTestTable isShow={true} all={true} testPapers={notGivenPaper} />
    </Container>
  );
};

export default StudentUpcomingTest;
