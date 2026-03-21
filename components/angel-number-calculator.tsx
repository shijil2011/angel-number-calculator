"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Sparkles, Clock, User, Calendar, Eye, Download, Share2, Save, FileText } from "lucide-react"
import { calculateAngelNumbers, type AngelNumberInput, type AngelNumberResult } from "@/lib/angel-number-calculator"
import { generatePDFReport, downloadAsJSON, ReportStorage } from "@/lib/report-storage"
import { useToast } from "@/hooks/use-toast"
import { Analytics } from "@/lib/analytics"

const AffiliateBox = () => (
  <Card className="mb-6 border-2 border-blue-100 shadow-sm bg-blue-50/50">
    <CardContent className="p-6 text-center">
      <h3 className="text-xl font-bold mb-2 text-blue-900 flex items-center justify-center gap-2">
        <Sparkles className="h-5 w-5 text-blue-600" /> Unlock Your Full Numerology Report
      </h3>
      <p className="text-gray-600 mb-6 text-sm">
        Get detailed career, relationship & life purpose insights with a complete video reading.
      </p>
      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow transition-transform hover:scale-105"
        asChild
      >
        <a href="https://8b0cb7ww69oefwdewghjses6ay.hop.clickbank.net/?&traffic_source=vercel&traffic_type=organic&campaign=toolresult" target="_blank" rel="noopener noreferrer">
          Get My FREE Video Reading Now
        </a>
      </Button>
    </CardContent>
  </Card>
)

interface AngelNumberCalculatorProps {
  compact?: boolean
}

export function AngelNumberCalculator({ compact = false }: AngelNumberCalculatorProps) {
  const [input, setInput] = useState<AngelNumberInput>({
    birthdate: "",
    fullName: "",
    time: "",
    userSighting: "",
  })

  const [result, setResult] = useState<AngelNumberResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showAllEvidence, setShowAllEvidence] = useState(false)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  const handleCalculate = async () => {
    if (!input.birthdate) return

    setIsCalculating(true)

    // Simulate calculation delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500))

    try {
      const calculatedResult = calculateAngelNumbers(input)
      setResult(calculatedResult)

      Analytics.trackCalculation({
        birthdate_provided: !!input.birthdate,
        name_provided: !!input.fullName,
        time_provided: !!input.time,
        sighting_provided: !!input.userSighting,
        top_angel_number: calculatedResult.candidates[0]?.number || "none",
        confidence_score: calculatedResult.candidates[0]?.confidence || 0,
      })
    } catch (error) {
      console.error("Calculation error:", error)
    } finally {
      setIsCalculating(false)
    }
  }

  const handleGeneratePDF = async () => {
    if (!result) return

    setIsGeneratingPDF(true)

    try {
      await generatePDFReport({
        input,
        results: result,
      })

      Analytics.trackPDFGeneration(
        result.candidates.map((c) => c.number),
        true,
      )

      toast({
        title: "PDF Generated",
        description: "Your angel number report is ready for printing or saving.",
      })
    } catch (error) {
      Analytics.trackPDFGeneration(
        result.candidates.map((c) => c.number),
        false,
      )

      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating your PDF report. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const handleSaveReport = () => {
    if (!result) return

    setIsSaving(true)
    try {
      const reportTitle = `Angel Numbers for ${input.birthdate}${input.fullName ? ` - ${input.fullName}` : ""}`
      const reportId = ReportStorage.saveReport({
        input,
        results: result,
        title: reportTitle,
      })

      Analytics.trackEngagement("report_saved", {
        angel_numbers: result.candidates.map((c) => c.number),
      })

      toast({
        title: "Report Saved",
        description: "Your angel number report has been saved locally.",
      })
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "There was an error saving your report. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleDownloadJSON = () => {
    if (!result) return

    const reportData = {
      input,
      results: result,
      generatedAt: new Date().toISOString(),
      version: "1.0",
    }

    const filename = `angel-number-report-${input.birthdate.replace(/\//g, "-")}-${new Date().toISOString().split("T")[0]}.json`
    downloadAsJSON(reportData, filename)

    Analytics.trackEngagement("json_download", {
      angel_numbers: result.candidates.map((c) => c.number),
    })

    toast({
      title: "Report Downloaded",
      description: "Your angel number report has been downloaded as JSON.",
    })
  }

  const handleShare = async () => {
    if (!result) return

    const shareData = {
      title: "My Angel Number Report",
      text: `I discovered my angel numbers: ${result.candidates.map((c) => c.number).join(", ")}. Check out Angel Number Finder!`,
      url: window.location.origin,
    }

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
        Analytics.trackEngagement("report_shared", {
          method: "native_share",
        })

        toast({
          title: "Shared Successfully",
          description: "Your angel number results have been shared.",
        })
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`)

        Analytics.trackEngagement("report_shared", {
          method: "clipboard",
        })

        toast({
          title: "Copied to Clipboard",
          description: "Share text has been copied to your clipboard.",
        })
      } catch (error) {
        toast({
          title: "Share Failed",
          description: "Unable to share or copy to clipboard.",
          variant: "destructive",
        })
      }
    }
  }

  const isValidDate = (dateString: string) => {
    if (!dateString) return false
    const date = new Date(dateString)
    return !isNaN(date.getTime()) && dateString.length === 10
  }

  const canCalculate = isValidDate(input.birthdate)

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Calculator Form */}
      <Card className="bg-white border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Sparkles className="h-5 w-5 text-blue-600" />
            Angel Number Calculator
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your birthdate and optional details to discover your angel numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="birthdate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Birthdate *
              </Label>
              <Input
                id="birthdate"
                type="date"
                value={input.birthdate}
                onChange={(e) => setInput((prev) => ({ ...prev, birthdate: e.target.value }))}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name (optional)
              </Label>
              <Input
                id="fullName"
                placeholder="John Smith"
                value={input.fullName}
                onChange={(e) => setInput((prev) => ({ ...prev, fullName: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Time You Often See (optional)
              </Label>
              <Input
                id="time"
                placeholder="11:11"
                value={input.time}
                onChange={(e) => setInput((prev) => ({ ...prev, time: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="userSighting" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Numbers You Keep Seeing (optional)
              </Label>
              <Input
                id="userSighting"
                placeholder="111, 1234, 555"
                value={input.userSighting}
                onChange={(e) => setInput((prev) => ({ ...prev, userSighting: e.target.value }))}
              />
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!canCalculate || isCalculating}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            {isCalculating ? "Calculating..." : "Calculate My Angel Numbers"}
          </Button>
        </CardContent>
      </Card>

      {/* Results - Only shown after calculation */}
      {result && (
        <div className="space-y-6">
          <AffiliateBox />
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Angel Numbers</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleSaveReport} disabled={isSaving}>
                <Save className="h-4 w-4 mr-2" />
                {isSaving ? "Saving..." : "Save"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={handleGeneratePDF} disabled={isGeneratingPDF}>
                <FileText className="h-4 w-4 mr-2" />
                {isGeneratingPDF ? "Generating..." : "PDF Report"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownloadJSON}>
                <Download className="h-4 w-4 mr-2" />
                JSON
              </Button>
            </div>
          </div>

          {result.candidates.map((candidate, index) => (
            <Card key={candidate.number} className={index === 0 ? "border-primary" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl font-bold text-primary">{candidate.number}</CardTitle>
                  <div className="text-right">
                    <Badge variant={index === 0 ? "default" : "secondary"}>#{index + 1} Match</Badge>
                    <div className="mt-2">
                      <Progress value={candidate.confidence} className="w-24" />
                      <p className="text-sm text-muted-foreground mt-1">{candidate.confidence}% confidence</p>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-lg">{candidate.meaning.short}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Evidence Sources:</h4>
                  <div className="flex flex-wrap gap-2">
                    {candidate.evidence.map((evidence, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {evidence}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      Read Full Meaning
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 pt-4">
                    <div>
                      <h4 className="font-semibold mb-2">Detailed Meaning:</h4>
                      <p className="text-muted-foreground leading-relaxed">{candidate.meaning.expanded}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Practical Actions:</h4>
                        <ul className="space-y-1">
                          {candidate.meaning.actions.map((action, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Manifestation Tips:</h4>
                        <ul className="space-y-1">
                          {candidate.meaning.manifestation.map((tip, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}

          {/* All Evidence Section */}
          <Collapsible open={showAllEvidence} onOpenChange={setShowAllEvidence}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full bg-transparent">
                View All Calculation Evidence
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Detailed Calculation Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Life Path Number: {result.allEvidence.lifePath}</h4>
                    <p className="text-sm text-muted-foreground">Calculated from your birthdate digits</p>
                  </div>

                  {result.allEvidence.nameExpression && (
                    <div>
                      <h4 className="font-semibold">Name Expression: {result.allEvidence.nameExpression}</h4>
                      <p className="text-sm text-muted-foreground">Calculated using Pythagorean numerology</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold">Digit Frequency in Birthdate:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {Object.entries(result.allEvidence.digitFrequency).map(([digit, count]) => (
                        <Badge key={digit} variant="outline">
                          {digit}: {count}x
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {result.allEvidence.sequences.length > 0 && (
                    <div>
                      <h4 className="font-semibold">Sequences Found:</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {result.allEvidence.sequences.map((seq, i) => (
                          <Badge key={i} variant="outline">
                            {seq}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}
    </div>
  )
}
