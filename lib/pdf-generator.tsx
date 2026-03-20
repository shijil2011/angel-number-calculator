// PDF generation utilities for angel number reports

export interface PDFReportData {
  input: {
    birthdate: string
    fullName?: string
    time?: string
    userSighting?: string
  }
  results: {
    candidates: Array<{
      number: string
      confidence: number
      evidence: string[]
      meaning: {
        short: string
        expanded: string
        actions: string[]
        manifestation: string[]
      }
    }>
    allEvidence: {
      lifePath: number
      nameExpression?: number
      digitFrequency: Record<string, number>
      sequences: string[]
      timePatterns: string[]
      userSightings: string[]
    }
  }
  generatedAt: string
}

export function generatePDFContent(data: PDFReportData): string {
  const { input, results, generatedAt } = data

  // Generate HTML content for PDF conversion
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Angel Number Report</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #6366f1;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #6366f1;
          margin-bottom: 10px;
        }
        .title {
          font-size: 28px;
          font-weight: bold;
          margin: 0;
          color: #1f2937;
        }
        .subtitle {
          font-size: 16px;
          color: #6b7280;
          margin: 5px 0 0 0;
        }
        .personal-info {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        .personal-info h3 {
          margin-top: 0;
          color: #374151;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .info-item {
          display: flex;
          justify-content: space-between;
        }
        .info-label {
          font-weight: 600;
          color: #4b5563;
        }
        .angel-number {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 25px;
          page-break-inside: avoid;
        }
        .angel-number.primary {
          border-color: #6366f1;
          background: #fafaff;
        }
        .number-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .number-display {
          font-size: 36px;
          font-weight: bold;
          color: #6366f1;
        }
        .confidence-badge {
          background: #6366f1;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        .rank-badge {
          background: #f3f4f6;
          color: #374151;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          margin-left: 10px;
        }
        .short-meaning {
          font-size: 18px;
          color: #4b5563;
          margin-bottom: 20px;
          font-style: italic;
        }
        .evidence-section {
          margin-bottom: 20px;
        }
        .evidence-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .evidence-tag {
          background: #e0e7ff;
          color: #3730a3;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
        }
        .meaning-section {
          margin-bottom: 20px;
        }
        .meaning-section h4 {
          color: #374151;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .meaning-text {
          color: #4b5563;
          margin-bottom: 15px;
        }
        .action-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 15px;
        }
        .action-list {
          list-style: none;
          padding: 0;
        }
        .action-list li {
          padding: 5px 0;
          padding-left: 20px;
          position: relative;
        }
        .action-list li:before {
          content: "•";
          color: #6366f1;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .evidence-breakdown {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          margin-top: 30px;
          page-break-inside: avoid;
        }
        .evidence-breakdown h3 {
          margin-top: 0;
          color: #374151;
        }
        .evidence-item {
          margin-bottom: 15px;
        }
        .evidence-item h4 {
          margin: 0 0 5px 0;
          color: #4b5563;
        }
        .evidence-item p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
        }
        .frequency-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 10px;
          margin-top: 10px;
        }
        .frequency-item {
          background: white;
          border: 1px solid #e5e7eb;
          padding: 8px;
          border-radius: 6px;
          text-align: center;
          font-size: 14px;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
        .page-break {
          page-break-before: always;
        }
        @media print {
          body { margin: 0; }
          .angel-number { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">✨ Angel Number Finder</div>
        <h1 class="title">Your Personal Angel Number Report</h1>
        <p class="subtitle">Generated on ${new Date(generatedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}</p>
      </div>

      <div class="personal-info">
        <h3>Your Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Birthdate:</span>
            <span>${input.birthdate}</span>
          </div>
          ${
            input.fullName
              ? `
          <div class="info-item">
            <span class="info-label">Name:</span>
            <span>${input.fullName}</span>
          </div>
          `
              : ""
          }
          ${
            input.time
              ? `
          <div class="info-item">
            <span class="info-label">Time Often Seen:</span>
            <span>${input.time}</span>
          </div>
          `
              : ""
          }
          ${
            input.userSighting
              ? `
          <div class="info-item">
            <span class="info-label">Numbers You See:</span>
            <span>${input.userSighting}</span>
          </div>
          `
              : ""
          }
        </div>
      </div>

      <h2 style="color: #374151; margin-bottom: 25px;">Your Angel Numbers</h2>

      ${results.candidates
        .map(
          (candidate, index) => `
        <div class="angel-number ${index === 0 ? "primary" : ""}">
          <div class="number-header">
            <div>
              <span class="number-display">${candidate.number}</span>
              <span class="rank-badge">#${index + 1} Match</span>
            </div>
            <span class="confidence-badge">${candidate.confidence}% Confidence</span>
          </div>
          
          <p class="short-meaning">${candidate.meaning.short}</p>
          
          <div class="evidence-section">
            <h4>Evidence Sources:</h4>
            <div class="evidence-tags">
              ${candidate.evidence
                .map(
                  (evidence) => `
                <span class="evidence-tag">${evidence}</span>
              `,
                )
                .join("")}
            </div>
          </div>

          <div class="meaning-section">
            <h4>Detailed Meaning:</h4>
            <p class="meaning-text">${candidate.meaning.expanded}</p>
          </div>

          <div class="action-grid">
            <div>
              <h4>Practical Actions:</h4>
              <ul class="action-list">
                ${candidate.meaning.actions.map((action) => `<li>${action}</li>`).join("")}
              </ul>
            </div>
            <div>
              <h4>Manifestation Tips:</h4>
              <ul class="action-list">
                ${candidate.meaning.manifestation.map((tip) => `<li>${tip}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      `,
        )
        .join("")}

      <div class="evidence-breakdown">
        <h3>Calculation Evidence Breakdown</h3>
        
        <div class="evidence-item">
          <h4>Life Path Number: ${results.allEvidence.lifePath}</h4>
          <p>Calculated from your birthdate digits using traditional numerology</p>
        </div>

        ${
          results.allEvidence.nameExpression
            ? `
        <div class="evidence-item">
          <h4>Name Expression Number: ${results.allEvidence.nameExpression}</h4>
          <p>Calculated using Pythagorean numerology from your name</p>
        </div>
        `
            : ""
        }

        <div class="evidence-item">
          <h4>Digit Frequency in Birthdate:</h4>
          <div class="frequency-grid">
            ${Object.entries(results.allEvidence.digitFrequency)
              .map(
                ([digit, count]) => `
              <div class="frequency-item">
                <strong>${digit}</strong><br>
                ${count}x
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        ${
          results.allEvidence.sequences.length > 0
            ? `
        <div class="evidence-item">
          <h4>Number Sequences Found:</h4>
          <p>${results.allEvidence.sequences.join(", ")}</p>
        </div>
        `
            : ""
        }

        ${
          results.allEvidence.timePatterns.length > 0
            ? `
        <div class="evidence-item">
          <h4>Time Patterns:</h4>
          <p>${results.allEvidence.timePatterns.join(", ")}</p>
        </div>
        `
            : ""
        }

        ${
          results.allEvidence.userSightings.length > 0
            ? `
        <div class="evidence-item">
          <h4>Your Reported Sightings:</h4>
          <p>${results.allEvidence.userSightings.join(", ")}</p>
        </div>
        `
            : ""
        }
      </div>

      <div class="footer">
        <p>This report was generated by Angel Number Finder</p>
        <p>Visit angelnumberfinder.com to calculate more angel numbers</p>
        <p>Remember: Angel numbers are personal spiritual messages. Trust your intuition about their meaning for you.</p>
      </div>
    </body>
    </html>
  `
}

export function generateReportFilename(birthdate: string): string {
  const date = new Date().toISOString().split("T")[0]
  const cleanBirthdate = birthdate.replace(/\//g, "-")
  return `angel-number-report-${cleanBirthdate}-${date}.pdf`
}
