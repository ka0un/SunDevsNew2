"use client";

import { MessageCircle, Mail, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
}

function ContactCard({ icon, title, description, action }: ContactCard) {
  return (
    <div className="bg-white dark:bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button asChild className="bg-primary hover:bg-primary/90 w-full">
        <a href={action.href} target="_blank" rel="noopener noreferrer">
          {action.label}
        </a>
      </Button>
    </div>
  );
}

export function SundevsContact() {
  const contacts: ContactCard[] = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Discord",
      description: "Join our community for support and updates",
      action: {
        label: "Join Server",
        href: "https://discord.gg/sundevs",
      },
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Get in touch with our support team",
      action: {
        label: "[email protected]",
        href: "mailto:[email protected]",
      },
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "BuiltByBit",
      description: "Visit our store for products",
      action: {
        label: "View Store",
        href: "https://builtbybit.com/members/kasun.205917/",
      },
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you. Choose your preferred way to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, idx) => (
            <ContactCard key={idx} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}
