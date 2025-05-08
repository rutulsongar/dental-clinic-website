import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// List of dental services for the appointment form
const dentalServices = [
  'General Check-up',
  'Teeth Cleaning',
  'Tooth Extraction',
  'Fillings',
  'Root Canal',
  'Dental Implants',
  'Teeth Whitening',
  'Orthodontics',
  'Dentures',
  'Emergency Dental Care',
  'Pediatric Dentistry',
  'Cosmetic Consultation'
];

// List of dentists for the appointment form
const dentists = [
  {
    id: 1,
    name: 'Dr. Michael Chen',
    specialty: 'General & Cosmetic Dentistry'
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    specialty: 'Orthodontics'
  },
  {
    id: 3,
    name: 'Dr. James Wilson',
    specialty: 'Pediatric Dentistry'
  },
  {
    id: 4,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Cosmetic Dentistry'
  }
];

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    dentist: '',
    isNewPatient: 'yes',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.service) {
      setFormError(true);
      return;
    }
    
    // In a real application, you would send the form data to a server here
    console.log('Appointment form submitted:', formData);
    
    // Reset form and show success message
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      dentist: '',
      isNewPatient: 'yes',
      message: ''
    });
    setFormError(false);
    setFormSubmitted(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  // Get current date for min date in the date picker
  const today = new Date().toISOString().split('T')[0];

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
            Book an Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Schedule your visit using our convenient online booking system.
          </motion.p>
        </div>
      </section>

      {/* Appointment Form and Info Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Appointment Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8 lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Schedule Your Visit</h2>
              
              {formSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p className="font-semibold">Appointment Request Received!</p>
                    <p>We'll contact you shortly to confirm your appointment details.</p>
                  </div>
                </div>
              )}
              
              {formError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Please fill out all required fields.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  {/* Appointment Information */}
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      {dentalServices.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dentist" className="block text-gray-700 font-medium mb-2">
                      Preferred Dentist
                    </label>
                    <select
                      id="dentist"
                      name="dentist"
                      value={formData.dentist}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">No preference</option>
                      {dentists.map((dentist) => (
                        <option key={dentist.id} value={dentist.name}>
                          {dentist.name} - {dentist.specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* New Patient Radio Buttons */}
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Are you a new patient?
                  </label>
                  <div className="flex space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="new-patient-yes"
                        name="isNewPatient"
                        value="yes"
                        checked={formData.isNewPatient === 'yes'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="new-patient-yes">Yes</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="new-patient-no"
                        name="isNewPatient"
                        value="no"
                        checked={formData.isNewPatient === 'no'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="new-patient-no">No</label>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please share any specific concerns or requirements"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Request Appointment
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Appointment Information */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Appointment Process */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-xl font-bold mb-6 text-gray-800">Appointment Process</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Request</h3>
                      <p className="text-gray-600 text-sm">Submit your preferred date and time through our online form.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Confirmation</h3>
                      <p className="text-gray-600 text-sm">We'll call or email you to confirm your appointment details.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Reminder</h3>
                      <p className="text-gray-600 text-sm">Receive a reminder 24 hours before your scheduled appointment.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Visit</h3>
                      <p className="text-gray-600 text-sm">Arrive 15 minutes before your appointment to complete any necessary paperwork.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Patient Information */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">New Patient?</h2>
                <p className="text-gray-600 mb-4">
                  For your first visit, please bring:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Valid identification
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Insurance information
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    List of current medications
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Medical and dental history
                  </li>
                </ul>
              </div>

              {/* Insurance Information */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Insurance</h2>
                <p className="text-gray-600 mb-4">
                  We accept most major insurance plans. Contact us if you have questions about your specific coverage.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700 text-sm">Aetna</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700 text-sm">Blue Cross</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700 text-sm">Cigna</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700 text-sm">Delta Dental</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700 text-sm">MetLife</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-gray-700 text-sm">United Healthcare</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-red-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-md border-l-4 border-red-500">
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="w-10 h-10 text-red-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Dental Emergency?</h3>
                <p className="text-gray-600">Don't wait! Call our emergency line for immediate assistance.</p>
              </div>
            </div>
            <a href="tel:+11234567890" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
              Call Now: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment; 