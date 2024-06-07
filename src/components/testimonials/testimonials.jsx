import React from 'react';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonials.css'; // Import custom CSS

const testimonials = [
  {
    quote: "A transformative partnership that revolutionized our data strategy.",
    feedback: "Working with this team has been a game-changer for our company. Their advanced data analytics tools provided us with unprecedented insights into our operations, allowing us to make data-driven decisions that significantly improved our efficiency and profitability. Their commitment to our success and their ability to deliver tailored solutions exceeded our expectations.",
    name: "Jane Doe",
    position: "CEO",
    company: "Tech Innovators Inc."
  },
  {
    quote: "Exceptional service with a personal touch.",
    feedback: "From the moment we engaged their services, we felt supported and understood. The personalized approach to our digital learning needs has empowered our employees to upskill effectively, and the seamless integration with our existing platforms was flawless. Their expert guidance has been invaluable in navigating the complexities of digital transformation.",
    name: "John Smith",
    position: "HR Director",
    company: "Global Enterprises"
  },
  {
    quote: "Career counseling that unlocks true potential.",
    feedback: "Their career counseling services have been instrumental in helping our team members identify their strengths and pursue meaningful career paths. The comprehensive assessments and personalized guidance have not only enhanced individual satisfaction but also contributed to our overall organizational growth. We highly recommend their expertise to any company looking to invest in their employees' futures.",
    name: "Emily Johnson",
    position: "COO",
    company: "Future Leaders Inc."
  },
  {
    quote: "Innovative solutions that drive real results.",
    feedback: "We were looking for a partner who could provide cutting-edge solutions to our complex business challenges. Their expertise in AI and IoT integration has enabled us to optimize our processes and stay ahead of the competition. The team's dedication to delivering high-quality service and their ability to adapt to our evolving needs have been truly impressive.",
    name: "Michael Brown",
    position: "CTO",
    company: "Smart Solutions Ltd."
  },
  {
    quote: "Empowering decisions through powerful analytics.",
    feedback: "Their powerful data analytics tools have transformed the way we operate. We now have a clear, real-time view of our performance metrics, which has empowered us to make faster and more informed decisions. The insights we've gained have been pivotal in driving our strategic initiatives and achieving our business goals.",
    name: "Sarah Lee",
    position: "CFO",
    company: "Insightful Analytics Corp."
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <div className="testimonials-section">
        <div className="btn-section">Clients Saying</div>
        <h2 style={{background: 'linear-gradient(90deg, #37C592 -0.99%, #7D25EC 104.61%)', // Define your gradient here
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent', 
    padding: '10px',
    marginBottom: '30px'
    }}>What Our Clients Say</h2>
      
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text className="testimonial-quote">“{testimonial.quote}”</Card.Text>
                <Card.Text className="testimonial-feedback">{testimonial.feedback}</Card.Text>
                <Card.Text className="testimonial-author">
                  - {testimonial.name}, {testimonial.position} at {testimonial.company}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
