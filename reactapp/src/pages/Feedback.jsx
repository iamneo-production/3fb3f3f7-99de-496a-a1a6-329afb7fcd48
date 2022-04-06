import React ,{useState}from 'react';
import { useParams,useLocation,Link,useNavigate } from "react-router-dom";
import './Feedback.css';

function Feedback(props) {
  const { state } = useLocation();
  const email1 = state.email;
  console.log(email1);

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/',
    'Access-Control-Allow-Methods' : 'OPTIONS, DELETE, POST, GET, PATCH, PUT'
  });
    // States for registration
    const [fname, setfName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [complaints, setComplaints] = useState('');
    const [message, setMessage] = useState("");
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
      setfName(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the email change
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
   
     // Handling the mobilenumber change
     const handleMobileNumber = (e) => {
        setMobileNumber(e.target.value);
        setSubmitted(false);
      };

      const handleSuggestions = (e) => {
        setSuggestions(e.target.value);
        setSubmitted(false);
      };

      const handleComplaints = (e) => {
        setComplaints(e.target.value);
        setSubmitted(false);
      };
    

    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://8080-deacebeebfccecfccdceceefcbafdfb.examlyiopb.examly.io/saveFeedback",  {
          headers: myHeaders,
          method: "POST",
          body: JSON.stringify({   
            name:fname,     
            email: email,
            mobileNumber: mobileNumber,
            suggestions : suggestions,
            complaints : complaints
         }),
        });
        // let resJson = await res.json();
        if (res.status === 200) {  
          alert('Feedback Submitted')
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };



  return(
  <div class="topnav">
      <div>
          <center>Car Pool is fun</center> 
      </div>
      <div class="topnav-left">
          <label> RIDE-SHARING </label>
      </div>
      <div class="topnav-right">
      <Link to="/Home" state={{ email: email }}>
         Home   
      </Link>    
       {/* <a href = './Profile'> Profile </a> */}
     <Link to="/profile" state={{ email: email }}>
         Profile   
      </Link>     
      <Link to="/RoutePage" state={{ email: state }}>
    Route   
    </Link> 
    <Link to="/Feedback" state={{ email: state }}>
    Feedback   
    </Link> 
       <a href="./">Logout</a>
      </div>

<div class="container">    
  <form>    
    <div class="row">    
      <div class="col-25">    
        <label for="fname">Name</label>    
      </div>    
      <div class="col-75">    
        <input  className="input"  type="text" id="fname"  value={fname} onChange={handleName} name="firstname" placeholder="Your Name.."/>    
      </div>    
    </div>    
    <div class="row">    
      <div class="col-25">    
        <label for="lname">Mobile Number</label>    
      </div>    
      <div class="col-75">    
        <input type="text" id="lname" value={mobileNumber} name="Mobile Number" onChange={handleMobileNumber} placeholder="Mobile Number"/>    
      </div>    
    </div>    
    <div class="row">    
        <div class="col-25">    
          <label for="email\
          
          ">Mail Id</label>    
        </div>    
        <div class="col-75">    
          <input type="email1" id="email1" onChange={handleEmail} name="mailid" value={email} placeholder="Your mail id.."/>    
        </div>    
    </div>    
    <div class="row">    
      <div class="col-25">    
        <label for="feed_back">Suggestions</label>    
      </div>    
      <div class="col-45">    
        <textarea id="subject" name="subject" onChange={handleSuggestions} value={suggestions} placeholder="Write something.."  onfocus="this.blur()"></textarea>    
      </div>    
    </div>    
   <div class="row">    
      <div class="col-25">    
        <label for="feed_back">Complaints</label>    
      </div>    
      <div class="col-45">    
        <textarea id="complaints" name="subject" onChange={handleComplaints} value={complaints} placeholder="Write something.." onfocus="this.blur()"></textarea>    
      </div>    
    </div>    
    <div  class="row">
          <button id = 'Submit' onClick={handleSubmit} className="btn" type="submit">
           Submit
          </button>
  </div>
  </form>    
  </div>    
  </div>
  );
}

export default Feedback