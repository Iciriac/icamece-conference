import Heading from "../General/Heading";
import Title from "../General/Title";

const Registration = () => {

      return (
        <div>
            <Heading />
            <Title title="Registration"/>
            <div className="my-[3rem] px-[5rem] flex flex-col items-center leading-[2rem] text-[1.2rem]">
                <h3 className="mb-[1rem]"> <b>Registration Fee Details</b> </h3>
                <div>
                    <ul>
                        <li>Indian Authors : ₹ 9500 per manuscript</li>
                        <li>Indian Listeners : ₹ 3000</li>
                        <li>Foreign Authors : $ 150 per manuscript</li>
                        <li>Foreign Listener : $ 50</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );

}

export default Registration;