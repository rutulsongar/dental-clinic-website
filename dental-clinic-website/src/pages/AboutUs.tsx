import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Team Member Data
const teamMembers = [
  {
    id: 1,
    name: 'Dr. Michael Chen',
    role: 'Lead Dentist & Founder',
    bio: 'Dr. Chen has over 15 years of experience in general and cosmetic dentistry. He founded SmileCare with a vision to make quality dental care accessible to everyone.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
    education: 'DDS, University of California',
    specialties: ['General Dentistry', 'Cosmetic Dentistry', 'Dental Implants']
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    role: 'Orthodontist',
    bio: 'Dr. Johnson specializes in orthodontics with particular expertise in invisible aligners and early intervention treatments for children.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    education: 'DMD, Harvard University',
    specialties: ['Orthodontics', 'Invisible Aligners', 'Early Intervention']
  },
  {
    id: 3,
    name: 'Dr. James Wilson',
    role: 'Pediatric Dentist',
    bio: 'Dr. Wilson loves working with children and specializes in creating positive dental experiences for young patients to establish good oral health habits early.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    education: 'DDS, New York University',
    specialties: ['Pediatric Dentistry', 'Preventive Care', 'Dental Education']
  },
  {
    id: 4,
    name: 'Dr. Emily Rodriguez',
    role: 'Cosmetic Dentist',
    bio: 'Dr. Rodriguez is passionate about transforming smiles. She specializes in advanced cosmetic procedures and has helped thousands of patients achieve their dream smile.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    education: 'DMD, University of Pennsylvania',
    specialties: ['Cosmetic Dentistry', 'Veneers', 'Smile Makeovers']
  }
];

// Clinic features
const features = [
  {
    id: 1,
    title: 'State-of-the-Art Facility',
    description: 'Our clinic is equipped with the latest dental technology to ensure precise diagnostics and effective treatments.',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Comfortable Environment',
    description: 'We\'ve designed our clinic to be a warm, welcoming space where patients can feel relaxed during their visit.',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Experienced Team',
    description: 'Our diverse team of dentists brings specialized expertise across all areas of dentistry for comprehensive care.',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Patient-Centered Approach',
    description: 'We listen to your concerns and preferences to create personalized treatment plans that meet your specific needs.',
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    )
  }
];

// Our values
const values = [
  {
    id: 1,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our practice, from clinical care to patient experience.'
  },
  {
    id: 2,
    title: 'Compassion',
    description: 'We treat every patient with empathy and understanding, acknowledging dental anxiety and individual needs.'
  },
  {
    id: 3,
    title: 'Integrity',
    description: 'We provide honest recommendations and transparent information about treatment options and costs.'
  },
  {
    id: 4,
    title: 'Innovation',
    description: 'We continuously adopt advanced techniques and technologies to improve patient outcomes and comfort.'
  }
];

const AboutUs: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-24 md:pt-28">
      {/* Header Section */}
      <section 
        ref={headerRef} 
        className="bg-gradient-to-r from-dark-blue to-primary text-white py-16 md:py-24"
      >
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Meet our exceptional team of dental professionals dedicated to your smile and oral health.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                A Legacy of Dental Excellence
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005 by Dr. Michael Chen, SmileCare Dental Clinic began with a simple mission: to provide exceptional dental care in a comfortable, welcoming environment. What started as a small practice has grown into a comprehensive dental center known for its quality care and patient satisfaction.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've expanded our team and services to meet the diverse needs of our growing patient base. Today, we're proud to offer a full range of dental services from preventive care to advanced cosmetic and restorative treatments.
              </p>
              <p className="text-gray-600">
                Despite our growth, we've maintained our commitment to personalized care. Every patient is treated as an individual with unique needs and concerns. This patient-centered approach is at the heart of everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80" 
                alt="Our dental clinic" 
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section 
        ref={featuresRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={featuresInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold"
            >
              OUR CLINIC
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            >
              What Sets Us Apart
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        ref={valuesRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold"
            >
              OUR VALUES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            >
              Guiding Principles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto text-gray-600"
            >
              These core values guide our practice and inform every decision we make.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section 
        ref={teamRef}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={teamInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold"
            >
              OUR TEAM
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            >
              Meet Our Dental Experts
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={teamInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto text-gray-600"
            >
              Our team of experienced dental professionals is committed to providing you with the highest quality care in a comfortable environment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="text-white font-semibold">{member.education}</h4>
                    <div className="mt-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mr-2 mb-2">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Care?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Schedule your appointment today and discover why our patients trust us with their smiles.
          </p>
          <Link 
            to="/appointment" 
            className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-light-blue hover:text-dark-blue transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Book Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 