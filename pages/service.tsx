import { StaticImageData } from "next/image";
import body from "@/public/security.jpg";
import travel from "@/public/Travel.jpg";
import investigator from "@/public/partnership.png";
import counter from "@/public/CounterSurveillance.jpg";

type securityProps = {
  id: number;
  src: StaticImageData;
  content: string;
  title: string;
};

export default function Service() {
  const security: Array<securityProps> = [
    {
      id: 1,
      src: body,
      content:
        "Trailed and discret global bodyguard service for (V)VIPS,UHNW families,media terms, public figures celebrities and diplomats",
      title: "Bodyguard Services",
    },
    {
      id: 2,
      src: travel,
      title: "Travel risk management",
      content:
        " Secure your business travel with our expert risk management servies. Tailored solutions for high-risk destinations",
    },
    {
      id: 3,
      src: investigator,
      title: "Private investigator",
      content:
        "Tailored international private investigative services or corporations high-net-worth families and governments.",
    },
    {
      id: 4,
      src: counter,
      title: "Counter Surveillance",
      content:
        " Safeguard against threats with counter surveillance tactics. Identify risks and protect your privacy and assets.Contact us for expert assistance",
    },
  ];

  return <div>service</div>;
}
