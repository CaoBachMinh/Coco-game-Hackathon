import SEO from '../components/seo';
import { Wrapper } from '../layout';
import Quiz from '../components/quiz/index';
export default function SignIn() {
    return (
        <Wrapper>
            <SEO pageTitle={'Sign In'} />
            <Quiz/>
        </Wrapper>
    )
}