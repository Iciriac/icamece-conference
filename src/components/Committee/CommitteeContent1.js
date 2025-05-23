import react from "react";

function CommitteeContent1(props) {
    return (

        <div className="bg-[#FFFBFB]">      

            <h1 className="p-5 mx-10 font-bold underline underline-offset-8 tracking-[1px]">{props.Title}</h1>
            
            <p className="flex flex-col px-[5rem] leading-[1.9rem] font-normal">
                <span className="font-semibold"> {props.Name},</span>
                <span className="font-semibold"> {props.Name1}</span>
                <span>{props.Designation},</span>
                <span>{props.Dept}</span>
                <span>{props.Organisation},</span>
                <span>{props.Location}.</span>
            </p>

        </div>
    );
    
}

export default CommitteeContent1;