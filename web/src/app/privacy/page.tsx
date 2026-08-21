import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmbedChrome from "@/components/legal/EmbedChrome";
import LegalDocument, { LegalSection } from "@/components/legal/LegalDocument";
import { P, UL, LI, SubHeading, EmailLink } from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Landarover",
  description:
    "How Landarover collects, uses, and protects your personal data.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    body: (
      <>
        <P>
          Landarover Technologies Ltd is a company registered in Nigeria,
          with its registered address at:
        </P>
        <P>Address7, Factory Road, Aba, Abia, 450101, Nigeria</P>
        <P>
          We operate Landarover, a platform that helps people search for
          homes and land, buy building materials and home appliances through
          our marketplace, and find and book verified artisans and
          professionals (such as builders, plumbers, electricians,
          architects, surveyors, and engineers).
        </P>
        <P>
          We are the data controller responsible for your personal
          information under this policy.
        </P>
        <P>
          For privacy questions, data requests, or any legal/Terms-related
          matters, contact us at{" "}
          <EmailLink>support@mail.landarover.com</EmailLink>.
        </P>
        <P>
          We do not currently have a designated Data Protection Officer. Our
          founder serves as the privacy contact until a formal DPO is
          appointed.
        </P>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    body: (
      <>
        <SubHeading>2.1 Information You Give Us</SubHeading>
        <P>
          Most of the fields below are optional and collected
          progressively — you are not required to provide them all at
          sign-up. We only ask for what a specific feature needs, when you
          use that feature.
        </P>
        <UL>
          <LI>Name, username, email address, and phone number</LI>
          <LI>Date of birth and gender (if you choose to add them to your profile)</LI>
          <LI>Address, city, state, and country (profile-level, separate from listing addresses)</LI>
          <LI>Profile picture</LI>
          <LI>Property listing details, descriptions, photos, and location</LI>
          <LI>Marketplace product listings (building materials, appliances) with pricing and photos</LI>
          <LI>Artisan and professional portfolio content and credential documents (for builders, plumbers, electricians, architects, surveyors, engineers, and similar professionals)</LI>
          <LI>Messages sent through in-app chat</LI>
          <LI>Reviews, ratings, favorites, and saved searches</LI>
          <LI>
            Government-issued identification (e.g. national ID, driver&apos;s
            license, or passport) and a selfie photo — only requested from
            sellers who want to list property, as part of our identity
            verification process
          </LI>
        </UL>
        <P>
          We do not currently collect your Bank Verification Number (BVN) or
          business/CAC registration documents.
        </P>

        <SubHeading>2.2 Information We Collect Automatically</SubHeading>
        <UL>
          <LI>
            Precise location (GPS), only when you grant permission — used
            for &quot;nearby&quot; search, directions, and to confirm your
            presence when you choose to list a property using the
            &quot;on-site&quot; listing method
          </LI>
          <LI>Push notification device tokens, so we can deliver notifications to your device</LI>
          <LI>
            Standard technical information that is an unavoidable byproduct
            of any internet service reaching our servers (such as IP address
            at the network level), handled by our infrastructure providers
          </LI>
        </UL>
        <P>
          We do not use third-party analytics, advertising, crash-reporting,
          or AI/machine-learning SDKs. The only &quot;analytics&quot; in
          Landarover are first-party listing performance statistics
          (impressions, clicks, saves, and contact requests) shown to
          sellers about their own listings — these are calculated from our
          own database and never shared outside Landarover.
        </P>

        <SubHeading>2.3 Information From Third Parties</SubHeading>
        <UL>
          <LI>Basic profile information (name, email, profile photo) from Google or Apple, if you choose to sign in using those services</LI>
          <LI>Payment status information from our payment partners, once payment processing is enabled</LI>
        </UL>
      </>
    ),
  },
  {
    id: "how-we-use-data",
    title: "3. How We Use Your Data",
    body: (
      <>
        <P>We use your information to:</P>
        <UL>
          <LI>Create and manage your account</LI>
          <LI>Display and facilitate property listings, marketplace products, and artisan/professional bookings</LI>
          <LI>Enable in-app messaging between users</LI>
          <LI>Show relevant results in search, map-based &quot;nearby&quot; features, and directions</LI>
          <LI>Send OTP codes, transactional emails, and push notifications related to your account and activity</LI>
          <LI>Verify seller identity to reduce fraud and build trust in the marketplace</LI>
          <LI>Detect and prevent fraud and abuse</LI>
          <LI>Respond to support and legal requests</LI>
          <LI>Show sellers first-party performance statistics about their own listings</LI>
        </UL>
        <P>
          Payments are not currently processed in the app. When we launch
          payments (via Paystack and/or Monnify), this policy will be
          updated to describe how payment and transaction data is handled
          before that feature goes live.
        </P>
        <P>
          We do not sell your personal data. We do not use your data for
          third-party advertising, and we do not share it with advertising
          networks.
        </P>
      </>
    ),
  },
  {
    id: "location-data",
    title: "4. Location Data",
    body: (
      <>
        <P>
          We request location access to power &quot;nearby&quot; search and
          directions, and to confirm your presence at a property when you
          choose the &quot;on-site&quot; listing method. Location access is
          optional for most of the app — you can search manually by typing
          a location instead.
        </P>
        <P>
          If you deny location permission, on-site listing and some
          location-based search features will not be available, but you can
          still browse and use most of the app.
        </P>
        <P>
          The &quot;Directions&quot; feature opens your device&apos;s own
          Maps app (Apple Maps or Google Maps) using a deep link. Landarover
          does not embed a map SDK and does not process your route or
          location data through a third-party mapping service — the native
          Maps app handles this outside of Landarover once opened.
        </P>
      </>
    ),
  },
  {
    id: "sharing-your-data",
    title: "5. Sharing Your Data",
    body: (
      <>
        <P>We share personal data only in these circumstances:</P>

        <SubHeading>5.1 Other Users</SubHeading>
        <P>
          Your public profile (name, profile photo, listings, reviews) is
          visible to other users. Your email, phone number, and precise
          location are never shown to other users unless you choose to
          include them in a listing or message.
        </P>

        <SubHeading>5.2 Service Providers</SubHeading>
        <P>
          We rely on the following service providers to operate Landarover.
          Each only receives the data necessary to perform its function:
        </P>
        <UL>
          <LI><strong>Supabase</strong> — our database, backend, and authentication provider; stores most app data</LI>
          <LI><strong>Cloudflare Images</strong> — stores and serves listing and profile photos</LI>
          <LI><strong>Termii</strong> — delivers SMS one-time passcodes to your phone number</LI>
          <LI><strong>Resend</strong> — delivers transactional emails (welcome, verification, security alerts, receipts)</LI>
          <LI><strong>Google / Apple</strong> — provide Sign-In authentication if you choose those options</LI>
        </UL>

        <SubHeading>5.3 Legal Requirements</SubHeading>
        <P>
          We may disclose data if required by law, court order, or to
          protect the rights, property, or safety of Landarover, our users,
          or the public.
        </P>

        <SubHeading>5.4 Business Transfers</SubHeading>
        <P>
          If Landarover is involved in a merger, acquisition, or sale of
          assets, your data may transfer as part of that transaction. We
          will notify you before your data becomes subject to a different
          privacy policy.
        </P>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    body: (
      <UL>
        <LI>
          <strong>Account data</strong>: retained while your account is
          active. If you delete your account, it is permanently and
          immediately deleted, along with associated messages, reviews, and
          other content — there is no grace period.
        </LI>
        <LI>
          <strong>Identity verification documents</strong> (government ID
          and selfie): retained while your account is active and deleted
          immediately upon account deletion, along with everything else —
          the same rule as all other account data.
        </LI>
        <LI>
          <strong>Listings, photos, and other uploaded content</strong>:
          retained as long as the associated listing or account is active;
          deleted when you remove them or delete your account.
        </LI>
      </UL>
    ),
  },
  {
    id: "data-security",
    title: "7. Data Security",
    body: (
      <>
        <P>We apply the following safeguards:</P>
        <UL>
          <LI>All data in transit is encrypted using HTTPS/TLS</LI>
          <LI>Authentication is managed by Supabase&apos;s built-in, industry-standard authentication system</LI>
          <LI>Uploaded files are scanned for malware</LI>
          <LI>Database access is restricted using row-level security (RLS) policies, so users can only access their own data</LI>
          <LI>Rate limiting is applied to sensitive endpoints, including OTP verification and login, to prevent abuse</LI>
        </UL>
        <P>
          No system is 100% secure. If you suspect unauthorized access to
          your account, contact us immediately at{" "}
          <EmailLink>support@mail.landarover.com</EmailLink>.
        </P>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    body: (
      <>
        <P>Depending on your location, you may have the right to:</P>
        <UL>
          <LI><strong>Access</strong> — request a copy of the personal data we hold about you</LI>
          <LI><strong>Correction</strong> — ask us to correct inaccurate or incomplete data (also available via in-app profile editing)</LI>
          <LI><strong>Deletion</strong> — delete your account and personal data at any time via in-app settings, or by contacting us</LI>
          <LI><strong>Objection</strong> — object to certain processing of your data</LI>
          <LI><strong>Restriction</strong> — request that we limit how we process your data</LI>
          <LI><strong>Withdraw consent</strong> — revoke permissions (such as location access) at any time in your device settings</LI>
        </UL>
        <P>
          <strong>Data portability / export</strong>: We do not yet offer a
          self-service data export tool. If you would like a copy of your
          data in a portable format, email{" "}
          <EmailLink>support@mail.landarover.com</EmailLink> and we will
          provide it manually.
        </P>
        <P>
          To exercise any right not already available in-app, contact{" "}
          <EmailLink>support@mail.landarover.com</EmailLink>. We aim to
          respond within 30 days and may need to verify your identity first.
        </P>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "9. Children's Privacy",
    body: (
      <P>
        Landarover is not directed at children under 18. You must be at
        least 18 years old to use Landarover. We do not currently verify age
        beyond self-attestation at sign-up. If we become aware that we have
        collected data from someone under 18, we will delete it promptly.
        If you believe a child has provided us with personal data, contact{" "}
        <EmailLink>support@mail.landarover.com</EmailLink>.
      </P>
    ),
  },
  {
    id: "cookies-tracking",
    title: "10. Cookies and Tracking",
    body: (
      <P>
        Our mobile app does not use browser cookies, advertising SDKs, or
        cross-app tracking. Our website (landarover.com) does not currently
        use cookies or tracking of any kind — it is a static, informational
        site. If this changes in the future (for example, adding
        privacy-friendly website analytics), we will update this policy
        before doing so.
      </P>
    ),
  },
  {
    id: "international-transfers",
    title: "11. International Data Transfers",
    body: (
      <P>
        Landarover is currently offered only in Nigeria. Some of the service
        providers we rely on (Section 5.2) operate infrastructure outside
        Nigeria. This means your data may be processed in other countries by
        these providers, each of which maintains its own security and
        compliance standards. We take reasonable steps to ensure any such
        transfer is subject to appropriate safeguards.
      </P>
    ),
  },
  {
    id: "compliance",
    title: "12. Compliance",
    body: (
      <P>
        This policy is designed to align with Nigeria&apos;s Data Protection
        Act (NDPA), and reflects data-handling practices consistent with the
        Google Play User Data Policy and Apple App Store Privacy
        requirements. As Landarover grows, we will continue to update our
        practices and this policy to meet applicable legal and platform
        requirements.
      </P>
    ),
  },
  {
    id: "changes",
    title: "13. Changes to This Policy",
    body: (
      <P>
        We may update this Privacy Policy from time to time. We will notify
        you of material changes through the app or by email at least 14
        days before they take effect. The current version is always
        available at landarover.com/privacy and within the app.
      </P>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    body: (
      <>
        <P>
          <strong>Landarover Technologies Ltd</strong>
          <br />
          Address7, Factory Road, Aba, Abia, 450101, Nigeria
        </P>
        <P>
          Email: <EmailLink>support@mail.landarover.com</EmailLink>
        </P>
        <P>We aim to respond to all privacy inquiries within 5 business days.</P>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <EmbedChrome>
        <Navbar />
      </EmbedChrome>
      <main className="flex-1">
        <LegalDocument
          title="Privacy Policy"
          lastUpdated="August 6, 2026"
          intro="This Privacy Policy explains what personal data Landarover collects, why we collect it, how we use and protect it, and the rights you have over it."
          sections={SECTIONS}
        />
      </main>
      <EmbedChrome>
        <Footer />
      </EmbedChrome>
    </>
  );
}
