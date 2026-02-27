// Organization Schema - Used site-wide
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Silent Club",
  "alternateName": "Silent Club",
  "url": "https://thesilent.club",
  "logo": "https://thesilent.club/logo.png",
  "description": "A private estate designed for structured silence, deep work, and decision clarity",
  "email": "hello@thesilent.club",
  "telephone": "+91-98903-22494",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-98903-22494",
    "contactType": "Customer Service",
    "email": "hello@thesilent.club",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.instagram.com/thesilent.club",
    "https://www.facebook.com/thesilent.club"
  ]
};

// LocalBusiness Schema - For venue/location pages
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Resort", "TouristAttraction"],
  "name": "The Silent Club",
  "image": "https://thesilent.club/estate-image.jpg",
  "description": "Private estate for structured silence, deep work, meditation, and personal transformation",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.5204",
    "longitude": "73.8567"
  },
  "url": "https://thesilent.club",
  "telephone": "+91-98903-22494",
  "email": "hello@thesilent.club",
  "priceRange": "$$$$",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Accommodation",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Dining",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Gym",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Yoga Studio",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Library",
      "value": true
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};

// Service Schema - For services page
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Retreat Services",
  "provider": {
    "@type": "Organization",
    "name": "The Silent Club"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Silent Retreat Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solitude as a Service",
          "description": "Self-directed silence within protected conditions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Experiment as a Service",
          "description": "Structured environments for testing ideas without performance pressure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residency as a Service",
          "description": "Multi-day immersion around a single high-stakes question"
        }
      }
    ]
  }
};

// WebSite Schema - For homepage
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Silent Club",
  "url": "https://thesilent.club",
  "description": "A private estate designed for structured silence, deep work, and decision clarity",
  "publisher": {
    "@type": "Organization",
    "name": "The Silent Club"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://thesilent.club/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// BreadcrumbList Schema - For navigation
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// FAQ Schema - For FAQ page
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Event Schema - For events page
export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "image": event.image || "https://thesilent.club/event-image.jpg",
    "organizer": {
      "@type": "Organization",
      "name": "The Silent Club",
      "url": "https://thesilent.club"
    }
  };
}

// Article Schema - For blog posts
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Silent Club",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thesilent.club/logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": article.image || "https://thesilent.club/blog-default.jpg",
    "url": article.url
  };
}
