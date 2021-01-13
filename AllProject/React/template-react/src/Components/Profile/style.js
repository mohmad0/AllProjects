import styled from 'styled-components';

export const ProfileSkillsSection = styled.div`
    padding: 50px 0;
    overflow: hidden;
    @media (max-width:768px) {
        ProfileSkillsSection{
            width: 100%;
            float: none;
            margin-bottom: 20px;
        }
    }
`

export const ProfileSection = styled.div`
    width: 50%;
    float: left;
`

export const ProfileList = styled.ul`
    list-style: none;
`

export const ProfileListItem = styled.li`
    margin-bottom: 8px;
`

export const ProfileListSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: ${props => props.web ? "normal" : "bold"};
    color: ${props => props.web ? "#eb5424" : "#000"};
`
export const SkillsBox = styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
        SkillsBox{
            width: 100%;
            float: none
        }
        .profile_skills .profile {
            margin-bottom: 20px
        }
    }

`
export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`
export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
`
export const SkillsBarTitle = styled.span`
    float: left;
`

export const SkillsBarPerc = styled.span`
    float: right;
    margin-right: 100px;
`

export const SkillsBarParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`
export const SkillsBarParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    & > span {
        width: ${props => props.sp1 === 1 ? "100%" : "auto" };
        width: ${props => props.sp2 === 2 ? "90%" : "auto" };
        width: ${props => props.sp3 === 3 ? "80%" : "auto" };
    }
`

export const ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px;
`
export const SkillsTitle = styled(ProfileTitle)`

`
export const ProfileTitleSpan = styled.span`
    font-weight: normal;
`
export const SkillsTitleSpan = styled(ProfileTitleSpan)`

`