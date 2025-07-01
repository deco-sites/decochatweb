interface Props {
  /**
   * @title Page Title
   * @description Main title of the privacy policy page
   */
  title?: string;
}

const defaultProps: Props = {
  title: "Privacy and Data Protection Policy",
};

export default function PrivacyPolicy({
  title = defaultProps.title,
}: Props) {
  return (
    <div class="w-full bg-dc-50 py-16 lg:py-24">
      <div class="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div class="max-w-4xl mx-auto">
          {/* Header */}
          <div class="text-center mb-12">
            <h1 class="text-4xl lg:text-5xl font-bold text-dc-900 mb-4">
              {title}
            </h1>
            <p class="text-lg text-dc-600">
              Last updated: August 18, 2023
            </p>
          </div>

          {/* Content Container */}
          <div class="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div class="prose prose-lg max-w-none">
              {/* Introduction */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Introduction</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    Your privacy is important to us. This Privacy and Data Protection Policy explains how AGIL
                    ARQUITETURA DE SOFTWARE LTDA ("we," "us," or "our") collects, uses, discloses, and safeguards
                    your information when you visit our website deco.cx (the "Site") and use our platform services
                    (the "Service").
                  </p>
                  <p>
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy
                    policy, please do not access the site or use our services.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Information We Collect</h2>
                <div class="space-y-6">
                  <div>
                    <h3 class="text-xl font-semibold text-dc-800 mb-3">Personal Data</h3>
                    <div class="space-y-3 text-dc-700 leading-relaxed">
                      <p>
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul class="list-disc pl-6 space-y-1">
                        <li>Register for an account</li>
                        <li>Use our services</li>
                        <li>Contact us for support</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Participate in surveys or promotions</li>
                      </ul>
                      <p>
                        Personal data may include: name, email address, phone number, company information,
                        usage data, and other information you choose to provide.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-dc-800 mb-3">Automatically Collected Information</h3>
                    <div class="space-y-3 text-dc-700 leading-relaxed">
                      <p>
                        When you visit our Site, we may automatically collect certain information about your
                        device and usage patterns, including:
                      </p>
                      <ul class="list-disc pl-6 space-y-1">
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring website</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">How We Use Your Information</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>We use the information we collect for various purposes, including:</p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions and managing accounts</li>
                    <li>Communicating with you about our services</li>
                    <li>Improving our platform and user experience</li>
                    <li>Sending marketing communications (with your consent)</li>
                    <li>Complying with legal obligations</li>
                    <li>Protecting against fraud and security threats</li>
                    <li>Analyzing usage patterns and trends</li>
                  </ul>
                </div>
              </section>

              {/* Information Sharing */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Information Sharing and Disclosure</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties
                    without your consent, except in the following circumstances:
                  </p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Service providers who assist us in operating our platform</li>
                    <li>Legal compliance when required by law or court order</li>
                    <li>Protection of our rights and safety of our users</li>
                    <li>Business transfers in case of merger or acquisition</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Data Security</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                    These measures include:
                  </p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication systems</li>
                    <li>Employee training on data protection practices</li>
                    <li>Incident response procedures</li>
                  </ul>
                  <p>
                    However, no method of transmission over the internet is 100% secure, and we cannot
                    guarantee absolute security.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Your Rights and Choices</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal data:
                  </p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li><strong>Access:</strong> Request access to your personal data</li>
                    <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Restriction:</strong> Request limitation of processing</li>
                    <li><strong>Objection:</strong> Object to certain types of processing</li>
                    <li><strong>Withdraw consent:</strong> Withdraw previously given consent</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Cookies and Tracking Technologies</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our Site.
                    Cookies are small data files stored on your device that help us:
                  </p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze site traffic and usage patterns</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Improve site performance and functionality</li>
                  </ul>
                  <p>
                    You can manage your cookie preferences through your browser settings. Note that disabling
                    certain cookies may affect the functionality of our Site.
                  </p>
                </div>
              </section>

              {/* International Transfers */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">International Data Transfers</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    Your information may be transferred to and processed in countries other than your country
                    of residence. These countries may have different data protection laws than your jurisdiction.
                  </p>
                  <p>
                    When we transfer your data internationally, we implement appropriate safeguards to ensure
                    your information remains protected in accordance with this Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Data Retention */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Data Retention</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes
                    outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and
                    enforce our agreements.
                  </p>
                  <p>
                    When we no longer need your personal information, we will securely delete or anonymize it.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Children's Privacy</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    Our services are not intended for children under 13 years of age. We do not knowingly
                    collect personal information from children under 13. If you become aware that a child
                    has provided us with personal information, please contact us immediately.
                  </p>
                </div>
              </section>

              {/* Third-Party Links */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Third-Party Links</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    Our Site may contain links to third-party websites. We are not responsible for the privacy
                    practices or content of these third-party sites. We encourage you to review the privacy
                    policies of any third-party sites you visit.
                  </p>
                </div>
              </section>

              {/* Changes to Policy */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Changes to This Privacy Policy</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this
                    page with an updated revision date. We encourage you to review this Privacy Policy
                    periodically for any changes.
                  </p>
                  <p>
                    Continued use of our services after any modifications indicates your acceptance of the
                    updated Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section class="mb-8">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Contact Us</h2>
                <div class="bg-primary-light/10 rounded-lg p-6">
                  <div class="space-y-4 text-dc-700 leading-relaxed">
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, please
                      contact us at:
                    </p>
                    <div class="space-y-2">
                      <p><strong>AGIL ARQUITETURA DE SOFTWARE LTDA</strong></p>
                      <p>Email: privacy@deco.cx</p>
                      <p>Website: deco.cx</p>
                      <p>Address: [Company Address]</p>
                    </div>
                    <p>
                      We will respond to your inquiry within a reasonable timeframe in accordance with
                      applicable law.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Preview() {
  return <PrivacyPolicy {...defaultProps} />;
} 