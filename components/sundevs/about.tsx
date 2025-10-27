"use client";

import { Button } from "@/components/ui/button";

interface Achievement {
  label: string;
  value: string;
}

export function SundevsAbout() {
  const achievements: Achievement[] = [
    { label: "Happy Customers", value: "186+" },
    { label: "Products Delivered", value: "2" },
    { label: "Customer Satisfaction", value: "99%" },
    { label: "Years of Experience", value: "3+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* About Content */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sundevs is a passionate team dedicated to creating innovative software solutions 
              that empower businesses to thrive in the digital age. We specialize in license 
              management systems and code protection tools for developers worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Our Achievements in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white dark:bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground mb-6">
                  Providing businesses and developers with effective tools to improve workflows, 
                  boost efficiency, and encourage growth through innovative software solutions. 
                  We believe in making powerful enterprise-grade tools accessible to everyone.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="#products">Discover Our Products</a>
                </Button>
              </div>
              <div className="flex-1">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">☀️</div>
                    <div className="text-2xl font-bold text-foreground">Sundevs</div>
                    <div className="text-muted-foreground">Innovation & Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
