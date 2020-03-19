import React from 'react'
import { Global, css } from '@emotion/core'

export const GlobalStyle = () => (
  <Global
    styles={css`
      .focus-outline-hidden :focus {
        outline: none;
      }
    `}
  />
)
