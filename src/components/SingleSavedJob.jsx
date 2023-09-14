import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SingleSavedJob = ({ data, index }) => {
  // Aggiungi 'index' come prop
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // Dispatch un'azione per rimuovere il lavoro in base all'indice nell'array
    dispatch({ type: "REMOVE_JOB", payload: index });
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button variant="danger" onClick={handleDeleteClick}>
          Delete job
        </Button>
      </Col>
    </Row>
  );
};

export default SingleSavedJob;
