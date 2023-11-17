import Game from "./about-game";
import { Header,FooterTwo } from "../../layout";
const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <time datetime="2016-10-25" suppressHydrationWarning />
                <Header/>
                <Game/>
                <FooterTwo />
            </div>
        </div>
    )
}

export default index;