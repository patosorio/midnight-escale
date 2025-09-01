interface PageHeader {
  title: string;
  subtitle: string;
}

type PageHeaders = {
  [key: string]: PageHeader;
};

export const pageHeaders: PageHeaders = {
  home: {
    title: "",
    subtitle: "",
  },
  experiences: {
    title: "Custom Experiences",
    subtitle: "Create your perfect Moroccan journey with our curated experience ideas. We design bespoke adventures tailored to your interests, from wellness retreats to cultural immersions and adventure sports.",
  },
  itineraries: {
    title: "Fixed Itineraries",
    subtitle: "Our signature ready-to-book journeys, expertly crafted and perfected through years of experience. Each itinerary is designed to showcase Morocco's most captivating destinations with seamless logistics.",
  },
  services: {
    title: "Luxury Services",
    subtitle: "Meticulous planning and commitment to excellence in every detail of your Moroccan journey. From 24/7 personal drivers to exclusive access, we handle everything.",
  },
  journal: {
    title: "Travel Journal",
    subtitle: "Insider insights, cultural discoveries, and travel inspiration from our Morocco experts.",
  },
  contact: {
    title: "Let's Plan Your Journey",
    subtitle: "Ready to discover Morocco? Our expert team is here to craft your perfect adventure.",
  },
  login: {
    title: "Login to Admin Portal",
    subtitle: "Welcome to the admin portal. Please enter your credentials to continue.",
  },
  admin: {
    title: "Welcome to the admin portal",
    subtitle: "Add itineraries, journals, and more",
  },
};