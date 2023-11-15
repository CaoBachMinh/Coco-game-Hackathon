import SEO from '../components/seo';
import { Wrapper } from '../layout';
import SignInMain from '../components/sign-in';
import Quiz from '../components/quiz/src/components/Quiz';
export default function SignIn() {
    return (
        <Wrapper>
            <SEO pageTitle={'Sign In'} />
            <Quiz/>
        </Wrapper>
    )
}