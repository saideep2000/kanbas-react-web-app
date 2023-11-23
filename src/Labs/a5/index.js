import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const link_a5 = process.env.REACT_APP_API_BASE + "/a5/welcome"
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href = {link_a5}
             className="list-group-item">
            Welcome
          </a>
        </div>
        <h2>SimpleAPIExamples</h2>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;