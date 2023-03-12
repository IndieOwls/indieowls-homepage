import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0;
  border-bottom: 1px solid #eaeaea;
  &:last-child {
    border-bottom: none;
  }
`

export default ListItem
