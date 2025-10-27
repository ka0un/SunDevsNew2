"use client";

import Image from "next/image";
import { 
  ShieldCheck, 
  Link2, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  Monitor,
  Code2,
  Settings,
  FileCode,
  GitBranch,
  Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductFeature {
  icon: React.ReactNode;
  label: string;
}

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  features: ProductFeature[];
  purchaseLink: string;
  demoLink?: string;
  customerCount?: number;
  comingSoon?: boolean;
}

function ProductCard({
  name,
  price,
  image,
  description,
  features,
  purchaseLink,
  demoLink,
  customerCount,
  comingSoon = false,
}: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-muted to-muted/50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground">{name}</h3>
            <p className="text-xl font-semibold text-primary mt-1">{price}</p>
          </div>
          {customerCount && (
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{customerCount}+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Features Grid */}
        {!comingSoon && features.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-foreground bg-muted/50 rounded-lg p-2"
              >
                <div className="text-primary">{feature.icon}</div>
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-4">
          {comingSoon ? (
            <Button disabled className="flex-1 bg-muted text-muted-foreground">
              Available Soon
            </Button>
          ) : (
            <>
              <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
                  Purchase Now
                </a>
              </Button>
              {demoLink && (
                <Button asChild variant="outline" className="flex-1">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function SundevsProducts() {
  const products: ProductCardProps[] = [
    {
      name: "SunLicense",
      price: "$14.99",
      image: "/images/SunLicense.svg",
      description:
        "Secure license management system for software protection and distribution. Protect your intellectual property with our robust licensing solution.",
      customerCount: 125,
      features: [
        { icon: <ShieldCheck className="w-4 h-4" />, label: "Secure Licensing" },
        { icon: <Link2 className="w-4 h-4" />, label: "BuiltByBit Integration" },
        { icon: <MessageSquare className="w-4 h-4" />, label: "Discord Integration" },
        { icon: <BarChart3 className="w-4 h-4" />, label: "Analytics Dashboard" },
        { icon: <Clock className="w-4 h-4" />, label: "Temporary Licenses" },
        { icon: <Monitor className="w-4 h-4" />, label: "HWID Restrictions" },
      ],
      purchaseLink: "https://builtbybit.com/resources/sunlicense.32915/",
      demoLink: "https://youtu.be/kgDKtpxXg8A",
    },
    {
      name: "SunGuard",
      price: "$14.99",
      image: "/images/SunGuard.svg",
      description:
        "Advanced code obfuscation tool for Java applications and Minecraft plugins. Secure your code with our powerful protection solution.",
      customerCount: 61,
      features: [
        { icon: <Code2 className="w-4 h-4" />, label: "Multi-Obfuscator" },
        { icon: <Monitor className="w-4 h-4" />, label: "Desktop App" },
        { icon: <Settings className="w-4 h-4" />, label: "Custom Settings" },
        { icon: <FileCode className="w-4 h-4" />, label: "Java Version Support" },
        { icon: <GitBranch className="w-4 h-4" />, label: "Obfuscation History" },
        { icon: <Cloud className="w-4 h-4" />, label: "Pterodactyl Support" },
      ],
      purchaseLink: "https://builtbybit.com/resources/sunguard.33819/",
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade software solutions for your business
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
