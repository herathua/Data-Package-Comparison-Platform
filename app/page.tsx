import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wifi, Smartphone, Radio, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Find Your Perfect
            <span className="text-primary"> Telecom Package</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Compare prepaid, postpaid, and broadband plans from leading providers to find the best deal for your needs.
          </p>
          
          {/* Search Section */}
          <div className="max-w-3xl mx-auto bg-background rounded-lg shadow-lg p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Package Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prepaid">Prepaid</SelectItem>
                  <SelectItem value="postpaid">Postpaid</SelectItem>
                  <SelectItem value="broadband">Broadband</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="provider1">Provider 1</SelectItem>
                  <SelectItem value="provider2">Provider 2</SelectItem>
                  <SelectItem value="provider3">Provider 3</SelectItem>
                </SelectContent>
              </Select>
              <Input type="number" placeholder="Max Price" />
            </div>
            <Button className="w-full md:w-auto">
              <Search className="mr-2 h-4 w-4" /> Search Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Plans</h3>
              <p className="text-muted-foreground">
                Compare prepaid and postpaid mobile plans with detailed features and pricing.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Broadband Plans</h3>
              <p className="text-muted-foreground">
                Find the fastest and most reliable broadband plans for your home or office.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Radio className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Network Coverage</h3>
              <p className="text-muted-foreground">
                Check network coverage and speed in your area before making a decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                      Featured
                    </span>
                    <h3 className="text-xl font-semibold">Premium {i} Plan</h3>
                  </div>
                  <span className="text-2xl font-bold">$29.99</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <span className="mr-2">✓</span> Unlimited Data
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="mr-2">✓</span> 5G Network
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="mr-2">✓</span> Free Calls
                  </li>
                </ul>
                <Link href="/compare" className="w-full">
                  <Button className="w-full">
                    Compare Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}