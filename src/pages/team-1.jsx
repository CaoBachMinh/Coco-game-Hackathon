import SEO from '../components/seo';
import { Wrapper } from '../layout';
import TeamOneMain from '../components/teams/team-1';

const TeamOne = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'About Us'} />
            <TeamOneMain />
        </Wrapper>
    )
}

export default TeamOne;