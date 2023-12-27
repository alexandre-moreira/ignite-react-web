 import { ThemeProvider } from 'styled-components';
import { Button } from "./components/Button";
import { defaultTheme } from './styles/themes/deafult';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h2>App - Timer</h2>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="danger"/>
      <Button variant="success"/>
      
    </ThemeProvider>
  )
}

