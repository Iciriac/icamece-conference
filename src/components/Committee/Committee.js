import Heading from "../General/Heading";
import Title from "../General/Title";
import CommitteeContent1 from "./CommitteeContent1";
import Committemem from "./Co-or";
import Common from "./Commondetails";
import Technical from "./TechnicalMem";
import KeyNoteSpeaker from "./KeynoteSpeakers";

const Committe = () => {



    // const AdvisoryMembers = ['Dr. K. Porkumaran, Principal'];
    // const Convener = ['Dr. M. Lydia, Professor & Head, Mechatronics Engineering'];
    // const TechnicalCommittee = ['Dr. K.B. Gurumoorthy, National Institute of Technology, Calicut, India', 'Dr.Kathiravan Srinivasan, Vellore Institute of Technology, Vellore', 'Dr.T.Mohanraj, Amritha University, Coimbatore', 'Dr. Kamatchi Sundari, SRMIST-Ramapuram, Chennai', 'Dr. Akhilesh Kumar Singh, Adithya College of Engineering and Technology, Andhra Pradesh', 'Dr.R.Rajasekar, HOD/Mech, Kongu Engineering College, Erode', 'Dr.S.Vinod, PSG College of Technology,Coimbatore', 'Dr. Ram Singh Sran, Baba Hira Singh Bhattal Institute of Engineering & Technology, Lehragaga, Sangrur, Punjab', 'Dr.K.Lingadurai, University College of Engineering,  Dindigul', 'Dr.R.Rajasekar, Kongu Engineering College,Erode', 'Dr.M.Ramu, Amirta School of Engineering, Coimbatore', 'Dr.Saravana Mohan, Kumaraguru College of Technology, Coimbatore', 'Dr.Ramakrishnan.R, Vellore Institute of Technology, Vellore', 'Dr. M. Feroskhan, Vellore Institute of Technology, Chennai', 'Dr.M.Venkatesan, SASTRA Deemed to be University, Thanjavur', 'Dr.M.Ravichandran, K.Ramakrishnan College of Engineering, Trichy', 'Dr.S.Karthigai Lakshmi, SSM Institute of Engineering and Technology, Dindigul', 'Dr. B V D S Sekhar, S R K R Engineering College, Buimavaram, West Godavari District, Andhra Pradesh', 'Dr.VVSSS Chakravarthy, Raghu Institute of Technology, Dakamarri, Visakhapatnam, Andhra Pradesh', 'Dr. S. Suresh Kumar, KGiSL Institute of Technology, Coimbatore', 'Dr. K. Baskaran, Alagappa Chettiar Government College of Engineering and Technology , Karaikudi'];
    // const InternationalAdvisory = ['Dr. Rajkumar Palaniappan, University of Technology Bahrain, Bahrain', 'Dr. Rathinaraja Jeyaraj, Kyungpook National University, South Korea', 'Zahra Badiei, Shiraz University, Shiraz, Iran', 'Yoash Levron, The Viterbi Faculty of Electrical Engineering, Technion Israel Institute of Technology, Haifa , Israel']

    return (
        <div>
            <Heading />
            <Title title="Committee Members" />
            <div className="my-[3rem] px-[5rem]">
                <CommitteeContent1 Title="Chief Patron" Name="Smt. S. Malarvizhi" Designation="Managing Trustee" Organisation="Sri Krishna Instituions" Location="Coimbatore" />
                <CommitteeContent1 Title="Patron" Name="Dr. K. Porkumaran" Designation="Principal" Organisation="Sri Krishna College of Engineering and Technology" Location="Coimbatore" />
                <CommitteeContent1 Title="Convener" Name="Dr. M. Lydia" Designation="Professor & Head" Dept="Department of Mechatronics Engineering," Organisation="Sri Krishna College of Engineering and Technology" Location="Coimbatore" />
                <CommitteeContent1 Title="Coordinators" Name="Dr. K. Ananthi, Dr. J. Indirapriyadharshini and Dr. S. Madhankumar" Name2="Dr. S. Madhankumar," Designation="Assistant Professors" Dept="Department of Mechatronics Engineering," Organisation="Sri Krishna College of Engineering and Technology" Location="Coimbatore" />
                
                <KeyNoteSpeaker Title="Keynote Speakers" Name="Dr. Anand Paul" Organisation="Louisiana State University" Location="United States"/>
                
                <p className="p-5 mx-10 font-bold underline underline-offset-8 tracking-[1px]">Technical Committee Members</p>
                <p className="p-5 ml-[50px] mx-10 font-bold underline underline-offset-8 tracking-[1px]">International</p>
                <Technical Name="Mr. Binesh Kumar, Technical Project Lead, Atom Power Inc., Charlotte, USA."></Technical>
                <Technical Name="Dr. Tony Punnoose Valayil, Bulgarian Academy of Sciences, Bulgaria."></Technical>
                <Technical Name="Dr. Yoash Levron ,Technion Israel Institute of Technology, Haifa, Israel."></Technical>
                <Technical Name="Dr. Rajkumar Palaniappan, University of Technology Bahrain, Bahrain."></Technical>
                <Technical Name="Dr. Xiao-Zhi Gao, University of Eastern Finland, Finland."></Technical>
                <Technical Name="Dr. DileepKumar, Nile university, Nigeria."></Technical>
                <Technical Name="Dr. Abdulnasir Hossen, Sultan Qaboos University, Sultanate of Oman."></Technical>
                <Technical Name="Dr. Haider Ismael Shahadi, University of Kerbala, Iraq."></Technical>
                <Technical Name="Dr. Selwyn Piramuthu, University of Florida, Gainesville."></Technical>
                <Technical Name="Prof. Zahra Badiei, Shiraz University, Shiraz, Iran."></Technical>
                <Technical Name="Dr. Satheeshkumar Veeramani, School of Engineering Cardiff University, Cardiff."></Technical>
                <Technical Name="Dr. Sharath Kumar Jagnannathan, Saint Peter's University, Jersey City."></Technical>
                <Technical Name="Dr. Francesco Zirilli(Rtd), Universita di Roma La Sapienza, Italy."></Technical>
                <Technical Name="Dr. Shilpa Mehta, Auckland University of Technology, Auckland, New Zealand."></Technical>
                <Technical Name="Dr.Pankaj Kumar, University of New Mexico, Mexico."></Technical>

                <p className="p-5 ml-[50px] mx-10 font-bold underline underline-offset-8 tracking-[1px]">National</p>
                <Technical Name="Dr.S.Vinod, PSG College of Technology, Coimbatore."></Technical>
                <Technical Name="Dr. K. Linga Durai, Anna University Regional Campus, Madurai."></Technical>
                <Technical Name="Dr. Santhakumar Mohan, IIT Palakad, Kerala."></Technical>
                <Technical Name="Mr. Raghul Manogaran, Mercedes Benz Research & Development, Bangalore."></Technical>
                <Technical Name="Dr. Kathiravan Srinivasan, Vellore Institute of Technology, Vellore."></Technical>
                <Technical Name="Dr. K. Baskaran, ACGCET, Karaikudi."></Technical>
                <Technical Name="Dr. N.A. Natraj, Symbiosis International (Deemed University), Pune."></Technical>
                <Technical Name="Dr. Akhilesh Kumar Singh, Adithya College of Engineering and Technology, Andhra Pradesh."></Technical>
                <Technical Name="Dr. Ram Singh Sran, Baba Hira Singh Bhattal Institute of Engineering & Technology, Punjab."></Technical>
                <Technical Name="Dr. R.Ramakrishnan, Vellore Institute of Technology, Vellore."></Technical>
                <Technical Name="Dr. M.Ramu, Amirta School of Engineering, Coimbatore."></Technical>
                <Technical Name="Dr. S. Suresh Kumar, KGiSL Institute of Technology, Coimbatore."></Technical>
                <Technical Name="Dr. M.Venkatesan, SASTRA Deemed to be University, Thanjavur."></Technical>
                <Technical Name="Dr. B V D S Sekhar, S R K R Engineering College, Buimavaram, Andhra Pradesh."></Technical>
                <Technical Name="Dr. C. R. Rathish, New horizon College of Engineering, Bengaluru."></Technical>
                <Technical Name="Dr. M. Ravichandran, Chandigarh University, Punjab."></Technical>
                <Technical Name="Dr. K. Ramanathan, ACGCET, Karaikudi."></Technical>
                <Technical Name="Dr. VVSSS Chakravarthy, Raghu Institute of Technology, Visakhapatnam."></Technical>
                <Technical Name="Dr. Pankaj Pathak, Symbiosis International (Deemed University), Pune."></Technical>
                <Technical Name="Dr. S. Karthigai Lakshmi, SSM Institute of Engineering and Technology, Dindigul."></Technical>
                <Technical Name="Dr. M. Ravichandran, K.Ramakrishnan College of Engineering, Trichy."></Technical>
                <Technical Name="Dr.P.Padmanabhan, V V College of Engineering, Tisaiyanvilai"></Technical>
                <Technical Name="Dr. M. Feroskhan, Vellore Institute of Technology, Chennai."></Technical>
                <Technical Name="Dr. Saravana Mohan, Kumaraguru College of Technology, Coimbatore."></Technical>
                <Technical Name="Dr. R. Rajasekar, Kongu Engineering College, Erode."></Technical>
                <Technical Name="Dr. Kamatchi Sundari, SRMIST-Ramapuram, Chennai."></Technical>
                <Technical Name="Dr. T.Mohanraj, Amrita University, Coimbatore."></Technical>
                <Technical Name="Dr. K. B. Gurumoorthy, National Institute of Technology, Calicut."></Technical>


                <p className="p-5 mx-10 font-bold underline underline-offset-8 tracking-[1px]">Organizing Committee Members</p>
                <Committemem Name="Dr. T. A. Selvan, Professor."></Committemem>
                <Committemem Name="Dr. D. Pritima, Professor."></Committemem>
                <Committemem Name="Dr. V. Narasimharaj, Associate Professor."></Committemem>
                <Committemem Name="Dr. R. Gopinathan, Associate Professor."></Committemem>
                <Committemem Name="Dr. S. Balasubramani, Assistant Professor."></Committemem>
                <Committemem Name="Dr. M. Bhuvaneswari, Assistant Professor."></Committemem>
                <Committemem Name="Dr. R. Manikandan, Assistant Professor."></Committemem>
                <Committemem Name="Dr. G. Veerappan, Assistant Professor."></Committemem>
                <Committemem Name="Dr. L. Feroz Ali, Assistant Professor."></Committemem>
                <Committemem Name="Dr. S. Dinesh, Assistant Professor."></Committemem>
                <Committemem Name="Dr. N. Mithran, Assistant Professor."></Committemem>
                <Committemem Name="Dr. J. Justin Maria Hillary, Assistant Professor."></Committemem>
                <Committemem Name="Ms. S. Kannaki, Assistant Professor."></Committemem>
                <Committemem Name="Ms. S. Nithya Priya, Assistant Professor."></Committemem>
                <Committemem Name="Ms. R. Priyadharshini, Assistant Professor."></Committemem>
                <Committemem Name="Mr. S. Panneerselvam, Assistant Professor."></Committemem>
                <Committemem Name="Mr. M. Vigneshwaran, Assistant Professor."></Committemem>
                <Committemem Name="Mr. T. Vignesh, Assistant Professor."></Committemem>
                <br></br>
                <Common></Common>

            </div>

        </div>
    );

}

export default Committe;


