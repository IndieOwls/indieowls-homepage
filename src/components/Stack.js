import React from 'react'
import styled from 'styled-components'

/**
 * A card container for stacking content vertically.
 */
const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 1200px;
`

export default Stack
