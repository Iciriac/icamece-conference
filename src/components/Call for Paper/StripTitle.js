import react from "react";

function StripTitle(props) {
    return(
        <div className="mt-[1rem] bg-[#206dac] text-white p-[.4rem] px-[4.5rem] mb-[2rem] mx-[3rem]">
            <h1 className="text-[1.2rem]">{props.title}</h1>
        </div>
    );
}

export default StripTitle;