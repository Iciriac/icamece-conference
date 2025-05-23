import react from "react";

function Technical(props) {
    return (

        <div className="bg-[#FFFBFB]">     
            <p className="flex flex-col px-[5rem] leading-[2.5rem] font-normal">
                <span className="font-semibold"> {props.Name}</span>
                {/* <span>{props.Department}</span>
                <span>{props.Place}</span> */}
            </p>

        </div>
    );
    
}

export default Technical;