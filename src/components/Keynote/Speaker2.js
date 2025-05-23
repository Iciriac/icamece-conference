import react from "react";
import muthiah from '../../Resources/NirmalKrishna.jpeg';

function Speaker2() {
    return (

        <div className="bg-[#FFFBFB]">      

            {/* <h1 className="underline underline-offset-8 font-semibold p-5 mx-10 text-[1.2rem]">{props.Title}</h1>
             */}
            <p className="flex flex-col px-[5rem] mb-[3rem] leading-[1.9rem] font-normal">
                {/* <span className="font-semibold">{props.Name},</span>
                <span>{props.Designation},</span>
                <span>{props.Dept},</span>
                <span>{props.Organisation},</span>
                <span>{props.Location}.</span>
                <img className="w-[400px] h-[400px]"src={props.image}></img> */}
                <div>
                    <img className="float-left w-[250px] object-cover h-[300px] border-black"src={muthiah}></img>
                    <div className="float-right mt-[50px] mr-[350px]">
                        <div className="font-semibold">Mr. Nirmal Krishna R,</div>
                        <div>R&D Engineer, Automation Control,</div>
                        <div>Nordic Semiconductor,</div>
                        <div>Norway.</div>
                    </div>

                </div>
                
            </p>

        </div>
    );
    
}



export default Speaker2;