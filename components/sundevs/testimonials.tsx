"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  product: string;
  avatar: string;
  rating: number;
  comment: string;
}

function TestimonialCard({ name, product, avatar, rating, comment }: Testimonial) {
  return (
    <div className="bg-white dark:bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
      {/* Quote mark */}
      <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">
        &ldquo;
      </div>
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-orange-600">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{product}</p>
        </div>
      </div>

      {/* Comment */}
      <p className="text-muted-foreground mb-4 relative z-10">{comment}</p>

      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, idx) => (
          <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
    </div>
  );
}

export function SundevsTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "WantedDev",
      product: "SunGuard",
      avatar: "/images/avatar-placeholder.svg",
      rating: 5,
      comment:
        "This is great for a lot of people because it's quick and easy and very cheap! I think it's great, and I'm looking forward to new updates and features.",
    },
    {
      name: "nyxalis",
      product: "SunGuard",
      avatar: "/images/avatar-placeholder.svg",
      rating: 5,
      comment: "Amazing, really good product for you Java devs.",
    },
    {
      name: "Nebulace",
      product: "SunGuard",
      avatar: "/images/avatar-placeholder.svg",
      rating: 5,
      comment:
        "Like other KASUN products, SunGuard is a fast way for developers to obfuscate applications. Can't wait to see what happens next!",
    },
    {
      name: "Rep Graphics",
      product: "SunLicense",
      avatar: "/images/avatar-placeholder.svg",
      rating: 5,
      comment:
        "An excellent platform for distribution of license keys, I would highly recommend this product if you sell digital products!",
    },
    {
      name: "mario638",
      product: "SunLicense",
      avatar: "/images/avatar-placeholder.svg",
      rating: 5,
      comment:
        "Thank you for creating this I was able to put it into my software https://imgur.com/KabOLrd",
    },
    {
      name: "Him",
      product: "SunLicense",
      avatar: "/images/avatar-placeholder.svg",
      rating: 5,
      comment:
        "Really good license system, consistent updates. 10/10, I recommend it for anybody needing a license system",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Customer Feedback
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We have over 100+ happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
