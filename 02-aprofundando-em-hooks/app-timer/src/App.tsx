import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/deafult'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
