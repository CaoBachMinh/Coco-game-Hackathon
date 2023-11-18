import SEO from '../components/seo';
import { Wrapper } from '../layout';
import Gamification from '../components/Gamification/index';
export default function SignIn() {
    return (
        <Wrapper>
            <SEO pageTitle={'Gamification'} />
            <Gamification/>
        </Wrapper>
    )
}