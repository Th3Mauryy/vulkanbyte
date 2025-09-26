// utils/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Contact form events
export const trackContactForm = {
  submit: () => event({
    action: 'submit',
    category: 'Contact Form'
  }),
  success: () => event({
    action: 'success', 
    category: 'Contact Form'
  }),
  error: () => event({
    action: 'error',
    category: 'Contact Form'
  })
}

// WhatsApp events
export const trackWhatsApp = () => event({
  action: 'click',
  category: 'WhatsApp'
})