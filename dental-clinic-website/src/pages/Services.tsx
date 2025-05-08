import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Service data for detailed information
const servicesData = [
  {
    id: 1,
    title: 'General Dentistry',
    description: 'Our general dentistry services form the foundation of good oral health. We provide comprehensive care for patients of all ages, focusing on prevention and maintenance.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    services: [
      'Comprehensive Dental Exams',
      'Digital X-rays',
      'Professional Teeth Cleaning',
      'Dental Fillings',
      'Root Canal Therapy',
      'Tooth Extractions',
      'Dental Crowns and Bridges'
    ]
  },
  {
    id: 2,
    title: 'Cosmetic Dentistry',
    description: 'Our cosmetic dentistry services are designed to enhance your smile\'s appearance and boost your confidence. We offer a range of treatments to address various aesthetic concerns.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1615976909384-fdbbe4cf3145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    services: [
      'Professional Teeth Whitening',
      'Porcelain Veneers',
      'Dental Bonding',
      'Smile Makeovers',
      'Enamel Shaping',
      'Tooth-Colored Fillings',
      'Gum Contouring'
    ]
  },
  {
    id: 3,
    title: 'Orthodontics',
    description: 'Our orthodontic treatments help correct misaligned teeth and jaws, improving both the function and appearance of your smile. We offer modern solutions for patients of all ages.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1601880348117-25c1127a95df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    services: [
      'Traditional Metal Braces',
      'Ceramic (Clear) Braces',
      'Invisible Aligners',
      'Retainers',
      'Early Intervention Treatments',
      'Surgical Orthodontics',
      'TMJ/TMD Treatment'
    ]
  },
  {
    id: 4,
    title: 'Dental Implants',
    description: 'Our dental implant solutions provide a permanent remedy for missing teeth. These artificial tooth roots create a strong foundation for fixed or removable replacement teeth.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    services: [
      'Single Tooth Implants',
      'Multiple Tooth Implants',
      'Full Arch Replacements',
      'Implant-Supported Dentures',
      'Bone Grafting',
      'Sinus Lifts',
      'All-on-4® Implants'
    ]
  },
  {
    id: 5,
    title: 'Pediatric Dentistry',
    description: 'Our pediatric dental services cater specifically to children, ensuring they receive gentle care in a friendly environment. We focus on building positive dental experiences from an early age.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1581362072978-214c24307539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    services: [
      'Pediatric Dental Exams',
      'Child-friendly Cleanings',
      'Dental Sealants',
      'Fluoride Treatments',
      'Space Maintainers',
      'Tooth-Colored Fillings',
      'Early Orthodontic Assessment'
    ]
  },
  {
    id: 6,
    title: 'Emergency Dental Care',
    description: 'Our emergency dental services provide quick relief when you need it most. We offer prompt care for dental pain, injuries, and other urgent dental issues.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    services: [
      'Severe Toothache Relief',
      'Dental Trauma Treatment',
      'Emergency Extractions',
      'Lost Filling or Crown Repair',
      'Treatment of Dental Infections',
      'Broken Tooth Repair',
      'Post-Treatment Care Instructions'
    ]
  }
];

const Services: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Create refs for each service section
  const serviceRef1 = useInView({ triggerOnce: true, threshold: 0.1 });
  const serviceRef2 = useInView({ triggerOnce: true, threshold: 0.1 });
  const serviceRef3 = useInView({ triggerOnce: true, threshold: 0.1 });
  const serviceRef4 = useInView({ triggerOnce: true, threshold: 0.1 });
  const serviceRef5 = useInView({ triggerOnce: true, threshold: 0.1 });
  const serviceRef6 = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Combine refs and inView states into an array for easy access
  const serviceRefs = [
    serviceRef1,
    serviceRef2,
    serviceRef3,
    serviceRef4,
    serviceRef5,
    serviceRef6
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive dental care for your entire family with modern technology and a gentle touch.
          </motion.p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                ref={serviceRefs[index][0]}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 items-center`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={serviceRefs[index][1] ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover"
                  />
                </motion.div>
                
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={serviceRefs[index][1] ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={serviceRefs[index][1] ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl font-bold mb-4 text-gray-800"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={serviceRefs[index][1] ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-600 mb-6"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={serviceRefs[index][1] ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-primary">What we offer:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.services.map((item, i) => (
                        <motion.li
                          key={i}
                          custom={i}
                          initial="hidden"
                          animate={serviceRefs[index][1] ? "visible" : "hidden"}
                          variants={fadeInVariants}
                          className="flex items-center"
                        >
                          <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Our friendly team is ready to provide you with the exceptional dental care you deserve. Book your appointment today!
          </p>
          <Link 
            to="/appointment" 
            className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-light-blue hover:text-dark-blue transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 