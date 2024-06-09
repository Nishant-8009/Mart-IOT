import { GrTechnology } from "react-icons/gr";
import { GrTest } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrDocumentVerified } from "react-icons/gr"; 
import img1 from '../../assets/images/ai.jpg';
import img2 from '../../assets/images/data anyltics.jpg';
import img3 from '../../assets/images/iot.jpg';
import img4 from '../../assets/images/digital learning.jpg';
import img5 from '../../assets/images/carrier councelling.jpg';
export const navlinks=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Our Products',
        path:'/products'
    },
    {
        name:'Contact US',
        path:'/contact'
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
    description : 'Utilizing advanced AI technology to optimize performance and enhance user experience.',
    detailed_description:' Our AI solution empowers businesses to harness the power of artificial intelligence and drive digital transformation. With advanced algorithms and predictive analytics, our solution unlocks actionable insights, automates processes, and enables data-driven decision-making. Stay ahead of the competition and unlock new possibilities with our transformative AI technology.',
    features: ['Advanced Algorithms','Predictive Analytics','Automated Decision-Making','Scalable Infrastructure']
  },
  {
    image: img2,
    title: 'Data Analytics',
    description : 'Unlocking the potential of your data to drive strategic decision-making and business innovation.',
    detailed_description:'Our data analytics solution empowers organizations to harness the full potential of their data assets and gain actionable insights. With advanced analytics tools and intuitive visualizations, our solution enables businesses to uncover hidden patterns, trends, and opportunities. Revolutionize your decision-making process and drive business growth with our powerful analytics platform.',
    features: ['Advanced Analytics Tools','Intuitive Visualizations','Actionable Insights','Scalable Architecture']
  },
  {
    image: img3,
    title: 'Internet Of Things',
    description : 'Seamless integration with IoT devices to provide real-time data and insights.',
    detailed_description:'Our IoT solution is at the forefront of connectivity and automation, empowering businesses to transform their operations and deliver unparalleled value to their customers. With seamless integration and intelligent data analytics, our solution optimizes processes, enhances efficiency, and drives innovation across industries. Join the IoT revolution with our cutting-edge technology.',
    features: ['Streamlined Connectivity','Intelligent Automation','Data-Driven Insights','Scalable Architecture  ']
  },
  {
    image: img4,
    title: 'Digital Learning',
    description : 'Empowering education with digital innovation to enhance learning experiences and accessibility.',
    detailed_description:'Our digital learning solution redefines education for the digital age, offering dynamic tools and resources to engage learners and foster a culture of continuous growth. With interactive content, personalized learning paths, and real-time feedback, our solution empowers individuals and organizations to unlock their full potential. Experience the future of learning with our innovative platform.',
    features: ['Engaging Interactive Content','Personalized Learning Paths','Real-Time Feedback','Seamless Integration']
  },{
    image: img5,
    title: 'Carrier Counselling',
    description : 'Guiding you to unlock your potential and achieve your career aspirations through expert advice and resources.',
    detailed_description:'Our career counseling service empowers individuals to navigate their professional journey with confidence and clarity. With personalized guidance, industry insights, and skills development resources, our service equips users with the tools they need to achieve their career goals. Transform your career trajectory and unlock new opportunities with our empowering counseling service.',
    features: ['Personalized Guidance','Industry Insights','Skills Development Resources','Expert Counselors']
  }
]