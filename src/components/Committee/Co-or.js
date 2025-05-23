import react from "react";

function Committemem(props) {
    return (

        <div className="bg-[#FFFBFB]">     
            <p className="flex flex-col px-[5rem] leading-[2rem] font-normal">
                <span className="font-semibold"> {props.Name}</span>
                <span>{props.Designation}</span>
                {/* <span>{props.Dept}</span>
                <span>{props.Organisation},</span>
                <span>{props.Location}.</span> */}
            </p>

        </div>
    );
    
}

export default Committemem;


