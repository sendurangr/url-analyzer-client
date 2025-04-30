export interface UrlAnalyzerModel {
  htmlVersion: string
  pageTitle: string
  headings: Headings
  internalLinks: number
  externalLinks: number
  inaccessibleLinks: number
  loginFormDetected: boolean
}

export interface Headings {
  h1: number
  h2: number
  h3: number
  h4: number
  h5: number
  h6: number
  h7: number
  h8: number
}
