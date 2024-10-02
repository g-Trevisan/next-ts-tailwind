import { Card } from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Página Inicial"
};


export default function PageHome() {
  return (
    <main className="bg-teste">
      <Card/>
    </main>
  );
}
