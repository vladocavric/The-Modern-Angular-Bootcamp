export interface EmailShort {
  id?: string,
  subject: string,
  from: string
}
export interface Email extends EmailShort{
  text: string,
  to: string,
  html?: string
}
