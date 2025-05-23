import React from "react";
import Title from "../General/Title";
import Heading from "../General/Heading";

function AboutConference(){
    const content = "The International Conference on Advances in Mechanical, Electrical and Computational Engineering (ICAMECE 2025) is a dynamic platform that brings together minds from across the globe to share and discuss recent developments in engineering and technology. With a strong interdisciplinary focus, the conference invites researchers, faculty members, industry experts, and young innovators to present their work and engage in meaningful discussion on emerging trends. ICAMECE 2025 aims to bridge the gap between traditional engineering disciplines and modern technological solutions. The conference will explore a wide range of topics, including mechanical system design, smart energy solutions, embedded systems, automation, artificial intelligence, machine learning and computational modeling. This unique blend of themes encourages collaboration across domains to tackle complex engineering challenges in a holistic way. Participants will benefit from keynote addresses and invited talks by renowned scholars and professionals, who will share their experiences, research findings and future visions. The event is also an excellent opportunity to network, form partnerships, and inspire new directions in research and innovation. Whether you're a seasoned researcher or an early-career professional, ICAMECE 2025 promises to be a valuable experience for all who are passionate about shaping the future of engineering."
    
    return (
        <div className="flex flex-col font-poppins ">
            <Heading />
            <Title title="About the Conference" />
            <div className="px-[5.5rem]">
                <p className="text-justify text-base font-medium leading-8 my-[3rem] leading-[2.4rem] ">{content}</p>
            </div>

            
        </div>
    );
}

export default AboutConference;