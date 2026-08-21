import Image from "next/image";
import SocialLinks from "./SocialLinks";
import StoreBadges from "./StoreBadges";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-4">
        <div className="sm:col-span-2">
          <Image
            src="/images/logo-blue.png"
            alt="Landarover"
            width={148}
            height={30}
            className="h-6 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Find, list, and manage property in one place.
          </p>
          <div className="mt-5">
            <StoreBadges size="compact" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide text-muted">
            Legal
          </h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <a
                href="/privacy"
                className="text-foreground/80 hover:text-foreground"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-foreground/80 hover:text-foreground"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wide text-muted">
            Company
          </h4>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <a
                href="#faq"
                className="text-foreground/80 hover:text-foreground"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="mailto:support@mail.landarover.com"
                className="text-foreground/80 hover:text-foreground"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <address className="text-xs not-italic leading-relaxed text-muted">
            Landarover Technologies Ltd. — Address7, Factory Road, Aba, Abia,
            450101, Nigeria
          </address>
          <p className="mt-2 text-xs text-muted">
            &copy; {new Date().getFullYear()} Landarover Technologies Ltd. All
            rights reserved.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
