import React from "react";

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy" className="py-20 bg-gray-10">
      <div className="max-container padding-container">
        <h2 className="text-center bold-40 mb-10">Privacy Policy</h2>
        <p className="regular-16 text-gray-30 mb-4">
            At Lux, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our online massage booking service.
        </p>

        <div className="grid lg:grid-cols-1 gap-y-8 lg:gap-x-16 items-center">
          <div>
            <h3 className="bold-32 mb-4">1. Information We Collect</h3>
            <p className="regular-16 text-gray-30 mb-2">
              a. Personal Information: When you use Lux's service, we may collect personal information such as your name, email address, phone number, and payment details.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
              b. Verification Information: To ensure the safety of our masseuses, we may collect verification information such as a copy of your National ID and proof of accommodation reservation.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
              c. Usage Information: We may collect information about how you interact with our service, including your browsing and booking activities.
            </p>

          </div>
          <div>
            <h3 className="bold-32 mb-4">2. How We Use Your Information</h3>
            <p className="regular-16 text-gray-30 mb-2">
              a. To Provide Services: We use your personal information to facilitate massage appointments, process payments, and communicate with you about your bookings.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
              b. Safety and Security: Verification information is used to verify your identity and ensure the safety of our masseuses during appointments.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
              c. Improve Our Service: We analyze usage information to improve the functionality and user experience of our service.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">3. Information Sharing</h3>
            <p className="regular-16 text-gray-30 mb-2">
              a. Third-Party Service Providers: We may share your information with third-party service providers who assist us in operating our service, processing payments, or performing other business functions.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
              b. Legal Requirements: We may disclose your information in response to a legal request or to comply with applicable laws, regulations, or legal processes.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">4. Data Security</h3>
            <p className="regular-16 text-gray-30">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">5. Your Rights and Choices</h3>
            <p className="regular-16 text-gray-30 mb-2">
              a. Access and Correction: You have the right to access and correct any inaccuracies in your personal information held by Lux.
            </p>
            <p className="regular-16 text-gray-30 mb-2">
              b. Opt-Out: You may opt out of receiving promotional communications from us by following the instructions provided in the communication or by contacting us directly.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">6. Children's Privacy</h3>
            <p className="regular-16 text-gray-30">
              Lux's service is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us to request deletion of that information.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">7. Changes to This Privacy Policy</h3>
            <p className="regular-16 text-gray-30">
              We reserve the right to modify this Privacy Policy at any time without prior notice. Your continued use of the Service after modifications will constitute your acceptance of the revised Privacy Policy. We will notify you of any material changes by posting the updated policy on our website or through other appropriate means.
            </p>
          </div>

          <div>
            <h3 className="bold-32 mb-4">8. Contact Us</h3>
            <p className="regular-16 text-gray-30">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:info@luxxtouch.com" className="text-blue-500 hover:underline-offset-1 hover:underline">info@luxxtouch.com</a>. By using Lux's service, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
