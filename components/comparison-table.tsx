import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, Minus } from "lucide-react";

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

interface ComparisonTableProps {
  packages: Package[];
}

export function ComparisonTable({ packages }: ComparisonTableProps) {
  const features = [
    { label: "Provider", key: "provider" },
    { label: "Type", key: "type" },
    { label: "Price", key: "price", format: (value: number) => `$${value}` },
    { label: "Data", key: "data" },
    { label: "Calls", key: "calls" },
    { label: "Speed", key: "speed" },
    { label: "Validity", key: "validity" },
  ];

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Features</TableHead>
            {packages.map((pkg) => (
              <TableHead key={pkg.id} className="text-center">
                {pkg.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.key}>
              <TableCell className="font-medium">{feature.label}</TableCell>
              {packages.map((pkg) => (
                <TableCell key={pkg.id} className="text-center">
                  {pkg[feature.key as keyof Package] ? (
                    feature.format ? 
                      feature.format(pkg[feature.key as keyof Package] as number) :
                      pkg[feature.key as keyof Package]
                  ) : (
                    <Minus className="mx-auto h-4 w-4 text-muted-foreground" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium">Features</TableCell>
            {packages.map((pkg) => (
              <TableCell key={pkg.id}>
                <ul className="list-none space-y-1">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}