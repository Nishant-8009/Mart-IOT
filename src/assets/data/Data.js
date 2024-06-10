import { GrTechnology } from "react-icons/gr";
import { GrTest } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrDocumentVerified } from "react-icons/gr"; 
import img1 from '../../assets/images/ai.jpg';
import img2 from '../../assets/images/data anyltics.jpg';
import img3 from '../../assets/images/iot.png';
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
    detailed_description:' Unleash the transformative power of our AI solution and drive digital transformation to new heights. Leveraging state-of-the-art machine learning algorithms and real-time predictive analytics, our platform converts complex data into actionable insights, automates decision-making processes, and facilitates seamless, data-driven strategies. Stay ahead of the competition and unlock unprecedented opportunities with our innovative AI technology.',
    features: ['State-of-the-Art Algorithms','Predictive Analytics','Automated Decision-Making','Scalable Infrastructure']
  },
  {
    image: img2,
    title: 'Data Analytics',
    description : 'Unlocking the potential of your data to drive strategic decision-making and business innovation.',
    detailed_description:'Unlock the full potential of your data assets with our advanced data analytics solution. Equipped with cutting-edge analytics tools and intuitive visualizations, our platform empowers organizations to discover hidden patterns, trends, and opportunities. Revolutionize your decision-making process and accelerate business growth with our powerful analytics capabilities.',
    features: ['Advanced Analytics Tools','Intuitive Visualizations','Actionable Insights','Scalable Architecture']
  },
  {
    image: img3,
    title: 'Internet Of Things',
    description : 'Seamless integration with IoT devices to provide real-time data and insights.',
    detailed_description:'Experience the future of connectivity and automation with our cutting-edge IoT solution. Seamlessly integrating with existing systems, our platform leverages intelligent data analytics to optimize processes, enhance efficiency, and drive innovation. Transform your operations and deliver exceptional value with our advanced IoT technology.',
    features: ['Streamlined Connectivity','Intelligent Automation','Data-Driven Insights','Scalable Architecture  ']
  },
  {
    image: img4,
    title: 'Digital Learning',
    description : 'Empowering education with digital innovation to enhance learning experiences and accessibility.',
    detailed_description:'Step into the future of education with our dynamic digital learning solution. Our platform offers interactive content, personalized learning paths, and real-time feedback, designed to engage learners and foster continuous growth. Empower individuals and organizations to reach their full potential with our innovative learning technology.',
    features: ['Engaging Interactive Content','Personalized Learning Paths','Real-Time Feedback','Seamless Integration']
  },{
    image: img5,
    title: 'Carrier Counseling',
    description : 'Guiding you to unlock your potential and achieve your career aspirations with expert advice and AI-enhanced career counseling.',
    detailed_description:'Unlock your true potential and navigate your professional journey with unparalleled confidence and clarity. Our cutting-edge career counseling service is designed to revolutionize the way you achieve your career goals. Harness the power of personalized AI insights, expert guidance, and state-of-the-art skills development resources to take your career to new heights. Experience a career transformation like never before!',
    features: ['AI-Powered Personalized Guidance','Deep Industry Insights','Next-Gen Skills Development','Expert Counselors and AI-Coaches']
  }
]