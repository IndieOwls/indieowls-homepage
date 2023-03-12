import React from 'react'

import { Layout } from '../layout'
import { Stack } from '../components'

function IndexPage() {
  return (
    <Layout>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>Who We Are</a>
          </li>
          <li>
            <a href='/contact'>Our Services</a>
          </li>
          <li>
            <a href='/contact'>Our Credentials</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <Stack as='header'>
        <h1>
          Indie Owls Creative
          <small>Innovate Your Business with Next Generation Software</small>
        </h1>
      </Stack>
      <main>
        <Stack as='section'>
          <h2>Who We Are</h2>
          <p>
            Welcome to Indie Owls Creative, where we specialize in turning your ideas into reality.
            As a small team of experienced software engineers and product managers, we provide
            high-quality software engineering and product management services specifically tailored
            to the needs of early-stage startups. We help you build your core product from the
            ground up with innovative, reliable, and scalable software solutions. From React and
            JavaScript engineering to AI development and AR/VR apps, we have the expertise to create
            custom solutions that meet your unique needs and goals. Let us help you innovate your
            business and achieve your vision with next-generation software.
          </p>
        </Stack>
        <Stack as='section'>
          <h2>Our Services</h2>
          <ul>
            <li>
              React Engineering: We specialize in building high-performance web applications using
              React and other modern front-end technologies. Our custom React solutions offer fast
              load times, smooth user experiences, and scalable architectures that can grow with
              your business.
            </li>
            <li>
              Artificial Intelligence: We utilize the latest advances in machine learning technology
              to create custom AI solutions that can help you automate your business processes,
              improve your customer experience, and make better business decisions.
            </li>
            <li>
              Product Management: We help you define your product vision and roadmap, and then we
              work with you to build your product from the ground up. We can help you with
              everything from product discovery to product launch.
            </li>
          </ul>
        </Stack>
        <Stack as='section'>
          <h2>Additional Services Include</h2>
          <ul>
            <li>E-Commerce</li>
            <li>Data Visualization</li>
            <li>Next-Generation Javascript</li>
            <li>Maps & Navigation</li>
            <li>Phone & SMS</li>
            <li>Web Development</li>
          </ul>
        </Stack>
        <Stack as='section'>
          <h2>Our Profiles</h2>
          <h3>Our Founder and Lead Engineer</h3>
          <p>Me</p>
        </Stack>
        <Stack as='section'>
          <h2>Our Experience and Credentials</h2>
          <p>
            At Indie Owls Creative, we specialize in providing high-quality software engineering and
            product management services to early-stage startups. Our experienced team of software
            engineers and product managers have worked with startups, small businesses, and
            enterprises to deliver custom software solutions that meet their unique needs and goals.
            <br />
            <br />
            Our founder is a Certified Scrum Product Owner (CSPO) certified by the Scrum Alliance,
            demonstrating our commitment to delivering high-quality Agile and Scrum services. We
            have extensive experience in applying Agile and Scrum methodologies to software
            engineering and product management, and can help you optimize your development processes
            and achieve your business objectives.
            <br />
            <br />
            We have a proven track record of success in delivering custom software solutions that
            help our clients achieve their business objectives. Our experience working with
            early-stage startups has given us a deep understanding of the challenges and
            opportunities they face, and we are committed to delivering high-quality services that
            meet your specific needs and goals.
            <br />
            <br />
            Let us help you build your core product and innovate your business with next-generation
            software. Contact us today to schedule a consultation and learn how we can help you
            achieve your vision with custom software solutions.
          </p>
        </Stack>
        <Stack as='section'>
          <h2>Contact Us</h2>
          <p>
            Ready to take your business to the next level with custom software solutions? Contact us
            today to schedule a consultation and learn how we can help you achieve your vision. We
            are here to answer any questions you may have and help you find the right solution for
            your needs.
          </p>
          <p>
            You can reach us by email or by filling out the contact form below. We will get back to
            you as soon as possible.
          </p>
          <p>
            Email: [insert email address]
            <br />
            Contact Form:
            <br />
            [insert contact form]
          </p>
          <p>
            Thank you for your interest in Indie Owls Creative. We look forward to hearing from you!
          </p>
        </Stack>
      </main>
      <footer>
        [Insert Company Logo] Social Media Links [Insert icons with links to your social media
        pages] Copyright © [Insert Year] Indie Owls Creative. All Rights Reserved. Privacy Policy
        Terms of Use Thank you for visiting our website. We look forward to hearing from you!
      </footer>
    </Layout>
  )
}

export default IndexPage
