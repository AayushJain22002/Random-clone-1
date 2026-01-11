import React from 'react'
import "./index.css"
import { ArrowLeft, ArrowRight, ArrowUpRight, Facebook, Linkedin, Minus, Plus, Twitter } from 'lucide-react'
const App = () => {
  return (
    <>
      <section className='homepage'>
        <nav className="navbar">
          <div className="logo"><img src="/Frame 9.png" alt="" /></div>
          <div className="ul">
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <button className='req'>Request a quote</button>
          </div>
        </nav>
        <main className='mainpage'>
          <div className='box1'>
            <h1>Navigating the digital landscape for success</h1>
            <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button>Book a consulation</button>
          </div>
          <div className='box2'>
            <img src="/Illustration.png" alt="" />
          </div>
        </main>
        <div className="companylogos">
          <img src="/Company logo (1).png" alt="company logo" />
          <img src="/Company logo (2).png" alt="company logo" />
          <img src="/Company logo (3).png" alt="company logo" />
          <img src="/Company logo (4).png" alt="company logo" />
          <img src="/Company logo (5).png" alt="company logo" />
          <img src="/Company logo (6).png" alt="company logo" />
        </div>

      </section>
      <div className="subheading">
        <h1>Services</h1>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <section className="cards">
        <div className="card">
          <div className="text">
            <h1>Search Engine </h1>
            <h1>Optimiztion</h1>
            <p> <ArrowUpRight /> Learn More</p>
          </div>
          <div className="cardimg">
            <img src="/Illustration (1).png" alt="" />
          </div>
        </div>
        <div className="card green">
          <div className="text ">
            <h1>Per-Day-Click</h1>
            <h1>advertising</h1>
            <p><ArrowUpRight /> Learn More</p>
          </div>
          <div className="cardimg">
            <img src="/Illustration (2).png" alt="" />
          </div>
        </div>
        <div className="card black">
          <div className="text">
            <h1>Social media</h1>
            <h1>Marketing</h1>
            <p><ArrowUpRight /> Learn More</p>
          </div>
          <div className="cardimg">
            <img src="/Illustration (3).png" alt="" />
          </div>
        </div>
        <div className="card grey">
          <div className="text">
            <h1>Email </h1>
            <h1>marketing</h1>
            <p><ArrowUpRight /> Learn More</p>
          </div>
          <div className="cardimg">
            <img src="/tokyo-sending-messages-from-one-place-to-another 1.png" alt="" />
          </div>
        </div>
        <div className="card green">
          <div className="text">
            <h1>Content </h1>
            <h1> Creation</h1>
            <p><ArrowUpRight /> Learn More</p>
          </div>
          <div className="cardimg">
            <img src="/Illustration (4).png" alt="" />
          </div>
        </div>
        <div className="card black">
          <div className="text">
            <h1>Analytics and </h1>
            <h1>Tracking</h1>
            <p><ArrowUpRight /> Learn More</p>
          </div>
          <div className="cardimg">
            <img src="/Illustration (5).png" alt="" />
          </div>
        </div>
      </section>
      <section className='contact'>
        <div className="contacttext">
          <h1>Let's make things happen</h1>
          <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <button>Get your free proposal</button>
        </div>
        <div className="contactimg">
          <img src="/Frame 19.png" alt="" />
        </div>
      </section>
      <div className="subheading">
        <h1>Case studies</h1>
        <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>
      <section className="case">
        <div className="caseinfo divider">
          <h3>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</h3>
          <h2>Learn More <ArrowUpRight /> </h2>
        </div>

        <div className="caseinfo divider">
          <h3>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</h3>
          <h2>Learn More <ArrowUpRight /> </h2>
        </div>

        <div className="caseinfo">
          <h3>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</h3>
          <h2>Learn More <ArrowUpRight /> </h2>
        </div>
      </section>

      <div className="subheading">
        <h1>Our working progress</h1>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <section className="progress">
        <div className="firstprogress">
          <div className="firstheading">
            <div className='headingmain'>
              <h1>01</h1>
              <h2>Consultation</h2>
            </div>
            <div className="icons"><Minus /></div>
          </div>

          <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
        </div>

        <div className="normalprogress">
          <div className='headingmain'>
            <h1>02</h1>
            <h2>Resarch and strategy Development</h2>
          </div>
          <div className="icons"><Plus /></div>
        </div>

        <div className="normalprogress">
          <div className='headingmain'>
            <h1>03</h1>
            <h2>Implementation</h2>
          </div>
          <div className="icons"><Plus /></div>
        </div>

        <div className="normalprogress">
          <div className='headingmain'>
            <h1>04</h1>
            <h2>Monitoring and Optimization</h2>
          </div>
          <div className="icons"><Plus /></div>
        </div>

        <div className="normalprogress">
          <div className='headingmain'>
            <h1>05</h1>
            <h2>Reporting and Communication</h2>
          </div>
          <div className="icons"><Plus /></div>
        </div>

        <div className="normalprogress">
          <div className='headingmain'>
            <h1>06</h1>
            <h2>Continual Improvement</h2>
          </div>
          <div className="icons"><Plus /></div>
        </div>
      </section>

      <div className="subheading">
        <h1>Team</h1>
        <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>


      <seaction className="teaminfo">
        <div className="teamcard">
          <div className="pfp">
            <img src="Picture.png" alt="" />
          </div>
          <div className="name">
            <h3>John Smith</h3>
            <p>CEO and Founder</p>
          </div>
          <div className="linkedin">
            <h1>in</h1>
          </div>
          <div className="infoaboutteam">
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>

        <div className="teamcard">
          <div className="pfp">
            <img src="Picture (1).png" alt="" />
          </div>
          <div className="name">
            <h3>Jane Doe</h3>
            <p>Director of operation</p>
          </div>
          <div className="linkedin">
            <h1>in</h1>
          </div>
          <div className="infoaboutteam">
            <p>7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>
          </div>
        </div>

        <div className="teamcard">
          <div className="pfp">
            <img src="Picture (2).png" alt="" />
          </div>
          <div className="name">
            <h3>Michael Brown</h3>
            <p>Senior SEO Specialist</p>
          </div>
          <div className="linkedin">
            <h1>in</h1>
          </div>
          <div className="infoaboutteam">
            <p>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
          </div>
        </div>

        <div className="teamcard">
          <div className="pfp">
            <img src="Picture (3).png" alt="" />
          </div>
          <div className="name">
            <h3>Emily Johnson</h3>
            <p>PPC Manager</p>
          </div>
          <div className="linkedin">
            <h1>in</h1>
          </div>
          <div className="infoaboutteam">
            <p>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>
          </div>
        </div>

        <div className="teamcard">
          <div className="pfp">
            <img src="Picture (4).png" alt="" />
          </div>
          <div className="name">
            <h3>Brian Williams</h3>
            <p>Social Media Specialist</p>
          </div>
          <div className="linkedin">
            <h1>in</h1>
          </div>
          <div className="infoaboutteam">
            <p>4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</p>
          </div>
        </div>

        <div className="teamcard">
          <div className="pfp">
            <img src="Picture (5).png" alt="" />
          </div>
          <div className="name">
            <h4>Sarah Kim</h4>
            <p>Content Creator</p>
          </div>
          <div className="linkedin">
            <h1>in</h1>
          </div>
          <div className="infoaboutteam">
            <p>2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries</p>
          </div>
        </div>
      </seaction>

      <div className="allTeamButton">
        <button>See all teams</button>
      </div>

      <div className="subheading">
        <h1>Testimonials</h1>
        <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>

      <section className="testimonials">

        <div className="cardtest cardl">
          <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
          <h4>John Smith</h4>
          <h6>Marketing Director at XYZ corp</h6>
        </div>
        <div className="cardtest cardm">
          <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
          <h4>John Smith</h4>
          <h6>Marketing Director at XYZ corp</h6>
        </div>
        <div className="cardtest cardr">
          <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
          <h4>John Smith</h4>
          <h6>Marketing Director at XYZ corp</h6>
        </div>
        <div className="nexttestimonial">
          <ArrowLeft />
          <img src="/Navigation stars.png" alt="" width="20px" />
          <ArrowRight />
        </div>
      </section>

      <div className="subheading">
        <h1>Contact Us</h1>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>

      <section className="feedback">
        <div className="form">
          <div className="radio">
            <input type="radio" id="sayhi" name="radiobtn" />
            <label for="sayhi">Say Hi!!</label>
            <input type="radio" id="getaquote" name="radiobtn" />
            <label for="getadquote">Get a Quote</label>
          </div>
          <div className="inp">
            <label htmlFor="nametaker">Name</label>
            <input type="text" name="form" id="nametaker" placeholder='Name' />
            <label htmlFor="emailtaker">Email*</label>
            <input type="email" name="form" id="emailtaker" placeholder='Email' />
            <label htmlFor="msgtaker">Message*</label>
            <textarea name="form" id="msgtaker" placeholder='Message' maxLength={260}></textarea>
          </div>
          <div className="sendmsg">
            <button>Send Message</button>
          </div>
        </div>
        <div>
          <img src="/Illustration (6).png" alt="" />
        </div>
      </section>

      <footer className='footer'>
        <nav className="footernavbar">
          <div className="logo"><img src="Logo.png" alt="" /></div>
          <div className="footerul">
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="socialmedialogo">
            <div><Linkedin /></div>
            <div><Facebook /></div>
            <div><Twitter /></div>
          </div>
        </nav>

        <div className="contactinfo">
          <div className="acutalinfo">
            <div className="contactus">Contact us: </div>
            <div className="acutalinfo2">
              <p>Email: aayushjain22002@gmail.com</p>
              <p>Phone: 123 456 7890</p>
              <p>Address: 1234 Main st. <br /> Mooncity Sunstate PlanetDistrict, 12345</p>
            </div>
          </div>
          <div className="news">
            <input type="email" name="emailinput" id="emailinput" placeholder='Email' />
            <button>Subscribe to news</button>
          </div>
        </div>
        {/* <div className="copyright">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div> */}
      </footer>
    </>
  )
}

export default App