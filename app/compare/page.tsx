"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackageCard } from "@/components/package-card";
import { ComparisonTable } from "@/components/comparison-table";
import { Wifi, Smartphone, Radio } from "lucide-react";

const MOCK_PACKAGES = [
  {
    id: 1,
    name: "Basic Mobile",
    type: "prepaid",
    provider: "TeleProvider",
    price: 29.99,
    data: "20GB",
    calls: "Unlimited",
    validity: "28 days",
    speed: null,
    features: ["5G Ready", "Rollover Data", "International Calls"],
  },
  {
    id: 2,
    name: "Premium Broadband",
    type: "broadband",
    provider: "NetFast",
    price: 59.99,
    data: "Unlimited",
    calls: null,
    validity: "Monthly",
    speed: "100 Mbps",
    features: ["No Data Caps", "Free Installation", "24/7 Support"],
  },
  {
    id: 3,
    name: "Ultimate Mobile",
    type: "postpaid",
    provider: "MobileMax",
    price: 49.99,
    data: "50GB",
    calls: "Unlimited",
    validity: "Monthly",
    speed: null,
    features: ["5G Access", "International Roaming", "Entertainment Pack"],
  },
];

export default function ComparePage() {
  const [selectedPackages, setSelectedPackages] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("grid");

  const togglePackageSelection = (id: number) => {
    setSelectedPackages(prev =>
      prev.includes(id)
        ? prev.filter(p => p !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Compare Packages</h1>
        <p className="text-muted-foreground">
          Select up to 3 packages to compare their features side by side
        </p>
      </div>

      <Tabs defaultValue="grid" className="mb-8">
        <TabsList>
          <TabsTrigger value="grid" onClick={() => setActiveTab("grid")}>
            Grid View
          </TabsTrigger>
          <TabsTrigger 
            value="comparison" 
            onClick={() => setActiveTab("comparison")}
            disabled={selectedPackages.length < 2}
          >
            Compare Selected ({selectedPackages.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                isSelected={selectedPackages.includes(pkg.id)}
                onSelect={() => togglePackageSelection(pkg.id)}
                selectionMode={true}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="mt-6">
          {selectedPackages.length >= 2 ? (
            <ComparisonTable
              packages={MOCK_PACKAGES.filter(pkg => 
                selectedPackages.includes(pkg.id)
              )}
            />
          ) : (
            <Card className="p-8 text-center">
              <p>Please select at least 2 packages to compare</p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}