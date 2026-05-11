import { Mail, PhoneCall, CalendarDays } from "lucide-react";
import { contactInfo } from "@/lib/data/contact";
import { ContactMethod } from "./ContactMethod";

const contactMethods = [
  {
    label: contactInfo.email,
    message: "Message",
    icon: Mail,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contactInfo.email,
    )}`,
    isExternal: true,
  },
  {
    label: contactInfo.phone,
    message: "Call Now",
    icon: PhoneCall,
    href: `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    label: contactInfo.appointment,
    message: "Schedule",
    icon: CalendarDays,
    href:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=SwiftRooter%20Plumbing%20Appointment",
    isExternal: true,
  },
];

export function ContactMethods() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
        Get in Touch with Us
      </h2>
      <p className="mb-4 text-base leading-6 text-zinc-600">
        Reach out to us for inquiries, support, or partnership opportunities.
        We&apos;re here to assist you!
      </p>

      <div className="grid flex-1 grid-rows-3 gap-3">
        {contactMethods.map((method) => (
          <ContactMethod
            key={method.label}
            icon={method.icon}
            label={method.label}
            Message={method.message}
            href={method.href}
            isExternal={method.isExternal}
          />
        ))}
      </div>
    </div>
  );
}
