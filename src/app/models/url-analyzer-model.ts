export interface UrlAnalyzerModel {
  htmlVersion: string
  pageTitle: string
  headings: Headings
  internalLinks: number
  externalLinks: number
  inaccessibleInternalLinks: number
  inaccessibleExternalLinks: number
  loginFormDetected: boolean
  timeTakenToAnalyze: number
  url: string
}

export interface Headings {
  h1: number
  h2: number
  h3: number
  h4: number
  h5: number
  h6: number
}
