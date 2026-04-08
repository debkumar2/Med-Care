import brandLogo from '../assets/images/brandLogo.png';
import backgroundBg from '../assets/images/bannerBg.jpg';
import bannerModel from '../assets/images/bannerModel.webp';
import verifiedStamp from '../assets/images/verified.webp';
import abooutOne from '../assets/images/aboutOne.jpg';
import abooutTwo from '../assets/images/aboutTwo.jpg';
import circleRotate from '../assets/images/circleRotate.webp';
import doctorLogo from '../assets/images/doctorLogo.webp';
import svgPatternOne from '../assets/images/svgPatternOne.svg';
import technologyImgOne from '../assets/images/technologyImgOne.jpg';
import doctorOne from '../assets/images/doctorOne.jpg';
import doctorTwo from '../assets/images/doctorTwo.jpg';
import doctorThree from '../assets/images/doctorThree.jpg';
import doctorFour from '../assets/images/doctorFour.jpg';
import line from '../assets/images/line.svg';
const assets = {
    brandLogo,
    backgroundBg,
    bannerModel,
    verifiedStamp,
    abooutOne,
    abooutTwo,
    circleRotate,
    doctorLogo,
    svgPatternOne,
    technologyImgOne,
    line,
}

 export const serviceSlide = [
    { name: 'General Surgery', icon: 'scissors' },
    { name: 'Cardiology', icon: 'heart' },
    { name: 'Primary Care', icon: 'stethoscope' },
    { name: 'Blood Test', icon: 'blood' },
]

export const doctorsList = [
    {
        imgUrl: doctorOne,
        docName: 'Dr. Shoko mugikura',
        desc: 'Specialize in psychiatry at crafto hospital.',
        rating: '4.9',
    },
    {
        imgUrl: doctorTwo,
        docName: 'Dr. Herman miller',
        desc: 'Specialize in cancer at crafto hospital.',
        rating: '4.7',
    },
    {
        imgUrl: doctorThree,
        docName: 'Dr. Leonel mooney',
        desc: 'Specialize in pediatrics at crafto hospital',
        rating: '5.0',
    },
    {
        imgUrl: doctorFour,
        docName: 'Dr. Matthew taylor',
        desc: 'Specialize in psychiatry at crafto hospital.',
        rating: '5.0',
    }
]
export default assets;