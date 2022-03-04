import React, { memo } from 'react'

const Small = React.memo(({ value }) => {
  console.log('Me volvi a llamar')
  return <small>{value}</small>
})

export default Small
