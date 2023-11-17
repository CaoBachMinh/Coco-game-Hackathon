import SEO from '../components/seo';
import { Wrapper } from '../layout';
import Game from '../components/Game';
export default function SignIn() {
    return (
        <Wrapper>
            <SEO pageTitle={'Game'} />
            <Game/>
        </Wrapper>
    )
}