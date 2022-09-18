import "./Box.css";

function Box() {
  return (
    <>
      <div className="flexcontainer">
        <h1 className="schmeet">Scheduled Meetings:- </h1>
       
         
          <div className="box">
            <h2 className="meetiname">Techathon Meetup</h2>
            <p className="time">Starting time:- 18-09-2022:4:20</p>
            <p className="time">Ending Time:- 18-09-2022:5:20</p>
            
              <a href="https://meet.google.com/gvw-htrp-mmt" target="_blank" className="schmeetbtn">Attend Meeting</a>
          </div>
         
      </div>
    </>
  );
}

export default Box;
