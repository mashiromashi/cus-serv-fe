import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to Customer Service Portal ("we," "our," or "us"). We
                are committed to protecting your privacy and personal
                information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                customer service application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Email address</li>
                <li>Name (first and last)</li>
                <li>Profile picture (if provided through social login)</li>
                <li>Login credentials</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.2 Facebook Login Information
              </h3>
              <p className="text-gray-700 mb-4">
                When you choose to log in with Facebook, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Your Facebook profile information (name, email, profile
                  picture)
                </li>
                <li>
                  Public profile information as permitted by your Facebook
                  privacy settings
                </li>
                <li>Information you choose to share with our application</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.3 Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide and maintain our customer service platform</li>
                <li>Authenticate users and maintain account security</li>
                <li>Communicate with you about our services</li>
                <li>Improve our application and user experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure platform security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties except in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Trusted third-party
                  services that help us operate our platform
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger,
                  acquisition, or sale of assets
                </li>
                <li>
                  <strong>Consent:</strong> When you have given explicit consent
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Facebook Data Policy Compliance
              </h2>
              <p className="text-gray-700 mb-4">
                Our use of Facebook Login and any data obtained through Facebook
                is subject to Facebook's Data Policy. We:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Only request permissions necessary for our app's functionality
                </li>
                <li>
                  Do not use Facebook data for advertising or marketing to third
                  parties
                </li>
                <li>Respect user privacy settings and preferences</li>
                <li>Provide users with clear information about data usage</li>
                <li>
                  Allow users to delete their data and disconnect their Facebook
                  account
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Monitoring for unauthorized access or breaches</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing
                  activities
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent for data
                  processing
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Data Retention
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as
                necessary to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Our service is not intended for children under the age of 13. We
                do not knowingly collect personal information from children
                under 13. If we become aware that we have collected personal
                information from a child under 13, we will take steps to delete
                such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your data during such transfers, in
                compliance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@customerserviceportal.com
                  <br />
                  <strong>Address:</strong> [Your Company Address]
                  <br />
                  <strong>Phone:</strong> [Your Phone Number]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Compliance Information
              </h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy complies with:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Facebook Platform Policies</li>
                <li>Other applicable data protection laws</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
