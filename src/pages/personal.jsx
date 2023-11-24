import SEO from '../components/seo';
import { Wrapper } from '../layout';
import Personal from '../components/Personal';

export default function SignIn() {
    return (
        <Wrapper>
            <SEO pageTitle={'Personal'} />
            <Personal />
        </Wrapper>
    )
}
