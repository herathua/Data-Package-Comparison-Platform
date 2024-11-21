import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About TeleCompare</h4>
            <p className="text-sm text-muted-foreground">
              Compare telecom packages across providers to find the best deal for your needs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Package Types</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compare?type=prepaid" className="text-muted-foreground hover:text-primary">
                  Prepaid Plans
                </Link>
              </li>
              <li>
                <Link href="/compare?type=postpaid" className="text-muted-foreground hover:text-primary">
                  Postpaid Plans
                </Link>
              </li>
              <li>
                <Link href="/compare?type=broadband" className="text-muted-foreground hover:text-primary">
                  Broadband Plans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TeleCompare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}