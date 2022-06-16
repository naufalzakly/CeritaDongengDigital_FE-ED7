import { AiOutlineSend } from "react-icons/ai";
import "./index.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="col-2">
          <h4>Newsletter</h4>
          <p>stay Up to Date</p>
        </div>
        <div className="col-6">
          <input
            type="text"
            placeholder="Email Kamu..."
            className="newsletter-input"
          />
          <button className="btn btn-primary rounded">
            <AiOutlineSend />
          </button>
      </div>
    </div>
  );
};

export default Newsletter;
