const Member = (props) => {
    return <li className="p-3 text-[1.1rem]">{ props.person }</li>;
}

const CommitteeContent = (props) => {

    const members = [...props.Members];

    return (

        <div className="bg-[#FFFBFB]">      

            <h1 className="underline underline-offset-8 font-semibold p-5 mx-10 text-[1.2rem]">{props.Title}</h1>

            <ul className="p-3 mx-[8rem] list-disc">
                {members.map((member) => <Member person={member} key={member}/>)}
            </ul>

        </div>
    );

}

export default CommitteeContent;