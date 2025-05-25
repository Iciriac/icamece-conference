import Heading from "../General/Heading";
import Title from "../General/Title";

const Submission = () => {

    return (
      <div>
          <Heading />
          <Title title="Submission"/>
          <div className="mt-[3rem] px-[5rem] leading-[2rem]">
             <p>
                <b><span>Instructions to Authors</span></b>
                <p>Authors are requested to send their manuscript (in .doc) to the Conference Email id: <a className="text-sky-500" href="mailto:icamece25@gmail.com">icamece25@gmail.com</a> or submit by clicking button below.</p>
             </p>

            <hr className="border-[1px] opacity-40 border-[#9e9e9e] my-[1.5rem]"></hr>

            <p>
                Ensure the below points before sending the manuscript.
                <ul className="list-disc pl-[2rem]">
                    <li>Subject should be Paper submission to ICAMECE 2025 Conference.</li>
                    <li>Kindly include all authors details with communication email id in the manuscript.</li>
                    <li>Paper length can be a maximum of 8 pages.</li>
                    <li>Manuscripts with plagiarism less than 15% only will be considered for the review process.</li>
                    <li>The Manuscript should strictly follow the AIP paper template which is available below:</li>
                </ul>
            </p>

            <hr className="border-[1px] opacity-40 border-[#9e9e9e] my-[1.5rem]"></hr>

            {/* <p>
                <b><span>Manuscript Template</span></b>
                <p className=" mb-[1rem]">AIP conference templates contain guidance text for composing and formatting conference papers. Please ensure that all guidance text is removed from your conference paper prior to submission to the conference.</p>
                <a href="https://aip.scitation.org/apc/authors/preppapers" className="underline text-sky-500" target="_blank" rel="noreferrer">AIP Template</a>
            </p> */}

            {/* <div className="py-[2rem] flex justify-center">
                <a rel="noreferrer" className="px-[2rem] py-[1rem] bg-[#206dac] rounded-xl text-white" href="https://docs.google.com/forms/d/e/1FAIpQLSdvGMZ7ia_QrVDq1xZ0ZcD_ObavyRKRhK7bOPicINayOmXspA/viewform" target="_blank">Submit Manuscript</a>
            </div> */}

          </div>
          
      </div>
  );

}

export default Submission;