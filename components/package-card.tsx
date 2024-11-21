"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Wifi, Smartphone, Radio } from "lucide-react";
import Link from "next/link";

interface Package {
  id: number;
  name: string;
  type: string;
  provider: string;
  price: number;
  data: string;
  calls: string | null;
  validity: string;
  speed: string | null;
  features: string[];
}

interface PackageCardProps {
  package: Package;
  isSelected?: boolean;
  onSelect?: () => void;
  selectionMode?: boolean;
}

export function PackageCard({ package: pkg, isSelected, onSelect, selectionMode }: PackageCardProps) {
  const TypeIcon = {
    prepaid: Smartphone,
    postpaid: Radio,
    broadband: Wifi,
  }[pkg.type] || Smartphone;

  return (
    <Card className={`relative ${isSelected ? "ring-2 ring-primary" : ""}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="secondary" className="mb-2">
              {pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1)}
            </Badge>
            <h3 className="text-xl font-semibold">{pkg.name}</h3>
            <p className="text-sm text-muted-foreground">{pkg.provider}</p>
          </div>
          <TypeIcon className="h-6 w-6 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">${pkg.price}</span>
          <span className="text-muted-foreground">/{pkg.validity}</span>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-sm">
            <Check className="h-4 w-4 mr-2 text-primary" />
            {pkg.data} Data
          </li>
          {pkg.calls && (
            <li className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-primary" />
              {pkg.calls} Calls
            </li>
          )}
          {pkg.speed && (
            <li className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-primary" />
              {pkg.speed} Speed
            </li>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        {selectionMode ? (
          <Button 
            variant={isSelected ? "secondary" : "default"}
            className="w-full"
            onClick={onSelect}
          >
            {isSelected ? "Selected" : "Select for Comparison"}
          </Button>
        ) : (
          <Link href={`/package/${pkg.id}`} className="w-full">
            <Button className="w-full">View Details</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}