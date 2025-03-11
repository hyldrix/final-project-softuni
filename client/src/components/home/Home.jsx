
import Slider from './Slider/slider.jsx';
import Advantages from './advantages/Advantages.jsx';
import CTA from './call-to-action/CallToAction.jsx';
import OurClasses from './our-classes-section/OurClasses.jsx'
export default function Home() {
    return (
        <>
           <Slider/>
           <Advantages/>
           <OurClasses/>
           <CTA/>
        </>
    );
}