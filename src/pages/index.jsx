import HomeMain from '../components/homes/home-kindergarten';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AboutOne from './about-1';
import TeamDetail from './team-details';
export default function Home() {
    return (
        <Wrapper>
            <SEO pageTitle={'Trang chủ'} />
            <HomeMain />
        </Wrapper>
    )
}