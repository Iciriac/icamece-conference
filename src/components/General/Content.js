import AboutConference from "../About/AboutConference"
import AboutSkcet from "../About/Abouts.js";
import CallForPaper from "../Call for Paper/CallForPaper";
import Committe from "../Committee/Committee";
import Contact from "../Contact/Contact";
import Keynote from "../Keynote/Keynote";
import Submission from "../Submission/Submission";
import Publication from "../Publication/Publication";
import Registration from "../Registration/Registration";
import Dates from "../Dates/Dates";
import Downloads from "../Downloads/Downloads";

import Venue from "../Venue/Venue";

function Content(props){

    const tab = props.currentTab;
    const pagestyle = "w-[85%] float-right bg-[#FFFBFB]  font-Open_Sans font-medium"
    if(tab === "Home")
    {
        return(
            <div className={pagestyle+"h-screen"}>
                <AboutConference />
            </div>
        );
    }
    else if(tab === "About")
    {
        return(
            <div className={pagestyle}>
                <AboutSkcet />
            </div>
        );
    }
    else if(tab === "Call for Papers")
    {
        return(
            <div className={pagestyle}>
                <CallForPaper />
            </div>
        );
    }
    else if(tab === "Committees")
    {
        return(
            <div className={pagestyle}>
                <Committe />
            </div>
        );
    }
    else if(tab === "Contact")
    {
        return(
            <div className={pagestyle}>
                <Contact />
            </div>
        );
    }
    else if(tab === "Keynote")
    {
        return(
            <div className={pagestyle}>
                <Keynote />
            </div>
        );
    }
    else if(tab === "Submission")
    {
        return(
            <div className={pagestyle}>
                <Submission />
            </div>
        );
    }
    else if(tab === "Publication")
    {
        return(
            <div className={pagestyle}>
                <Publication />
            </div>
        );
    }
    else if(tab === "Registration")
    {
        return(
            <div className={pagestyle}>
                <Registration />
            </div>
        );
    }
    else if(tab === "Important Dates")
    {
        return(
            <div className={pagestyle}>
                <Dates />
            </div>
        );
    }
    else if(tab === "Downloads")
    {
        return(
            <div className={pagestyle}>
                <Downloads />
            </div>
        );
    }
      else if(tab === "Venue")
      {
          return(
              <div className={pagestyle}>
                  <Venue />
              </div>
            );
      }

}

export default Content;