import React from "react";
import { useSelector } from "react-redux";
import SingleSavedJob from "./SingleSavedJob";
import { Container } from "react-bootstrap";

const SavedJobs = () => {
  const savedJobs = useSelector(state => state.savedJobs.content);

  return (
    <Container>
      <h2>Saved Jobs</h2>
      {savedJobs.map((jobData, index) => (
        <SingleSavedJob key={"job-" + index} data={jobData} index={index} />
      ))}
    </Container>
  );
};

export default SavedJobs;
