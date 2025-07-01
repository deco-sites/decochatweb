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
              Last updated: July 26, 2023
            </p>
          </div>

          {/* Content Container */}
          <div class="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div class="prose prose-lg max-w-none">
              {/* Introduction */}
              <section class="mb-12">
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    We, at <strong>DECO PLATAFORMA DIGITAL LTDA.</strong> ("deco.cx" or "Platform"), a private legal entity with limited liability, headquartered at Rua Visconde de Pirajá, nº 495, sala 1, Ipanema, Rio de Janeiro - RJ, ZIP: 22.410-003, registered under CNPJ/ME number 47.563.279/0001-85, guarantee that your navigation on the Platform will have total security, meeting the most rigorous privacy standards, ensuring the necessary confidentiality for your Personal Data.
                  </p>
                  <p>
                    This Policy is intended to explain to you about how we will handle the personal data that you provide to us when accessing and registering on our Platform. This Policy is an integral part of our Terms and Conditions of Use.
                  </p>
                  <p>
                    We do not aim to collect or, in any way, request Personal Data from individuals under the age of 18, as the Platform is intended only for use by adults. Thus, if we become aware that we have collected Personal Data from an individual under the age of 18, we will delete the information provided and will not keep it in our databases.
                  </p>
                  <p>
                    If we make significant changes to this Policy, we will notify you about these changes. However, we recommend that you access this page from time to time to keep yourself updated on how we treat your personal data, as we are always seeking to improve our services, and this Policy may be updated to reflect the improvements made.
                  </p>
                  <p>
                    And, if, after reading this Policy, you still have questions, feel free to contact us through the following email: <strong>privacy@deco.cx</strong>.
                  </p>
                  <p>
                    We do not recommend browsing or registering on our Platform if you do not agree with the terms of this Privacy Policy, as in certain cases, the processing of your personal data is necessary for certain purposes, regardless of your consent.
                  </p>
                </div>
              </section>

              {/* Table of Contents */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">Table of Contents</h2>
                <div class="bg-dc-50 rounded-lg p-6">
                  <ul class="space-y-2 text-dc-700">
                    <li>1. A Brief Summary of Our Privacy Policy</li>
                    <li>2. Definitions</li>
                    <li>3. How We Collect Your Personal Data</li>
                    <li>4. What Personal Data is Collected and For What Purpose</li>
                    <li>5. Who We Share Your Personal Data With</li>
                    <li>6. Exercising Your Rights</li>
                    <li>7. Your Rights</li>
                    <li>8. Data Security</li>
                    <li>9. How Long Will Your Data Be Stored?</li>
                    <li>10. How to Contact Us</li>
                    <li>11. Applicable Law</li>
                    <li>12. Updates</li>
                  </ul>
                </div>
              </section>

              {/* A Brief Summary */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">1. A Brief Summary of Our Privacy Policy</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    We recommend that this Privacy Policy be read in its entirety. However, we would like to highlight some points that we consider essential:
                  </p>
                  <p>
                    Except in some specific cases, the controller of your personal data, for the purposes of this Privacy Policy, is <strong>DECO PLATAFORMA DIGITAL LTDA.</strong>, a private legal entity with limited liability, headquartered at Rua Visconde de Pirajá, nº 495, sala 1, Ipanema, Rio de Janeiro/RJ, ZIP: 22.410-003, registered under CNPJ/ME number 47.563.279/0001-85.
                  </p>
                  <p>
                    As per item 3 below, we will collect your personal data predominantly in two distinct ways:
                  </p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Directly from you, when you access our website and register on our Platform to contract the services; or</li>
                    <li>Automatically, when you navigate our website.</li>
                  </ul>
                  <p>
                    Your personal data will be used for the purpose they were collected, as described in item 4 below, and may be shared with third parties, aiming at the exercise of our essential commercial activities, as well as to comply with any legal obligation or if required or authorized by law.
                  </p>
                  <p>
                    If you wish to exercise your rights or obtain clarification on how we handle your personal data, you can contact us through the following email: <strong>privacy@deco.cx</strong>.
                  </p>
                </div>
              </section>

              {/* Definitions */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">2. Definitions</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>For the purposes of this Policy, the following definitions will be considered:</p>
                  <div class="space-y-4">
                    <div>
                      <strong>deco.cx:</strong> means DECO PLATAFORMA DIGITAL LTDA, a private legal entity with limited liability, headquartered at Rua Visconde de Pirajá, nº 495, sala 1, Ipanema, Rio de Janeiro/RJ, ZIP: 22.410-003, registered under CNPJ/ME number 47.563.279/0001-85.
                    </div>
                    <div>
                      <strong>Authorized or Client:</strong> individual or legal entity that contracts the Platform and is responsible for the payment of the usage license and for managing the Users indicated by it, under its responsibility.
                    </div>
                    <div>
                      <strong>User(s):</strong> registered person(s) who use(s) the Platform under the responsibility of the Authorized, and may be confused with the Authorized.
                    </div>
                    <div>
                      <strong>Party:</strong> means, as the case may be, deco.cx, the Authorized or the User, and "Parties" means deco.cx, the Authorized and/or the User together.
                    </div>
                    <div>
                      <strong>Registration:</strong> the place where the User's information is stored and through which he will have access to the Platform, with the aim of enjoying the Services offered by deco.cx.
                    </div>
                    <div>
                      <strong>Services:</strong> mean the services provided by deco.cx to the Authorized through the Platform, as detailed in the Terms and Conditions of Use and/or in a specific contractual instrument entered into between the Parties.
                    </div>
                    <div>
                      <strong>Platform:</strong> the software provided by deco.cx, through which the Authorized or the User registered by it have access to the Services.
                    </div>
                    <div>
                      <strong>General Data Protection Law or "LGPD":</strong> Brazilian Federal Law 13.709/2018.
                    </div>
                    <div>
                      <strong>National Data Protection Authority or "ANPD":</strong> agency responsible for supervising the compliance with the provisions of the LGPD in Brazilian territory.
                    </div>
                    <div>
                      <strong>Controller:</strong> the one who is responsible for decisions regarding the processing of Personal Data, especially regarding the purposes and means of processing, in this case DECO DIGITAL PLATFORM LTD., registered under CNPJ/ME number 47.563.279/0001-85.
                    </div>
                    <div>
                      <strong>Operator:</strong> natural or legal person, public or private, who processes personal data on behalf of the controller.
                    </div>
                    <div>
                      <strong>Holder:</strong> natural person to whom the personal data being processed refer.
                    </div>
                    <div>
                      <strong>Data Protection Officer or "DPO":</strong> person designated by the Controller and Operator to act as a communication channel between the Controller, the Holders, and the National Data Protection Authority (ANPD).
                    </div>
                    <div>
                      <strong>Personal Data:</strong> any information related to an identified or identifiable natural person, such as: name, CPF, RG, residential or commercial address, landline or mobile phone number, e-mail address, IP address, location, among others.
                    </div>
                    <div>
                      <strong>Sensitive Personal Data:</strong> Personal Data about racial or ethnic origin, religious belief, political opinion, union membership or membership of a religious, philosophical or political organization, data concerning health or sex life, genetic or biometric data, when linked to a natural person.
                    </div>
                    <div>
                      <strong>Incident(s):</strong> any access, acquisition, use, modification, disclosure, loss, destruction or accidental, illegal or unauthorized damage involving Personal Data.
                    </div>
                    <div>
                      <strong>Security Measures, Technical and Administrative:</strong> measures adopted that are able to protect Personal Data from unauthorized access and from accidental or illicit situations of destruction, loss, alteration, communication or any form of inappropriate or unlawful Processing.
                    </div>
                    <div>
                      <strong>Processing:</strong> any operation or set of operations carried out with Personal Data or on sets of Personal Data, by automated or non-automated means, such as collection, recording, organization, structuring, preservation, adaptation or alteration, recovery, consultation, use, disclosure by transmission, dissemination or any other form of making available, comparison or interconnection, limitation, deletion or destruction.
                    </div>
                  </div>
                  <p>
                    Other terms used herein and not defined above have the meaning attributed in a specific clause or the meaning contained in the Brazilian General Data Protection Law ("LGPD") or, even, contained in the Terms and Conditions of Use, which can be accessed at our Terms of Use.
                  </p>
                </div>
              </section>

              {/* How We Collect Your Personal Data */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">3. How We Collect Your Personal Data</h2>
                <div class="space-y-6">
                  <p class="text-dc-700 leading-relaxed">We may collect your personal data in the following ways:</p>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-dc-800 mb-3">Electronic identifiers (cookies and web beacons)</h3>
                    <div class="space-y-3 text-dc-700 leading-relaxed">
                      <p>
                        Cookies are essentially internet files that can be temporarily stored on your devices. We use cookies to facilitate your navigation on our website, adapting it to your interests and needs. They are also important in providing us with information about how our website and our services are being used, which is essential to improve our relationship.
                      </p>
                      <p>
                        You can configure your device to not accept or refuse the use of cookies. In this case, you will not be able to access all the pages of our Platforms, as some cookies are essential for their proper functioning.
                      </p>
                      <p>
                        Like cookies, web beacons are a tracking technology used to collect information about user activities when using our services. They allow tracking of which pages and content you accessed and viewed on our website, but unlike cookies, web beacons cannot be disabled or rejected.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 class="text-xl font-semibold text-dc-800 mb-3">Registration or contact data</h3>
                    <div class="space-y-3 text-dc-700 leading-relaxed">
                      <p>
                        You can provide us with personal data directly when registering on our website or for using the Platform. In this case, we will use these data specifically for the purpose for which they were collected, namely:
                      </p>
                      <ul class="list-disc pl-6 space-y-1">
                        <li>If you contacted us to request information or clarification about our products and services, we will use your personal data to respond to you appropriately;</li>
                        <li>If you have registered to hire the services available on the Platform, we will use your personal data to enable access to the Platform and use by you of the contracted services;</li>
                      </ul>
                      <p>
                        Whenever possible, we will try to provide you with reasonable options regarding the collection and use of your information. For example, you can:
                      </p>
                      <ul class="list-disc pl-6 space-y-1">
                        <li>Not provide personal data that are not necessary for (i) the provision of our services and (ii) the fulfillment of legal or contractual obligations;</li>
                        <li>Set your browsing preferences and use available tools to block the cookies sent in connection with your use of our website;</li>
                        <li>Opt not to receive our advertising communications via email;</li>
                        <li>Cancel the subscription of our services; and/or</li>
                        <li>Submit a request related to the exercise of your rights to the following email: <strong>privacy@deco.cx</strong>.</li>
                      </ul>
                      <p>
                        We do not guarantee the perfect or adequate operation of our Platforms nor the adequate delivery of the contracted Services if you provide incorrect information or choose not to provide certain personal data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What Personal Data is Collected */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">4. What Personal Data is Collected and For What Purpose</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    We are a startup aiming to offer a software as a service or "SaaS" platform, which gives autonomy for managing the website of its customers, allowing, among other functionalities, the creation and editing of pages and content.
                  </p>
                  <p>
                    The nature, the way and the purpose of the treatment that we give to your personal data vary according to the context in which your personal data were collected. For example, in some cases, the collection of some of your personal data is necessary for the provision of our services to you.
                  </p>
                  <p>
                    In general, to view and hire our services you need to access and register on the website https://www.deco.cx/en and, for that, we request some personal information, such as your email; "CPF" or "RNE" (CPF- Individual Tax Number; RNE - National Register of Foreigners;), phone and address, for the purpose of your individual identification and contact.
                  </p>
                  <p>
                    These data are fundamental for hiring our services, whose Terms of Use and Acquisition can be accessed here: Terms of Use.
                  </p>
                  <p>
                    In addition, we may process your Personal Data if it is reasonably necessary or legally required (i) for reasons of public interest; (ii) to respond to requests from public authorities; (iii) to meet government reporting or record-keeping requirements; or (iv) for the regular exercise of rights in processes.
                  </p>
                </div>
              </section>

              {/* Who We Share Your Personal Data With */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">5. Who We Share Your Personal Data With</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    In order for it to be possible to make our products and services available, we often need to share personal data with third parties. We can't always do everything by ourselves and so we get help from some business partners.
                  </p>
                  <p>We may disclose your personal data to:</p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Contractors, service providers and other third parties that we hire to support our business, and who are therefore contractually bound to us;</li>
                    <li>A potential buyer or other successor in the case of a merger, divestiture, incorporation, split, restructuring, reorganization, dissolution or sale or transfer of GESTÃO's assets;</li>
                    <li>Occasionally, with your consent, for any other purpose disclosed by us at the time of collection of this information;</li>
                    <li>Any competent government authority, for example, to comply with any court order, law, legal process or administrative proceeding;</li>
                    <li>Our business partners, in the fulfillment of our contracts and agreements;</li>
                    <li>Payment or financial institutions, to process the purchase of a product or the acquisition of a service;</li>
                  </ul>
                  <p>
                    In addition, we reserve the right to share any personal data that we believe is necessary to comply with a legal obligation, to enforce or apply our Terms of Acquisition and Use of the Platform or to protect the rights of our employees and customers.
                  </p>
                  <p>
                    deco.cx strives and acts in good faith to protect and ensure the privacy of the personal data of Platform or website Users. When we share your personal data with any of the entities indicated above, we limit the sharing only to the personal data necessary for the exercise of their functions and ensure contractually that the referred personal data are used only to the extent necessary to provide the services on our behalf or to observe legal requirements.
                  </p>
                  <p>
                    In the same way, we require that they commit to the same level of protection and privacy for your personal data that deco.cx would have if it were handling them directly; this includes the obligation not to use your personal data for any other purpose than the contracted purpose or without an adequate legal basis, in addition to confidentiality obligations and information security standards, among others. Furthermore, we always make commercially reasonable efforts to ensure that our third-party service providers keep your personal data protected and secure.
                  </p>
                  <p>
                    To learn more about how our partners and service providers handle your personal data, you can request via email: <strong>privacy@deco.cx</strong>.
                  </p>
                </div>
              </section>

              {/* Exercising Your Rights */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">6. Exercising Your Rights</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    You can contact us directly to exercise any of your rights guaranteed by law, such as access to the personal data we have about you, confirmation of the existence of personal data processing activity, review of automated decisions, correction of your personal data, portability, anonymization, blocking or deletion of personal data (in these last three cases only if the personal data are excessive or processed in non-compliance with the law).
                  </p>
                  <p>
                    We may not accept a request to change your personal data, if, for example, we believe that the change would violate a law or make some other information incorrect. The proper access and use of the information provided on our website or Platform are governed by our Terms of Use and Acquisition and current legislation.
                  </p>
                  <p>
                    Please note that if you delete your personal data, we may keep a copy stored in our files, in cases required by law, or if we have a legal basis that authorizes the conservation of such data.
                  </p>
                  <p>
                    To exercise your rights, please contact us at <strong>privacy@deco.cx</strong>.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">7. Your Rights</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    deco.cx allows all rights related to the processing of your personal data provided for in legislation, mainly the following:
                  </p>
                  <ul class="list-disc pl-6 space-y-1">
                    <li>Request confirmation of the existence of processing and access to the data that deco.cx has about you;</li>
                    <li>Request rectification or updating of inaccurate or outdated personal data;</li>
                    <li>Request the deletion of your personal information existing in our database and that of our partners, except in cases where this right may be limited as determined by law;</li>
                    <li>Request the portability of your personal data in a structured format, commonly used and machine-readable, to another service or product provider, upon your request;</li>
                    <li>Withdraw, at any time, your consent, for the purposes for which it was obtained.</li>
                  </ul>
                  <p>
                    If you wish to exercise any of your rights in relation to your personal information or have any questions about how we use your personal information, please contact us at the following email: <strong>privacy@deco.cx</strong>.
                  </p>
                </div>
              </section>

              {/* Data Security */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">8. Data Security</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    Our responsibility is to take care of your personal data and use it only for the purposes described in this Policy. And to ensure your privacy and the protection of your personal data, we adopt the security practices suitable for our market.
                  </p>
                  <p>
                    deco.cx strives to protect the privacy of the account and your personal data. We maintain procedural, technical, and physical safeguards that help us avoid the loss, misuse, or unauthorized access, disclosure, alteration, or destruction of the personal data provided by subscribers and visitors to the Platforms. However, it is not guaranteed that a transmission of personal data carried out via the internet is completely secure. It is possible that third parties, who are not under our control, intercept or have access to transmissions or personal data in an illegal manner. Therefore, we cannot guarantee the complete security of the personal data transmitted to our website or our Platform, so we ask for your cooperation to help us maintain a secure environment for all. If you identify or become aware of anything that compromises information security, you should contact us through the following contact channel: <strong>privacy@deco.cx</strong>.
                  </p>
                </div>
              </section>

              {/* How Long Will Your Data Be Stored */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">9. How Long Will Your Data Be Stored?</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    Your personal data is stored only for the time necessary to fulfill the purposes for which it was collected, unless there is any other reason for its maintenance such as, for example, compliance with any legal, regulatory, contractual obligations, among others, or to safeguard the rights of deco.cx.
                  </p>
                </div>
              </section>

              {/* How to Contact Us */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">10. How to Contact Us</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    In case of any doubts regarding how we treat your personal data or for questions and requests, you can contact us via email: <strong>privacy@deco.cx</strong>.
                  </p>
                </div>
              </section>

              {/* Applicable Law */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">11. Applicable Law</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    The applicable legislation to settle and resolve any eventual dispute arising from the use or misinterpretation of our website or Platform will be Brazilian legislation.
                  </p>
                </div>
              </section>

              {/* Updates */}
              <section class="mb-12">
                <h2 class="text-2xl font-bold text-dc-900 mb-6">12. Updates</h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    This Privacy Policy is subject to regular changes to ensure it is up-to-date with the use of your personal information and in compliance with applicable data protection laws.
                  </p>
                  <p>
                    We reserve the right to review this Privacy Policy, at any time, whether for the use of new technologies or whenever we deem necessary. The updated Privacy Policy will be published on our website, which is why we recommend checking it periodically.
                  </p>
                  <p>
                    <strong>This Policy was last modified on July 26, 2023.</strong>
                  </p>
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