import Heading from "../General/Heading";
import Title from "../General/Title";
import brochure from '../../Resources/ICIRIAC.pdf';
import template from '../../Resources/AIP.docx';
const Downloads = () => {

      return (
        <div>
            <Heading />
            <Title title="Downloads"/>
            <div className="my-[3rem] px-[5rem] text-center">
                <p><a className="underline text-sky-500" href={brochure} download="Brochure">Click here</a> to download the brochure</p>
                <p><a className="underline text-sky-500" href={template} target="blank"download="AIP Template">Click here</a> to download the template</p>
            </div>
            
        </div>
    );
}
export default Downloads;