import { GrTechnology } from "react-icons/gr";
import { GrTest } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrDocumentVerified } from "react-icons/gr"; 
import img1 from '../../assets/images/ai.jpg';
import img2 from '../../assets/images/data anyltics.jpg';
import img3 from '../../assets/images/iot.jpg';
import img4 from '../../assets/images/digital learning.jpg';
export const navlinks=[
    {
        name:'Home',
        path:'/Mart-IOT/'
    },
    {
        name:'Our Products',
        path:'/Mart-IOT/products'
    },
    {
        name:'Contact US',
        path:'/Mart-IOT/contact'
    }  
]

export const cardsData= [
    {
        title: 'Cutting-Edge Technology',
        content: 'At Mart IoT, we leverage the latest advancements in Internet of Things (IoT) technology to deliver innovative solutions. Our products are designed to seamlessly integrate with your existing systems, providing real-time data and actionable insights to enhance operational efficiency.',
        icon : <GrTechnology/>
      },
      {
        title: 'Comprehensive Solutions',
        icon: <GrTest/> ,
        content: 'We offer a wide range of IoT solutions tailored to meet the unique needs of various industries. From smart home devices to industrial IoT applications, our comprehensive product lineup ensures that you have the right tools to optimize performance and drive growth.'
      },
      {
        title: 'Expert Support and Service',
        icon : <RiCustomerService2Line/>,
        content: 'Our team of experts is dedicated to providing exceptional support and service. From initial consultation and installation to ongoing maintenance and troubleshooting, we are committed to ensuring that your IoT systems run smoothly and effectively.'
      },
      {
        title: 'Proven Track Record',
        content: 'Mart IoT has a proven track record of success with numerous satisfied clients across diverse sectors. Our reliable and scalable solutions have helped businesses improve productivity, reduce costs, and stay ahead of the competition.',
        icon: <GrDocumentVerified /> // Adding the icon for the Proven Track Record card
      }
]

export const products = [
  {
    image: img1,
    title: 'Artificial Intelligence',
    description : 'Utilizing advanced AI technology to optimize performance and enhance user experience.'
  },
  {
    image: img2,
    title: 'Data Analytics',
    description : 'Unlocking the potential of your data to drive strategic decision-making and business innovation.'
  },
  {
    image: img3,
    title: 'Internet Of Things',
    description : 'Seamless integration with IoT devices to provide real-time data and insights.'
  },
  {
    image: img4,
    title: 'Digital Learning',
    description : 'Empowering education with digital innovation to enhance learning experiences and accessibility.'
  }
]