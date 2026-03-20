// Client-side report storage and sharing utilities

export interface SavedReport {
  id: string
  input: {
    birthdate: string
    fullName?: string
    time?: string
    userSighting?: string
  }
  results: any // AngelNumberResult type
  createdAt: string
  title: string
}

export class ReportStorage {
  private static STORAGE_KEY = "angel-number-reports"

  static saveReport(report: Omit<SavedReport, "id" | "createdAt">): string {
    const id = this.generateId()
    const savedReport: SavedReport = {
      ...report,
      id,
      createdAt: new Date().toISOString(),
    }

    const existingReports = this.getAllReports()
    existingReports.push(savedReport)

    // Keep only the last 10 reports to avoid storage bloat
    const reportsToKeep = existingReports.slice(-10)

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(reportsToKeep))
    return id
  }

  static getAllReports(): SavedReport[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  }

  static getReport(id: string): SavedReport | null {
    const reports = this.getAllReports()
    return reports.find((report) => report.id === id) || null
  }

  static deleteReport(id: string): boolean {
    const reports = this.getAllReports()
    const filteredReports = reports.filter((report) => report.id !== id)

    if (filteredReports.length !== reports.length) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredReports))
      return true
    }
    return false
  }

  static generateShareableLink(reportId: string): string {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
    return `${baseUrl}/report/${reportId}`
  }

  private static generateId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
  }
}

export function downloadAsJSON(data: any, filename: string) {
  const jsonString = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonString], { type: "application/json" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export async function generatePDFReport(reportData: any): Promise<void> {
  try {
    const response = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: reportData.input,
        results: reportData.results,
        generatedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to generate PDF")
    }

    const htmlContent = await response.text()

    // Open in new window for printing
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(htmlContent)
      printWindow.document.close()

      // Trigger print dialog after content loads
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
        }, 500)
      }
    }
  } catch (error) {
    console.error("PDF generation failed:", error)
    throw error
  }
}
