import React from 'react'
import TeamCard from '../../common/TeamCard/TeamCard'
import info from '../TeamsInfo'
import classes from './TechTeamPage.module.css'
import bgr from '../../../assets/redball.png'
import bgg from '../../../assets/bgg.png'
import bgb from '../../../assets/blueball.png'
import bgy from '../../../assets/bgy.png'

const TechTeamPage = ({ data }) => {
    // const teamData = await getTeamsData("technical")
    // console.log(teamData);
    // console.log("data", data);
    return (
        <>
            <img src={bgr} alt='' className={classes.bgr} />
            <img src={bgb} alt='' className={classes.bgb} />
            <img src={bgg} alt='' className={classes.bgg1} />
            <img src={bgy} alt='' className={classes.bgy1} />
            <h1 className={classes.h1} data-aos="fade-left">Technical Leads</h1>
            {/* <h1 className={classes.h1} data-aos="fade-left">Leads</h1> */}
            <div className={`${classes.technicalTeam} ${classes.cardContainers}`}>
                {
                    // data.map((current, idx) => <TeamCard key={idx} current={current} />)
                    info.teams.technical.lead.map((current, idx) => <TeamCard key={idx} current={current} />)
                }
            </div>
            <h1 className={classes.h1} data-aos="fade-left">Coordinators</h1>
            <div className={`${classes.managementTeam} ${classes.cardContainers}`}>
                {
                    // data.map((current, idx) => <TeamCard key={idx} current={current} />)
                    info.teams.technical.coord.map((current, idx) => <TeamCard key={idx} current={current} />)
                }
            </div>

        </>
    )
}

export default TechTeamPage