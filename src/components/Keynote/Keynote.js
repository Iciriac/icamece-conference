import Heading from "../General/Heading";
import Title from "../General/Title";
import Speaker1 from "./Speakers";
import Speaker2 from "./Speaker2";

const Keynote = () => {

      return (
        <div>
            <Heading />
            <Title title="Keynote Speakers"/>
            <div className="my-[3rem] px-[5rem]">
               <Speaker1/>
               <Speaker2/>
            </div>
            
        </div>
    );

}

export default Keynote;