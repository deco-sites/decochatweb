interface Props {
  /**
   * @title Page Title
   * @description Main title of the terms and conditions page
   */
  title?: string;
}

const defaultProps: Props = {
  title: "Terms and Conditions of Use",
};

export default function TermsAndConditions({
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
              Last modified: August 18, 2023
            </p>
          </div>

          {/* Content */}
          <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div class="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div class="mb-12">
                <p class="text-lg leading-relaxed text-dc-700 mb-6">
                  These terms and conditions for the acquisition and use of the deco.cx Platform (hereinafter referred to as "Terms") 
                  are entered into between DECO and the Authorized User of the Platform, as defined below.
                </p>
              </div>

              {/* Preliminary Considerations */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  Preliminary Considerations
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong class="text-dc-900">DECO PLATAFORMA DIGITAL LTDA.</strong>, a private legal entity with limited liability, 
                    headquartered at Rua Visconde de Pirajá, nº 495, sala 1, Ipanema, Rio de Janeiro/RJ, ZIP 22.410-003, 
                    registered under CNPJ number 47.563.279/0001-85, is the owner, creator, holder, maintainer and 
                    provider of the platform called <strong class="text-dc-900">"DECO"</strong>.
                  </p>
                  <p>
                    Before accepting these Terms and Conditions of Use, it is essential to ensure that you have read and 
                    satisfactorily understood this document. If you have any questions, please do not hesitate to contact us 
                    at <strong class="text-primary-dark">contact@deco.cx</strong>.
                  </p>
                  <p>
                    By accepting this document, the Authorized User and their Users are guaranteed the non-exclusive, 
                    non-sublicensable, non-transferable and limited right to access the Software and use the "Free" Plan modules.
                  </p>
                </div>
              </section>

              {/* Definitions */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  1. Definitions
                </h2>
                <div class="space-y-6">
                  <div class="bg-dc-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold text-dc-900 mb-3">1.1. For the purposes of this Term, the following terms have the definitions below:</h3>
                    <div class="space-y-4">
                      <div>
                        <p><strong>(i) "DECO" or "deco.cx"</strong> means Deco Plataforma Digital Ltda., a private legal entity with limited liability.</p>
                      </div>
                      <div>
                        <p><strong>(ii) "Authorized User" or "Client"</strong> means the individual or legal entity that contracts the Platform on the "Free" Plan.</p>
                      </div>
                      <div>
                        <p><strong>(iii) "User(s)"</strong> means the registered person(s) who use(s) the Platform under the responsibility of the Authorized User.</p>
                      </div>
                      <div>
                        <p><strong>(iv) "Party"</strong> means, as the case may be, DECO, the Authorized User, or the User, and "Parties" means DECO, the Authorized User and/or the User collectively.</p>
                      </div>
                      <div>
                        <p><strong>(v) "Registration"</strong> means the place where User information is stored.</p>
                      </div>
                      <div>
                        <p><strong>(vi) "Services"</strong> means the services provided by DECO to the Authorized User through the Platform.</p>
                      </div>
                      <div>
                        <p><strong>(vii) "Platform"</strong> means the software provided by DECO, through which the Authorized User or the User registered by them have access to the Services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Object */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  2. Object
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>2.1.</strong> The Platform is characterized as "Software as a Service" or "SaaS" and aims to 
                    provide autonomy for managing their clients' websites, enabling, among other functionalities, 
                    the creation and editing of pages and content.
                  </p>
                  <p>
                    <strong>2.2.</strong> DECO grants the Authorized User a temporary license to use the Platform software, 
                    which is owned by DECO and offered to the Authorized User on a non-exclusive basis.
                  </p>
                  <p>
                    <strong>2.3.</strong> The licensed technology, under the terms of the clause above, is the intellectual property of DECO, 
                    and is subject to the provisions of Brazilian Federal Law 9.609/98 (Software Law).
                  </p>
                </div>
              </section>

              {/* Registration */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  3. Registration
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>3.1.</strong> The provision of technology services by DECO includes the use of cloud software, 
                    accessed via URL and through login connection generated by the Authorized User for each User indicated by them.
                  </p>
                  <p>
                    <strong>3.2.</strong> The authorization given by DECO is highly personal, and the use of the same login by more 
                    than one Authorized User is prohibited.
                  </p>
                  <p>
                    <strong>3.3.</strong> For the login to be granted by DECO, Authorized Users must use a third-party 
                    service provider, such as Google or Github.
                  </p>
                  <p>
                    <strong>3.4.</strong> The User Registration on the Platform by the Authorized User must contain only true information, 
                    under penalty of civil and criminal liability for ideological falsity.
                  </p>
                  <p>
                    <strong>3.5.</strong> The Authorized User is solely responsible for access and activities performed by Users on the Platform.
                  </p>
                </div>
              </section>

              {/* Services */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  4. Services
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>4.1.</strong> The services provided by DECO are based on the use of the Platform infrastructure 
                    through a Free Plan or a Paid Plan.
                  </p>
                  <p>
                    <strong>4.2.</strong> The monthly calculation of infrastructure usage for a given calendar month of any year 
                    ("Monthly Calculation") will be performed from the first day of the following month.
                  </p>
                  <p>
                    <strong>4.3.</strong> To use the Free Plan, the Authorized User agrees to comply with the rules and conditions 
                    available on the Platform itself and in this document.
                  </p>
                  <p>
                    <strong>4.4.</strong> At the moment when the metrics calculated by the Monthly Calculation exceed the limitations of the Free Plan 
                    (available at <a href="https://www.deco.cx/en/pricing" class="text-primary-dark hover:underline">https://www.deco.cx/en/pricing</a>), 
                    the administrative environment ("Admin") of the Platform and its respective functionalities may be blocked.
                  </p>
                  <p>
                    <strong>4.5.</strong> In the Free Plan, the code repository related to applications, changes or improvements 
                    developed by the Authorized User and their Users will be public.
                  </p>
                </div>
              </section>

              {/* DECO Obligations */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  5. DECO.CX Obligations
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p><strong>5.1.</strong> DECO will make its best efforts to:</p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Provide the Authorized User with the use of the Platform with adequate quality technical and operational infrastructure;</li>
                    <li>Maintain the quality standard and software of the Platform itself;</li>
                    <li>Provide technical support within contracted limits;</li>
                    <li>Not perform any acts that violate any applicable municipal, state, federal or international law or regulation;</li>
                    <li>Promptly inform the Authorized User about any impossibility of providing the Platform for operational, commercial or legal reasons.</li>
                  </ul>
                  <p>
                    <strong>5.2.</strong> DECO undertakes to inform the Authorized User about any updates, periods of unavailability 
                    or any other problem that affects the use of the contracted Service.
                  </p>
                  <p>
                    <strong>5.3.</strong> DECO, having prior knowledge of the temporary unavailability of the Platform, will inform the Authorized User 
                    about such unavailability at least 24 (twenty-four) hours in advance.
                  </p>
                </div>
              </section>

              {/* Authorized User Responsibilities */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  6. Authorized User Responsibilities
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p><strong>6.1.</strong> The Authorized User declares and undertakes to:</p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Accept the Services performed by DECO whenever they are in accordance with the established functionalities and specifications;</li>
                    <li>Not disclose, reveal, sell, lease, dispose, rent or guarantee, license, donate, alienate in any way, commercialize, rent, lend, authorize use, assign or transfer the software;</li>
                    <li>Not perform any acts that violate any applicable municipal, state, federal or international law or regulation;</li>
                    <li>Ensure that their directors, employees, agents and any third parties respect DECO's intellectual property rights;</li>
                    <li>Immediately communicate to DECO if they become aware of any violation of DECO's intellectual property rights;</li>
                    <li>Not use the Platform for purposes other than those for which it was contracted;</li>
                    <li>Make, in a timely manner, all payments due to DECO as a result of the contract;</li>
                    <li>Communicate to DECO whenever there are any problems with the Platform;</li>
                    <li>Provide, at any time, current and complete documents and information that DECO needs;</li>
                    <li>Keep registration data updated with DECO;</li>
                    <li>Ensure User agreement with the established Terms.</li>
                  </ul>
                  <p>
                    <strong>6.2.</strong> In addition to the obligations assumed above, the Authorized User also assumes responsibility for the content, 
                    information, documents and images that they make available or circulate through the use of the Platform.
                  </p>
                </div>
              </section>

              {/* Prices and Payment */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  7. Prices and Payment
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>7.1.</strong> In consideration for the license of the right to use the Platform, the Authorized User may pay 
                    recurrently (monthly or annually) a remuneration to DECO according to the subscription modality/plan 
                    chosen by the Authorized User.
                  </p>
                  <p>
                    <strong>7.2.</strong> More information related to the price and payment method of the Services provided by DECO 
                    is contained on the pricing and plans page <a href="https://www.deco.cx/en/pricing" class="text-primary-dark hover:underline">https://www.deco.cx/en/pricing</a>.
                  </p>
                </div>
              </section>

              {/* Limitation of Warranties and Responsibilities */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  8. Limitation of Warranties and Responsibilities
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>8.1.</strong> The technical specifications and functionalities of the Platform will be established by DECO 
                    and disclosed by it through the contracting platforms.
                  </p>
                  <p>
                    <strong>8.2.</strong> It will be the full responsibility of the Authorized User to meet the technical requirements for access 
                    and use of the services provided by DECO.
                  </p>
                  <p>
                    <strong>8.3.</strong> Provided that the Client's obligations set forth in this document are fulfilled, DECO guarantees 
                    to keep the Platform operational and active according to a minimum percentage of monthly availability time of 99% ("SLA").
                  </p>
                  <p>
                    <strong>8.4.</strong> DECO will not be obliged to provide technical support and Platform maintenance services 
                    free of charge to the Authorized User in the following cases:
                  </p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>If minor defects result from using the Platform in non-compliance with the terms of this Agreement;</li>
                    <li>If bugs result from modifications, alterations or any form of intervention performed improperly;</li>
                    <li>If bugs result from Platform incompatibility with other third-party software;</li>
                    <li>If DECO discovers that the Platform was or is being used in an unauthorized manner;</li>
                    <li>If they result from force majeure events.</li>
                  </ul>
                  <p>
                    <strong>8.5.</strong> Any requests, questions or bugs must be reported by the Authorized User to DECO 
                    by email <strong class="text-primary-dark">contact@deco.cx</strong>.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  9. Intellectual Property
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>9.1.</strong> The Authorized User and the User registered by them acknowledge that DECO is the sole and exclusive 
                    holder of all intellectual property rights over the Platform.
                  </p>
                  <p>
                    <strong>9.2.</strong> The Authorized User recognizes and accepts that all and any intellectual property rights 
                    related to any programs, products, works, data, inventions, methods, new versions, alterations, 
                    inclusions, customizations, innovations, modifications and improvements belong and/or will belong exclusively to DECO.
                  </p>
                  <p>
                    <strong>9.3.</strong> Under no circumstances may the Authorized User question or claim ownership 
                    or any of the copyright belonging to DECO.
                  </p>
                  <p>
                    <strong>9.4.</strong> The Parties recognize and agree that the DECO Platform allows the Authorized User to have autonomy 
                    to develop their own online store applications ("Authorized User Applications").
                  </p>
                  <p>
                    <strong>9.5.</strong> The Authorized User and/or User grant DECO a worldwide, royalty-free license, 
                    transferable, sublicensable and non-exclusive to use, reproduce, modify, distribute, adapt, publicly display 
                    and publish possible Applications developed by the Authorized User through the Platform.
                  </p>
                </div>
              </section>

              {/* Privacy Policy */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  10. Privacy Policy
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>10.1.</strong> DECO recognizes, under the terms of its Privacy Policy and applicable legislation 
                    on privacy and data protection, the confidentiality and security of information provided by the Authorized User 
                    and their Users registered on the Platform.
                  </p>
                </div>
              </section>

              {/* Duration and Term */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  11. Duration and Term
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>11.1.</strong> This Term has an indefinite duration, producing its effects from acceptance 
                    by the Authorized User and until there is termination, resolution or extinction.
                  </p>
                  <p>
                    <strong>11.2.</strong> Clauses that provide for different terms will survive the extinction of this Term and remain 
                    valid, effective and binding on the Parties for the specific periods defined in this Term.
                  </p>
                  <p>
                    <strong>11.3.</strong> DECO may suspend the Authorized User's and/or their User's access to the Platform in the following cases:
                  </p>
                  <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Default by the Authorized User of more than 15 (fifteen) days from the due date of the obligation;</li>
                    <li>In case of suspected non-compliance with this Term;</li>
                    <li>Suspicions of irregular activities on the Platform;</li>
                    <li>Provision of false or untrue information;</li>
                    <li>Determination by law.</li>
                  </ul>
                </div>
              </section>

              {/* Third Party Content */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  12. Third Party Content
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>12.1.</strong> The Platform may provide links to other Internet sites or other resources, 
                    as a mere convenience to the User. Since DECO has no control over such external sites or resources, 
                    the Authorized User acknowledges and agrees that DECO is not responsible for their availability.
                  </p>
                </div>
              </section>

              {/* General Provisions */}
              <section class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-dc-900 mb-6 border-b-2 border-primary-light pb-2">
                  13. General Provisions
                </h2>
                <div class="space-y-4 text-dc-700 leading-relaxed">
                  <p>
                    <strong>13.1.</strong> All notifications and authorizations that may or have to be made or given 
                    by the Parties under this Term will be valid and effective only if manifested through correspondence 
                    sent to the Authorized User's email indicated in their Registration or the email <strong class="text-primary-dark">contact@deco.cx</strong>.
                  </p>
                  <p>
                    <strong>13.2.</strong> This Term does not presume or imply any mandate of any order, that is, 
                    it does not attribute to the Authorized User or the User registered by them on the Platform any power to represent 
                    DECO before any third parties.
                  </p>
                  <p>
                    <strong>13.3.</strong> The partial invalidity of this Term will not affect it in the part considered valid, 
                    provided that the obligations are separable from each other.
                  </p>
                  <p>
                    <strong>13.4.</strong> The non-exercise by any of the Parties of any provision of this Term will not be 
                    considered a waiver of the future exercise of this or any other provision.
                  </p>
                  <p>
                    <strong>13.5.</strong> The Authorized User or their User may not assign this Term or any right or obligation, 
                    without the prior written consent of DECO.
                  </p>
                  <p>
                    <strong>13.6.</strong> This Term constitutes a legal, valid and binding obligation, obligating the Parties 
                    and their successors for any reason, irrevocably and irretractably, to its faithful fulfillment.
                  </p>
                  <p>
                    <strong>13.7.</strong> The Parties declare, for all purposes, that they are independent and autonomous, 
                    so that this Term does not create any other form of link between them.
                  </p>
                  <p>
                    <strong>13.8.</strong> This term will be governed by the laws of the Federative Republic of Brazil. In case of difficulty 
                    in interpreting or executing this Term, or any controversy related to or arising from non-compliance 
                    with this Term, such matter will be submitted to the jurisdiction of the Court of Rio de Janeiro.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <div class="bg-primary-light rounded-lg p-6 text-center">
                <p class="text-lg text-dc-900 mb-2">
                  To clarify any questions, the User can contact us through email
                </p>
                <a href="mailto:contact@deco.cx" class="text-xl font-semibold text-primary-dark hover:underline">
                  contact@deco.cx
                </a>
                <p class="text-sm text-dc-600 mt-4">
                  This Term was last modified on August 18, 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Preview() {
  return <TermsAndConditions {...defaultProps} />;
}
