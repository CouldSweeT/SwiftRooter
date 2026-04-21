export type StepIcon = "service" | "schedule" | "complete";

export type BookingStep = {
  id: string;
  title: string;
  description: string;
  icon: StepIcon;
};

export const bookingSteps: BookingStep[] = [
  {
    id: "choose-service",
    title: "Choose Plumbing Service",
    description:
      "Browse our range of plumbing services tailored to address various issues in your home or business. Select the service that fits your needs.",
    icon: "service",
  },
  {
    id: "schedule-service",
    title: "Quickly Schedule Service",
    description:
      "Use our online booking system or call our hotline to schedule an appointment at a convenient time that works best for you.",
    icon: "schedule",
  },
  {
    id: "complete-service",
    title: "Job Completion Satisfaction",
    description:
      "Our professional plumber will complete the job efficiently. Once satisfied, we clean up the work area and ensure quality service.",
    icon: "complete",
  },
];
