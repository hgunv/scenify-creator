import { FC } from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { SnackbarProvider } from 'baseui/snackbar'

const engine = new Styletron()

const Provider: FC = ({ children }) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SnackbarProvider>{children}</SnackbarProvider>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default Provider
