import React , { useState , useEffect } from 'react';
import axios from 'axios';
// axios.get('js/data.json').then(res => {setprofile(res.data.profile)})
// axios.get('js/data.json').then(res => {setskills(res.data.skills)})
import { ProfileSkillsSection ,ProfileSection ,ProfileList ,ProfileListItem ,ProfileListSpan ,SkillsBox ,SkillsDesc ,SkillsBar ,SkillsBarTitle ,SkillsBarPerc ,SkillsBarParent ,SkillsBarParentSpan ,ProfileTitle ,SkillsTitle ,ProfileTitleSpan ,SkillsTitleSpan } from './style.js';

const Profile = () => {

		const [profile , setProfile] = useState([]);
		const [skills , setSkills] = useState([]);

		// useEffect( () => {
		// 	const fetchProfileData = async () => {
		// 		const apiFile = await fetch("js/data.json");
		// 		const data = await apiFile.json();
		// 		setProfile(data.profile)
		// 	}
		// 	fetchProfileData()

		// 	const fetchSkillsData = async () => {
		// 		const apiFile = await fetch("js/data.json");
		// 		const data = await apiFile.json();
		// 		setSkills(data.skills)
		// 	}
		// 	fetchSkillsData()
		// },[] )

		useEffect( () => {
			axios.get('./js/data.json').then(res => {console.log( 'From Profile New' , res.data.profile)})
		},[] )

		

		const profileItems = profile.map((profileItem) => {
			return(
                <ProfileListItem key={profileItem.id}>
                    <ProfileListSpan>{profileItem.titleprofile}</ProfileListSpan>
                    {profileItem.titleprofile} === "Website" ? <span web> {profileItem.infoprofile} </span> : {profileItem.infoprofile} 
                    
                </ProfileListItem>
			)
		})

		const skillsItems = skills.map((skillsItem) => {
			return(
                <SkillsBar key={skillsItem.id}>
                    <SkillsBarTitle>{skillsItem.title}</SkillsBarTitle>
                    <SkillsBarPerc>{skillsItem.perc}</SkillsBarPerc>
                    <SkillsBarParent>
                        <SkillsBarParentSpan sp1={skillsItem.id} sp2={skillsItem.id} sp3={skillsItem.id}></SkillsBarParentSpan>
                    </SkillsBarParent>
                </SkillsBar>
			)
		})

		return (
        <ProfileSkillsSection>
            <div className="container">
                <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                    	{profileItems}
                    </ProfileList>
                </ProfileSection>
                
                <SkillsBox>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {skillsItems}
                </SkillsBox>
                
            </div>
        </ProfileSkillsSection>
		);
	}

export default Profile;
