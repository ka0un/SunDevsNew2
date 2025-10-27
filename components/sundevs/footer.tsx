"use client";

import { MapPin, Mail } from "lucide-react";

export function SundevsFooter() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-4">
              SUNDEVS PVT LTD
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:[email protected]"
                  className="hover:text-primary transition-colors"
                >
                  [email protected]
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden h-48 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62283164135!2d79.69516!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Colombo, Sri Lanka"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/sundevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ka0un"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href="https://builtbybit.com/members/kasun.205917/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  BuiltByBit Store
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ka0un"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Kasun Hapangama
                </a>
              </li>
            </ul>
          </div>

          {/* SunGuard Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              SunGuard
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://builtbybit.com/resources/sunguard.33819/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Purchase
                </a>
              </li>
              <li>
                <a
                  href="https://docs.sundevs.org/sunguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ka0un/sunguard-pterodactyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Pterodactyl Egg
                </a>
              </li>
            </ul>
          </div>

          {/* SunLicense Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              SunLicense
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://builtbybit.com/resources/sunlicense.32915/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Product Page
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/kgDKtpxXg8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  What is SunLicense
                </a>
              </li>
              <li>
                <a
                  href="https://docs.sundevs.org/sunlicense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ka0un/sunlicense-java"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Java API
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ka0un/sunlicense-sample"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Sample Project
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ka0un/sunlicense-pterodactyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Pterodactyl Egg
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2024 SUNDEVS PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
