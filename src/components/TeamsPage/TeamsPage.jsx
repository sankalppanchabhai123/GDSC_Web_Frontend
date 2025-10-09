import React, { useContext, useEffect, useState } from 'react'
import classes from './TeamsPage.module.css'
import { TeamCard } from '../common'
// import info from './TeamsInfo'
import TechIcon from '../common/SVGs/TechIcon'
import DesignIcon from '../common/SVGs/DesignIcon'
import ManagementIcon from '../common/SVGs/ManagementIcon'
import PRIcon from '../common/SVGs/PRIcon'
import TechTeamPage from './TechTeamPage/TechTeamPage'
import DesignTeam from './DesignTeamPage/DesignTeam'
import ManagementTeam from './ManagementTeam/ManagementTeam'
import PRTeam from './PRTeam/PRTeam'
import { getTeamsData } from '../../getData/getTeamsData'
import { ThemeContext } from '../../App'
import bgg from '../../assets/bgg.png'
import bgy from '../../assets/bgy.png'
import Meet from '../../assets/meet.svg'
import meet2 from '../../assets/meetb.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
// 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
// new
const teamMembersLead = [
  {
    id: "GDSC-AJ20231",
    name: "Prajwal Sanap",
    role: "GDSC LEAD",
    image: "/Lead/Prajwal.png",
    badgeColor: "bg-yellow-400"
  },
  {
    id: "GDSC-SL20232",
    name: "Sarvesh Varadkar",
    role: "AI/ML Lead",
    image: "/Lead/Sarvesh.png",
    badgeColor: "bg-blue-400"
  },
  {
    id: "GDSC-JS20233",
    name: "Digvijay Mangaokar",
    role: "Web Lead",
    image: "/Lead/Digvijay.png",
    badgeColor: "bg-green-400"
  },
  {
    id: "GDSC-TB20234",
    name: "Aniket Bhor",
    role: "ML LEAD",
    image: "/SundarBOI.png",
    badgeColor: "bg-purple-400"
  },
  {
    id: "GDSC-JP20235",
    name: "Piyush Patil",
    role: "CP/DSA Lead",
    image: "/Lead/Piyush.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20236",
    name: "Rahul Wagh",
    role: "Cybersecurity Lead",
    image: "/Lead/Rahul.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20237",
    name: "Tejas Ellansandry",
    role: "Android Lead",
    image: "/Lead/Tejas.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20238",
    name: "Shantanu Pokale",
    role: "Documentation/Management Lead",
    image: "/Lead/Shantanu.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20239",
    name: "Sachita Hangloo",
    role: "Documentation/Management Lead",
    image: "/Lead/Sachita.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023510",
    name: "Charvi Humane",
    role: "Documentation/Management Lead",
    image: "Lead/",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023511",
    name: "Samiksha Borude",
    role: "Documentation/Management Lead",
    image: "/Lead/Samiksha.jpg",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023512",
    name: "Atharva Wani",
    role: "Design Lead",
    image: "/Lead/Atharva.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023513",
    name: "Sanika Kalaskar",
    role: "Design Lead",
    image: "/Lead/Sanika.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023514",
    name: "Shrirang Vaidya",
    role: "Media Lead",
    image: "/Lead/Shrirang.jpg",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023515",
    name: "Tanya Singh",
    role: "PR Lead",
    image: "/Lead/Tanya.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP2023516",
    name: "Arya Marawar",
    role: "PR Lead",
    image: "/Lead/Arya.png",
    badgeColor: "bg-red-400"
  },
];


const teamMembersCoordinators = [
  {
    id: "GDSC-JS20231",
    name: "Tanmay Joshi",
    role: "Web Coordinator",
    image: "/Coordinators.png",
    badgeColor: "bg-green-400"
  },
  {
    id: "GDSC-TB20232",
    name: "Om Salunke",
    role: "Web Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-purple-400"
  },
  {
    id: "GDSC-JP20233",
    name: "Shipra Bhanja",
    role: "AIML Coordinator",
    image: "Coordinators/Shipra.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20234",
    name: "Ghanesh Dhadke",
    role: "Cloud Coordinator",
    image: "/Coordinators/Ganesh.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20235",
    name: "Dhanesh Shingade",
    role: "Cloud Coordinator",
    image: "/Coordinators/Dhanesh.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20236",
    name: "Varun Nagote",
    role: "CP/DSA Coordinator",
    image: "Coordinators/Varun.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20237",
    name: "Vishwambhar Wazarkar",
    role: "CP/DSA Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20238",
    name: "Dilip Chaudhary",
    role: "CyberSecurity Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP20239",
    name: "Abhishek Kumavat",
    role: "CyberSecurity Coordinator",
    image: "/Coordinators/Abhishekh.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202310",
    name: "Atharva Jagtap",
    role: "Android Coordinator",
    image: "/Coordinators/Atharva.jpg",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202311",
    name: "Kaushal Abjowar",
    role: "Design Coordinator",
    image: "/Coordinators/Kaushal.jpg",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202312",
    name: "Maithili Mahesh",
    role: "Design Coordinator",
    image: "/Coordinators/Maithili.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202313",
    name: "Sanjana Gupta",
    role: "Management Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202314",
    name: "Ausin Loyd",
    role: "Management Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202315",
    name: "Manas Mishra",
    role: "PR Coordinator",
    image: "/Coordinators/Manas.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202316",
    name: "Ankita Awatade",
    role: "PR Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202317",
    name: "Janvahi Ghanghav",
    role: "Documentation Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202318",
    name: "Sujal Patil",
    role: "Media Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
  {
    id: "GDSC-JP202319",
    name: "Pranav Gaikwad",
    role: "Media Coordinator",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  }
];
const TeamsPage = () => {
  const theme = useContext(ThemeContext)

  useEffect(() => {
    AOS.init({ duration: 50 });
  }, []);

  const [teamName, setTeamName] = useState("technical")
  const [dataArray, setDataArray] = useState([])
  const [leads, setLeads] = useState([])
  useEffect(() => {
    async function getData() {
      const data = await getTeamsData(teamName)
      setDataArray(data)
    }
    getData()
  }, [teamName])



  return (
    <div className={`${classes.container} ${theme.theme === "dark" ? classes.dark : ""}`}>
      <img src={bgg} alt='' className={classes.bgg} />
      <img src={bgy} alt='' className={classes.bgy} />
      {
        (theme.theme === "dark") ? <img src={meet2} alt='' className={classes.head} />
          : <img src={Meet} alt='' className={classes.head} data-aos="fade-down" />
      }
      {/* <div className={`${classes.leads} ${classes.cardContainers}`}>
        {leads.map((current, idx) => <TeamCard key={idx} current={current} />)}
      </div> */}

      <div className={classes.icons} >
        <TechIcon onClick={() => { setTeamName("technical") }} selected={teamName === "technical"} />
        <DesignIcon onClick={() => { setTeamName("design") }} selected={teamName === "design"} />
        <ManagementIcon onClick={() => { setTeamName("management") }} selected={teamName === "management"} />
        <PRIcon onClick={() => { setTeamName("pr") }} selected={teamName === "pr"} />

      </div>
      {
        teamName === "technical" ? <TechTeamPage data={dataArray} /> :
          teamName === "design" ? <DesignTeam data={dataArray} /> :
            teamName === "management" ? <ManagementTeam data={dataArray} /> :
              teamName === "pr" ? <PRTeam data={dataArray} /> : null
      }

      {/* new added */}
      {/* <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={20} // Increased spacing for better mobile view
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30, // Reduced rotation for better image visibility
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 }, // Single view on small mobile
          480: { slidesPerView: 1.1, spaceBetween: 20 }, // Better spacing for mobile
          640: { slidesPerView: 1.5, spaceBetween: 30 }, // Better spacing for tablets
          1024: { slidesPerView: 2.5, spaceBetween: 40 }, // Better desktop view
        }}
      >
        {teamMembersLead.map((member) => (
          <SwiperSlide key={member.id} className="py-6 px-4">  // Increased padding for better spacing
            <TechTeamPage data={dataArray} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  )
}

export default TeamsPage