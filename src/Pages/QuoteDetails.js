import { useParams } from "react-router-dom";

const QuotesDetails = () => {
  const params = useParams();
  return (
    <div>
      <h1>Quotes Details</h1>
      <p>{params.quoteID}</p>
    </div>
  );
}

export default QuotesDetails;