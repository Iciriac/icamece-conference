import skcetLogo from '../../Resources/skcetLogo.png';
import Logo from '../../Resources/logo.png';
function navbar(props) {

    const onTabSelected = (event) => {
        props.onTabClicked(event.target.innerText);
    }

    const tabs = ["Home", "About", "Call for Papers", "Committees", "Keynote", "Important Dates", "Submission", "Publication", "Registration", "Downloads", "Venue", "Contact"];

    return (
        <div className="font-poppins bg-[#206dac] rounded-r-2xl w-[15%] h-screen flex flex-col snap-y items-center justify-center fixed top-0 left-0">
            <div className="">
                <img className="h-[7rem] w-[7rem]" src={Logo}  alt="logo" />
            </div>
            <div className="mt-[1rem] h-[75%] content-between justify-between flex flex-col md:text-[.8rem] xl:text-[1rem] font-semibold text-center text-white tracking-[1px]">

                {tabs.map((tab) => props.Underline===tab ? <a className="p-[2px] transition-all underline underline-offset-8" key={tab} href="#" onClick={onTabSelected}>{tab}</a> : <a className="p-[2px] transition-all" key={tab}href="#" onClick={onTabSelected}>{tab}</a>)}

            </div>
        </div>  
    );
}
// lg:space-y-3 xl:space-y-6 md:space-y-2

export default navbar;