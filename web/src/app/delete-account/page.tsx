import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmbedChrome from "@/components/legal/EmbedChrome";
import LegalDocument, { LegalSection } from "@/components/legal/LegalDocument";
import { P, UL, LI, SubHeading, EmailLink } from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Delete Your Account — Landarover",
  description:
    "How to delete your Landarover account and request data deletion.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "delete-in-app",
    title: "1. Delete In the App",
    body: (
      <>
        <P>The fastest way to delete your account:</P>
        <UL>
          <LI>Open the Landarover app and sign in</LI>
          <LI>Go to Account Settings</LI>
          <LI>Tap Delete Account and confirm</LI>
        </UL>
        <P>
          Your login is disabled immediately once deletion is confirmed.
        </P>
      </>
    ),
  },
  {
    id: "delete-without-app",
    title: "2. Request Deletion Without the App",
    body: (
      <>
        <P>
          If you no longer have the app installed, email us from the address
          associated with your account and we will delete it for you:
        </P>
        <SubHeading>
          <EmailLink>support@mail.landarover.com</EmailLink>
        </SubHeading>
        <P>Please include the email or phone number linked to your account. We aim to process deletion requests within 30 days.</P>
      </>
    ),
  },
  {
    id: "what-gets-deleted",
    title: "3. What Gets Deleted",
    body: (
      <>
        <UL>
          <LI>
            <strong>Name, profile photo, bio, address, saved searches and listings</strong> — deleted or anonymized immediately
          </LI>
          <LI>
            <strong>Phone number, linked sign-in accounts, push notification tokens</strong> — deleted immediately
          </LI>
          <LI>
            <strong>Government ID and selfie verification documents</strong> — deleted
          </LI>
          <LI>
            <strong>Messages you sent</strong> — anonymized (shown as &quot;Deleted user&quot;)
          </LI>
          <LI>
            <strong>Payment, subscription, wallet, and booking/dispute records</strong> — retained for 6 years as required for accounting, tax, and fraud-prevention purposes, then deleted
          </LI>
        </UL>
        <P>
          Retained financial records are kept only as required by law and are
          not used for any other purpose. See our{" "}
          <a href="/privacy" className="font-medium text-trusted-blue hover:underline">
            Privacy Policy
          </a>{" "}
          for full detail on data retention.
        </P>
      </>
    ),
  },
];

export default function DeleteAccountPage() {
  return (
    <>
      <EmbedChrome>
        <Navbar />
      </EmbedChrome>
      <main className="flex-1">
        <LegalDocument
          title="Delete Your Account"
          lastUpdated="August 21, 2026"
          intro="How to delete your Landarover account and data, whether or not you still have the app installed."
          sections={SECTIONS}
        />
      </main>
      <EmbedChrome>
        <Footer />
      </EmbedChrome>
    </>
  );
}
