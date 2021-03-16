import React from 'react'
import Tabs from '@theme/Tabs'

export default function SprocketsVsWebpackerTabs({ children }) {
  return (
    <Tabs
      defaultValue="webpacker"
      values={[
        { label: 'Webpacker', value: 'webpacker' },
        { label: 'Sprockets', value: 'sprockets' },
      ]}
    >
      {children}
    </Tabs>
  )
}
