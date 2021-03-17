import { useEffect } from 'react'

export default function TwitterWidget() {
  useEffect(() => {
    const script = window.document.createElement('script')

    script.asyc = true
    script.src = 'https://platform.twitter.com/widgets.js'

    window.document.body.appendChild(script)
  }, [])

  return null
}
