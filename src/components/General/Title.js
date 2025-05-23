import React from "react";

function Title(props) {
    return(
        <div className="bg-[#FFFBFB] font-Open_Sans font-semibold">
            <h3 className="mb-2 text-2xl text-center tracking-[2px]">{props.title}</h3>
            <hr className="mx-auto my-0 w-[45rem] border-[1px] opacity-50"/>
        </div>
    );
}

export default Title;