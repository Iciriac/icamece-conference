import Heading from "../General/Heading";
import Title from "../General/Title";
import AIP from '../../Resources/AIP proceedings.jpeg';
import Scopus from '../../Resources/scopus.jpeg';

const Publication = () => {

      return (
        <div>
            <Heading />
            <Title title="Publication"/>
            <p><center>
              ICAMECE 2025 Proceeding Link:
            <a className="underline text-sky-500 " href="https://pubs.aip.org/aip/acp/issue/2914/1"> https://pubs.aip.org/aip/acp/issue/2914/1</a>
            </center>
              </p>
            <div className="my-[3rem] px-[5rem] text-center">
              <p className="mb-[1rem]">All registered and presented papers will be published in AIP Conference Proceedings</p>
              <div className="flex flex-row mx-[300px]">
                <img className="h-[180px]"src={AIP}></img>
                <img className="w-[500px] h-[170px]"src={Scopus}></img>
              </div>
              <br></br>
              <p><a className="underline text-sky-500 " href="https://aip.scitation.org/journal/apc" target="_blank">AIP Conference Proceedings -</a> Scopus Indexed</p>
            </div>
            
        </div>
    );

}

export default Publication;