import React from 'react'
import Tabs from '@theme/Tabs'

export default function({ children }) {
  return <Tabs
    defaultValue="sprockets"
    values={[
      { label: 'Sprockets', value: 'sprockets' },
      { label: 'Webpacker', value: 'webpacker' },
    ]}
  >
    {children}
  </Tabs>
}
