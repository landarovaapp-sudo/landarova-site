import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmbedChrome from "@/components/legal/EmbedChrome";
import LegalDocument, { LegalSection } from "@/components/legal/LegalDocument";
import { P, UL, LI, SubHeading, EmailLink } from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Terms of Service — Landarover",
  description:
    "The terms that govern your use of the Landarover app and website.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: (
      <>
        <P>
          These Terms constitute a legally binding agreement between you and
          Landarover. By accessing or using Landarover — whether through our
          mobile application, website, or any other interface — you confirm
          that you have read, understood, and agree to these Terms.
        </P>
        <P>
          If you are using Landarover on behalf of a company, agency, or
          other organization, you represent that you have the authority to
          bind that entity to these Terms.
        </P>
      </>
    ),
  },
  {
    id: "description-of-services",
    title: "2. Description of Services",
    body: (
      <>
        <P>
          Landarover is a platform connecting people who are searching for
          homes and land, shopping for building materials and home
          appliances, and looking for verified artisans and professionals
          (such as builders, plumbers, electricians, architects, surveyors,
          and engineers).
        </P>
        <P>Our services include:</P>
        <UL>
          <LI>Browsing and searching property listings by location, price, and type</LI>
          <LI>Creating and managing listings as a seller, agent, agency, or developer</LI>
          <LI>Browsing and listing marketplace products (building materials, appliances)</LI>
          <LI>Discovering and connecting with artisans and professionals</LI>
          <LI>Map-based and location-aware search and directions</LI>
          <LI>Messaging between users</LI>
        </UL>
        <P>
          Landarover is an intermediary platform. We are not a party to any
          transaction between users. We do not verify the physical condition
          or legal title of any property, we do not guarantee the quality of
          any artisan&apos;s or professional&apos;s work, and we do not
          currently process payments (see Section 9).
        </P>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    body: (
      <>
        <P>
          You must be at least 18 years old to use Landarover. By using
          Landarover, you represent and warrant that:
        </P>
        <UL>
          <LI>You are at least 18 years of age</LI>
          <LI>You have the legal capacity to enter into a binding contract</LI>
          <LI>You will provide accurate, current, and complete information during registration</LI>
          <LI>You will maintain only one account per person or entity</LI>
        </UL>
        <P>
          Businesses, agencies, and developers may register accounts to list
          property or services, provided the individual registering has
          authority to act on the entity&apos;s behalf.
        </P>
        <P>
          We reserve the right to suspend or terminate your account if we
          discover that you do not meet these eligibility requirements.
        </P>
      </>
    ),
  },
  {
    id: "account-registration",
    title: "4. Account Registration and Security",
    body: (
      <>
        <SubHeading>4.1 Account Creation</SubHeading>
        <P>
          You may sign in using Google, Apple, or email with a one-time
          passcode. You are not required to create an account to browse
          Landarover — most search and discovery features are available to
          guests. An account is required to message other users, save
          listings, or create your own listings.
        </P>

        <SubHeading>4.2 One Account Per Person or Entity</SubHeading>
        <P>
          You may not maintain more than one account. Creating multiple
          accounts to circumvent restrictions, manipulate reviews, or evade a
          suspension is a violation of these Terms.
        </P>

        <SubHeading>4.3 Account Security</SubHeading>
        <P>
          You are responsible for all activity that occurs under your
          account. Notify us immediately at{" "}
          <EmailLink>support@mail.landarover.com</EmailLink> if you suspect
          unauthorized access.
        </P>

        <SubHeading>4.4 Verified Identity</SubHeading>
        <P>
          Listing a property requires phone number verification and, for
          sellers, submission of a government-issued ID and a selfie for
          identity verification. We may suspend access to listing features
          if verification cannot be completed or is found to be fraudulent.
        </P>

        <SubHeading>4.5 Inactive Accounts</SubHeading>
        <P>
          We may flag or take action on accounts that have shown no activity
          for an extended period (12 months or more), including limiting
          visibility of associated listings. We will make reasonable efforts
          to notify you before any such action.
        </P>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    title: "5. User Responsibilities",
    body: (
      <>
        <P>By using Landarover, you agree to:</P>
        <UL>
          <LI>Provide accurate, truthful information at all times</LI>
          <LI>Keep your login credentials secure and not share them with others</LI>
          <LI>Treat other users respectfully</LI>
          <LI>List properties, products, and services truthfully — accurately representing price, condition, location, and availability</LI>
          <LI>Accurately identify your relationship to a listing (Owner, Agent, Agency, or Developer) and your listing method (on-site or off-site)</LI>
          <LI>If you are an artisan or professional, accurately represent your credentials, licenses, and qualifications</LI>
          <LI>Conduct transactions on-platform in good faith, without circumventing platform oversight once a deal has begun through Landarover</LI>
        </UL>
      </>
    ),
  },
  {
    id: "content-you-post",
    title: "6. Content You Post",
    body: (
      <>
        <SubHeading>6.1 Ownership</SubHeading>
        <P>
          You retain ownership of any content you post — listings, photos,
          descriptions, messages, and reviews.
        </P>

        <SubHeading>6.2 License to Landarover</SubHeading>
        <P>
          By posting content, you grant Landarover a worldwide,
          non-exclusive, royalty-free license to use, store, display, and
          reproduce that content solely for the purpose of operating and
          providing the Landarover platform. This license ends when you
          delete the content or your account, except where retained copies
          are required for legal compliance.
        </P>

        <SubHeading>6.3 Editing and Deletion</SubHeading>
        <P>
          You may edit or delete your own listings, photos, and reviews at
          any time through the app.
        </P>

        <SubHeading>6.4 Content Removal by Landarover</SubHeading>
        <P>
          We may remove any content that violates these Terms, is reported
          by other users, or is suspected to be fraudulent or misleading,
          with or without prior notice, depending on severity.
        </P>

        <SubHeading>6.5 Responsibility for Listing Accuracy</SubHeading>
        <P>
          Landarover verifies the identity of sellers who complete our
          verification process, and stands behind the accuracy of that
          verified identity and listing role (Owner/Agent/Agency/Developer).
          However, the seller who posts a listing is solely responsible for
          the accuracy of the listing&apos;s content — including price,
          condition, description, and availability. Landarover does not
          independently verify these details.
        </P>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    body: (
      <P>
        All Landarover trademarks, logos, software, design elements, and
        proprietary content are the exclusive property of Landarover
        Technologies Ltd. You may not reproduce, distribute, or create
        derivative works from Landarover&apos;s intellectual property without
        our prior written consent.
      </P>
    ),
  },
  {
    id: "marketplace-rules",
    title: "8. Marketplace Rules",
    body: (
      <>
        <SubHeading>8.1 Role of Landarover</SubHeading>
        <P>
          Landarover is a discovery and listing platform. We do not manage
          bookings, hold funds in escrow, or fulfill any transaction.
          Sellers, agents, agencies, developers, and artisans are solely
          responsible for fulfilling any sale, rental, or service they agree
          to.
        </P>

        <SubHeading>8.2 Due Diligence</SubHeading>
        <P>
          We strongly encourage buyers to conduct independent due diligence —
          including physical inspections and legal checks — before
          completing any transaction. Landarover does not guarantee the
          physical condition, legal title, or availability of any listed
          property, product, or service.
        </P>

        <SubHeading>8.3 Booking and Refunds</SubHeading>
        <P>
          Landarover does not currently offer in-app booking, payment, or
          refund mechanics. Arrangements between buyers and sellers, or
          clients and artisans, are made directly between the parties. This
          section will be updated with specific terms once such features
          launch.
        </P>
      </>
    ),
  },
  {
    id: "payments",
    title: "9. Payments",
    body: (
      <P>
        Landarover does not currently process payments. Payment
        functionality (via Paystack and/or Monnify) is planned for a future
        release. These Terms will be updated with complete payment, fee, and
        refund terms before that feature becomes available to users.
      </P>
    ),
  },
  {
    id: "communications",
    title: "10. Communications",
    body: (
      <>
        <P>By creating an account, you consent to receive:</P>
        <UL>
          <LI>SMS one-time passcodes for verification</LI>
          <LI>Transactional emails (account, verification, security, and activity-related)</LI>
          <LI>Push notifications related to your account and activity</LI>
        </UL>
        <P>
          You can manage non-essential notification preferences in-app at
          any time. Essential security and verification communications
          cannot be disabled. Marketing communications, if introduced in the
          future, will include an opt-out option.
        </P>
      </>
    ),
  },
  {
    id: "platform-rights",
    title: "11. Platform Rights",
    body: (
      <>
        <P>We reserve the right to:</P>
        <UL>
          <LI>Modify, suspend, or discontinue any feature of Landarover at any time</LI>
          <LI>Change pricing for any current or future paid feature</LI>
          <LI>Limit or restrict access to the platform at our discretion</LI>
        </UL>
        <P>
          We will provide reasonable notice of material changes that affect
          your use of the platform, except where immediate action is
          necessary for safety, security, or legal compliance.
        </P>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "12. Your Rights",
    body: (
      <>
        <P>You may:</P>
        <UL>
          <LI>Delete your account and content at any time via in-app settings</LI>
          <LI>Request a copy of your data by emailing <EmailLink>support@mail.landarover.com</EmailLink></LI>
          <LI>Report abuse, fraud, or Terms violations to <EmailLink>support@mail.landarover.com</EmailLink></LI>
          <LI>Appeal a suspension or account action by contacting <EmailLink>support@mail.landarover.com</EmailLink></LI>
        </UL>
        <P>
          We aim to respond to all such requests within a reasonable time,
          generally within 5 business days for general inquiries and 30 days
          for formal data or rights requests.
        </P>
      </>
    ),
  },
  {
    id: "prohibited-activities",
    title: "13. Prohibited Activities",
    body: (
      <>
        <P>You agree not to use Landarover to:</P>
        <UL>
          <LI>Post false, misleading, or fraudulent listings or information</LI>
          <LI>Misrepresent your relationship to a listing (Owner/Agent/Agency/Developer) or your listing method</LI>
          <LI>Misrepresent artisan or professional credentials, licenses, or qualifications</LI>
          <LI>Harass, threaten, stalk, or intimidate any other user</LI>
          <LI>Engage in fraud, scams, or money laundering</LI>
          <LI>Impersonate any person or entity</LI>
          <LI>Post fake reviews or manipulate ratings</LI>
          <LI>Attempt to circumvent platform fees or oversight once a transaction has begun on-platform</LI>
          <LI>Collect or harvest other users&apos; personal information without consent</LI>
          <LI>Circumvent or disable any security feature of the platform</LI>
          <LI>Attempt unauthorized access to any account or system</LI>
          <LI>Send spam, unsolicited communications, or engage in mass messaging</LI>
          <LI>Scrape, crawl, or automatically extract data from Landarover</LI>
          <LI>Use bots or automation without our written authorization</LI>
          <LI>Upload malicious code, viruses, or harmful content</LI>
          <LI>Violate any applicable law or regulation</LI>
        </UL>
        <P>
          Violation of these prohibitions may result in content removal,
          account suspension or termination, and referral to law enforcement
          where appropriate.
        </P>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "14. Disclaimers",
    body: (
      <>
        <P>
          Landarover is provided &quot;as is&quot; and &quot;as
          available,&quot; without warranty of any kind, express or implied.
          We do not warrant that:
        </P>
        <UL>
          <LI>The service will be uninterrupted, timely, secure, or error-free</LI>
          <LI>Every listing, review, or artisan/professional claim is accurate or complete</LI>
          <LI>The platform will be compatible with every device or operating system</LI>
        </UL>
        <P>
          We are not responsible for the content, accuracy, or practices of
          any third-party service linked from or integrated with Landarover.
        </P>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "15. Limitation of Liability",
    body: (
      <P>
        To the maximum extent permitted by law, Landarover Technologies Ltd
        shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages — including loss of profits,
        data, or goodwill — arising from your use of or inability to use the
        platform, the conduct of other users, third-party service failures,
        or events beyond our reasonable control (including force majeure
        events, network outages, or government action).
      </P>
    ),
  },
  {
    id: "indemnification",
    title: "16. Indemnification",
    body: (
      <P>
        You agree to indemnify and hold harmless Landarover Technologies
        Ltd, its officers, employees, and agents from any claim, damage, or
        expense (including reasonable legal fees) arising from: your breach
        of these Terms, your violation of any law, your infringement of any
        third party&apos;s rights, or your misuse of the platform (including
        fraudulent listings or misrepresented credentials).
      </P>
    ),
  },
  {
    id: "termination",
    title: "17. Termination",
    body: (
      <>
        <SubHeading>17.1 By You</SubHeading>
        <P>
          You may delete your account at any time via in-app settings.
          Deletion is immediate and permanent, removing your account data
          along with associated messages, reviews, and other content.
        </P>

        <SubHeading>17.2 By Landarover</SubHeading>
        <P>We may suspend or terminate your account:</P>
        <UL>
          <LI><strong>Immediately</strong>, without notice, for serious violations including fraud, safety threats, or illegal activity</LI>
          <LI><strong>With notice</strong>, for other violations of these Terms, giving you an opportunity to respond or correct the issue where appropriate</LI>
        </UL>

        <SubHeading>17.3 Effect of Termination</SubHeading>
        <P>
          Upon termination, your right to use Landarover ceases immediately.
          Data is deleted per our Privacy Policy, except where retention is
          required by law.
        </P>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "18. Governing Law and Dispute Resolution",
    body: (
      <>
        <P>
          These Terms are governed by the laws of Nigeria. Before pursuing
          formal legal action, you agree to contact us at{" "}
          <EmailLink>support@mail.landarover.com</EmailLink> and allow 30
          days for informal resolution. If unresolved, disputes will be
          subject to the exclusive jurisdiction of the courts of Nigeria.
        </P>
        <P>
          Nothing in these Terms limits any consumer protection rights you
          may have under mandatory Nigerian law.
        </P>
      </>
    ),
  },
  {
    id: "changes",
    title: "19. Changes to These Terms",
    body: (
      <P>
        We may update these Terms from time to time. We will notify you of
        material changes through the app or by email at least 14 days
        before they take effect. Continued use of Landarover after the
        effective date of an update constitutes acceptance of the revised
        Terms. If you do not agree, you must stop using the platform and
        delete your account.
      </P>
    ),
  },
  {
    id: "contact",
    title: "20. Contact Us",
    body: (
      <>
        <P>
          <strong>Landarover Technologies Ltd</strong>
          <br />
          Address7, Factory Road, Aba, Abia, 450101, Nigeria
        </P>
        <P>
          Email: <EmailLink>support@mail.landarover.com</EmailLink>
          <br />
          Website: landarover.com
        </P>
        <P>We aim to respond to all enquiries within 5 business days.</P>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <EmbedChrome>
        <Navbar />
      </EmbedChrome>
      <main className="flex-1">
        <LegalDocument
          title="Terms of Service"
          lastUpdated="August 6, 2026"
          intro="These Terms govern your access to and use of Landarover. By creating an account or using Landarover, you agree to be bound by these Terms and our Privacy Policy."
          sections={SECTIONS}
        />
      </main>
      <EmbedChrome>
        <Footer />
      </EmbedChrome>
    </>
  );
}
