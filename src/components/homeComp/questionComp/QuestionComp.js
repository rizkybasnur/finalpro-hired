import React from "react";
import "./QuestionComp.css";
const QuestionComp = () => {
  return (
    <div className="question-global">
      <div className="question">
        <div className="wraper-gambar">
          <div className="kuest">
            <div className="ga">
              <div className="gaimg">
                <img
                  src="https://i.ibb.co/Wfx2WT7/Vector-1.png"
                  alt="Vector-1"
                />
              </div>
              <h4 className="btn-question">More than 300k+ employers</h4>
            </div>
          </div>
          <div className="gambarbawah">
            <img
              src="https://i.ibb.co/ynZpCr6/Rectangle-10.png"
              alt="Rectangle-10"
            />
          </div>
          <div className="kotak">
            <h1 className="titleques">
              Millions of jobs. Find the one that suits you
            </h1>
            <p className="keterangan">
              Search all the open position on the web. Get your own personalized
              salary estimate. Read reviews on over 500.000 companies worldwide.
            </p>
            <button className="btn-ques">Get Started</button>
          </div>
        </div>

        <div className="ques">
          <p className="pengunjung">
            <b> 4M</b>
            <br />
            <p className="ditail">4 million daily active users</p>
          </p>
          <p className="pengunjung">
            <b> 12K</b> <br />
            <p className="ditail"> Over 12k open job positions</p>
          </p>
          <p className="pengunjung">
            <b>20M</b>
            <br />
            <p className="ditail">Over 20 million stories shared</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionComp;
