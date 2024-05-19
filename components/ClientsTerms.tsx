import React from "react";

const ClientsTerms = () => {
    return (
    <section id="privacy-policy" className="py-20 bg-gray-10">
      <div className="max-container padding-container">
        <h2 className="text-center bold-40 mb-10">Terms and Conditions for Clients</h2>
        <p className="regular-16 text-gray-30 mb-4">
            Welcome to Lux, where your relaxation and well-being are our top priorities. These Terms and Conditions ("Terms") outline the guidelines and expectations for clients ("you" or "your") engaging with Lux Vita Spa/Lux Touch ("we," "us," or "our"). By booking and receiving massage services through our platform, you agree to comply with these Terms. Please review them carefully.
        </p>

        <div className="grid lg:grid-cols-1 gap-y-8 lg:gap-x-16 items-center">
          <div>
            <h3 className="bold-32 mb-4">1. Booking and Appointment</h3>
            <p className="regular-16 text-gray-30 mb-2">
                a. By booking an appointment through our platform, you agree to provide accurate and complete information about yourself.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
                b. Appointments are subject to availability, and we cannot guarantee the availability of specific masseuses at your preferred time.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
                c. You must be at least 18 years old to book an appointment through our platform.
            </p>

          </div>
          <div>
            <h3 className="bold-32 mb-4">2. Payment</h3>
            <p className="regular-16 text-gray-30 mb-2">
                a. Payment for appointments is due at the time of booking and must be made through our designated payment processor.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
                b. All payments are non-refundable unless otherwise stated in our refund policy.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">3. Cancellation and Rescheduling</h3>
            <p className="regular-16 text-gray-30 mb-2">
                a. You have the right to cancel or reschedule your appointment up to 24 hours before the scheduled appointment time without incurring any additional charges.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
                b. Late cancellations or no-shows may result in a cancellation fee, which will be charged to the payment method used to book the appointment.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">4. Conduct and Behavior</h3>
            <p className="regular-16 text-gray-30">
                a. You are expected to conduct yourself in a respectful and courteous manner at all times when receiving services from Lux.
            </p>
            <p className="regular-16 text-gray-30">
                b. Any form of inappropriate behavior, including but not limited to harassment, discrimination, or misconduct, will not be tolerated and may result in termination of the appointment without refund.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">5. Safety and Security</h3>
            <p className="regular-16 text-gray-30 mb-2">
                a. Your safety and security are of utmost importance to us. If you ever feel uncomfortable or unsafe during your appointment, please inform your masseuse immediately.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
                b. We recommend that you provide a safe and private space for the massage appointment to take place.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">6. Confidentiality</h3>
            <p className="regular-16 text-gray-30">
                a. Your privacy is important to us. We will not disclose any personal information you provide to us without your explicit consent, except as required by law.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
                b. We may collect and use your personal information in accordance with our Privacy Policy, which you can review on our website.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">7. Liability</h3>
            <p className="regular-16 text-gray-30 mb-2">
                a. While we strive to provide a safe and enjoyable experience for our clients, we are not liable for any injuries, damages, or losses that may occur during or as a result of your use of our services.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
                b. We recommend that you consult with a healthcare professional before booking a massage appointment, especially if you have any underlying health conditions.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">8. Amendments to Terms</h3>
            <p className="regular-16 text-gray-30 mb-2">
                a. Lux reserves the right to amend these Terms at any time. Any changes will be communicated to you in writing.
            </p>
            <p className="regular-16 text-gray-30 mb-2" >
                b. Your continued use of our services following any changes to these Terms constitutes acceptance of the amended terms.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">9. Governing Law</h3>
            <p className="regular-16 text-gray-30 mb-2">
                These Terms shall be governed by and construed in accordance with the laws of te Republic of Kenya, without regard to its conflict of law provisions.
            </p>
          </div>
          <div>
            <h3 className="bold-32 mb-4">10. Contact Us</h3>
            <p className="regular-16 text-gray-30 mb-2">
                If you have any questions or concerns about these Terms, please contact us at <a href="mailto:info@luxxtouch.com" className="text-blue-500 hover:underline">info@luxxtouch.com</a> or call us at +254707529691.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default ClientsTerms;