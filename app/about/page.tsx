import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, Zap, Phone } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About TeleCompare</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We help you make informed decisions about your telecom services by providing
          comprehensive comparisons and unbiased reviews.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            At TeleCompare, we believe everyone deserves access to transparent,
            accurate information about telecom services. Our platform simplifies
            the comparison process, helping you find the perfect package for your
            needs and budget.
          </p>
          <Link href="/compare">
            <Button size="lg">
              Start Comparing
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Trusted Reviews</h3>
            <p className="text-sm text-muted-foreground">
              Verified user reviews and ratings
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated team to assist you
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Zap className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Real-time Updates</h3>
            <p className="text-sm text-muted-foreground">
              Latest plans and pricing
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">All Providers</h3>
            <p className="text-sm text-muted-foreground">
              Compare across networks
            </p>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face",
            },
            {
              name: "Michael Chen",
              role: "Head of Technology",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=face",
            },
            {
              name: "Emily Rodriguez",
              role: "Customer Success",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&crop=face",
            },
          ].map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our team is here to help you make the right choice for your telecom needs.
        </p>
        <Link href="/contact">
          <Button variant="secondary" size="lg">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}