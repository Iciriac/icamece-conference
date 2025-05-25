import React from "react";
import Heading from "../General/Heading";
import Title from "../General/Title";
import StripTitle from "./StripTitle";
import List from "./List";

function CallForPaper() {
    const Contents1 = ["Advanced Manufacturing and Production Technologies", "Thermal and Fluid Sciences", "Materials Engineering and Characterization", "Design and Analysis of Mechanical Systems", "Robotics and Mechatronics", "Smart and Sustainable Manufacturing", "Automotive and Aerospace Engineering"]
    const Contents2 = ["Power Systems and Smart Grids", "Electric Vehicles and Energy Storage", "Renewable and Sustainable Energy Technologies", "Control Systems and Instrumentation", "Embedded Systems and VLSI Design", "Sensors, Actuators, and MEMS", "High Voltage and Electrical Machines"]
    const Contents3 = ["Artificial Intelligence and Machine Learning", "Computational Fluid Dynamics and Heat Transfer", "High-Performance and Cloud Computing", "Signal and Image Processing", "Internet of Things (IoT) and Cyber-Physical Systems", "Digital Twins and Industry 4.0", "Data Analytics and Intelligent Systems"]
    //const dates = ["Conference date: 21.4.2022 & 22.4.2022","Paper submission: 11.02.2022","Acceptance date: 25.02.2022","Camera ready paper: 11.03.2022","Registration last date: 31.03.2022"]
    return (
        <div>
            <Heading />
            <div>
                <Title title="Call for Papers" />
                <p className="text-center text-[1.1rem] mt-[3rem]">The International Conference on Advances in Mechanical, Electrical and Computational Engineering (ICAMECE 2025) welcomes high-quality contributions across a wide spectrum of topics. The major themes of the conference include, but are not limited to:
                </p>
            </div>

            <div>
                <StripTitle title="Mechanical Engineering" />
                <div className="flex justify-center">
                    <ul className="grid grid-cols-2 gap-x-[18rem] gap-3 list-disc">
                        {Contents1.map((content1) => <List content={content1} style="w-[19rem] text-[1.1rem]" key={content1} />)}
                    </ul>
                </div>
            </div>

            <div>
                <StripTitle title="Electrical and Electronics Engineering" />
                <div className="flex justify-center mb-[3rem]">
                    <ul className="grid grid-cols-2 gap-x-[18rem] gap-3 list-disc">
                        {Contents2.map((content1) => <List content={content1} style="w-[20rem] text-[1.1rem]" key={content1} />)}
                    </ul>
                </div>
            </div>

            <div>
                <StripTitle title="Computational Technologies" />
                <div className="flex justify-center mb-[3rem]">
                    <ul className="grid grid-cols-2 gap-x-[18rem] gap-3 list-disc">
                        {Contents3.map((content1) => <List content={content1} style="w-[20rem] text-[1.1rem]" key={content1} />)}
                    </ul>
                </div>
            </div>


            {/* <div className="ml-[7rem] my-[4rem]">
                <h3 className="text-[1.2rem] mb-[.8rem] font-semibold">Important Dates</h3>
                <div className="pl-[4rem]">
                    <ul className="list-disc">
                        {dates.map((date) => <List content={date} style = "text-[1.1rem] mb-[.8rem]" key={date}/>)}
                    </ul>
                </div>
            </div>
            <div className="ml-[7rem] mb-[3rem]">
                <h3 className="text-[1.2rem] mb-[.8rem] font-semibold">Publication</h3>
                <p className="pl-[4rem] text-[1.1rem]">All the accepted and presented papers will be published in Scopus Indexed Journal.</p>
            </div> */}
        </div>
    );
}

export default CallForPaper;