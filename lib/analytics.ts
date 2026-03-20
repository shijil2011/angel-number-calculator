// Simple Google Analytics tracking utilities

export interface CalculationEvent {
  birthdate_provided: boolean
  name_provided: boolean
  time_provided: boolean
  sighting_provided: boolean
  top_angel_number: string
  confidence_score: number
}

export interface AngelNumberViewEvent {
  angel_number: string
  source: "calculator" | "direct_visit" | "internal_link"
}

export class Analytics {
  private static isEnabled = typeof window !== "undefined" && process.env.NODE_ENV === "production"

  // Track angel number calculations
  static trackCalculation(event: CalculationEvent) {
    if (!this.isEnabled || typeof gtag === "undefined") return

    gtag("event", "angel_number_calculation", {
      birthdate_provided: event.birthdate_provided,
      name_provided: event.name_provided,
      time_provided: event.time_provided,
      sighting_provided: event.sighting_provided,
      top_angel_number: event.top_angel_number,
      confidence_score: event.confidence_score,
    })
  }

  // Track angel number page views
  static trackAngelNumberView(event: AngelNumberViewEvent) {
    if (!this.isEnabled || typeof gtag === "undefined") return

    gtag("event", "angel_number_view", {
      angel_number: event.angel_number,
      source: event.source,
    })
  }

  // Track PDF generation
  static trackPDFGeneration(angelNumbers: string[], success: boolean) {
    if (!this.isEnabled || typeof gtag === "undefined") return

    gtag("event", "pdf_generation", {
      angel_numbers: angelNumbers.join(","),
      success: success,
    })
  }

  // Track user engagement
  static trackEngagement(action: string, details?: Record<string, any>) {
    if (!this.isEnabled || typeof gtag === "undefined") return

    gtag("event", "engagement", {
      engagement_action: action,
      ...details,
    })
  }
}

// Global gtag function declaration
declare global {
  function gtag(...args: any[]): void
}
