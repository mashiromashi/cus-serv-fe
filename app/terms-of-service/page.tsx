import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the Customer Service Portal ("Service"),
                you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Use License
              </h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily access and use the Service
                for personal, non-commercial transitory viewing only. This is
                the grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained in the
                  Service
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. You are
                responsible for safeguarding the password and for maintaining
                the confidentiality of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Facebook Login
              </h2>
              <p className="text-gray-700 mb-4">
                By using Facebook Login, you agree to Facebook's Terms of
                Service and acknowledge that your use of Facebook's services is
                governed by their terms and policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Prohibited Uses
              </h2>
              <p className="text-gray-700 mb-4">You may not use our Service:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  For any unlawful purpose or to solicit others to perform
                  unlawful acts
                </li>
                <li>
                  To violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights
                  or the intellectual property rights of others
                </li>
                <li>
                  To harass, abuse, insult, harm, defame, slander, disparage,
                  intimidate, or discriminate
                </li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Service Availability
              </h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to withdraw or amend our Service, and any
                service or material we provide via the Service, in our sole
                discretion without notice. We do not warrant that our Service
                will be available at any particular time or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Disclaimer
              </h2>
              <p className="text-gray-700 mb-4">
                The information on this Service is provided on an 'as is' basis.
                To the fullest extent permitted by law, this Company excludes
                all representations, warranties, conditions and terms related to
                our Service and the use of this Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Limitations
              </h2>
              <p className="text-gray-700 mb-4">
                In no event shall Customer Service Portal or its suppliers be
                liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Accuracy of Materials
              </h2>
              <p className="text-gray-700 mb-4">
                The materials appearing on the Service could include technical,
                typographical, or photographic errors. We do not warrant that
                any of the materials on its Service are accurate, complete, or
                current.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Modifications
              </h2>
              <p className="text-gray-700 mb-4">
                We may revise these terms of service at any time without notice.
                By using this Service, you are agreeing to be bound by the then
                current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Jurisdiction] and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that state or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@customerserviceportal.com
                  <br />
                  <strong>Address:</strong> [Your Company Address]
                  <br />
                  <strong>Phone:</strong> [Your Phone Number]
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
