import anand from '../../Resources/Anand_paul.jpeg';

function Speaker1() {
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
                    <img className="float-right object-cover w-[350px] h-[300px] border-black"src={anand} alt='KeyNoteSpeaker-1'></img>
                    <div className="mt-[60px]">
                        <div className="font-semibold">Dr. Anand Paul,</div>
                        <div>Louisiana State University,</div>
                        <div>United States.</div>
                    </div>

                </div>
                
            </p>

        </div>
    );
    
}



export default Speaker1;