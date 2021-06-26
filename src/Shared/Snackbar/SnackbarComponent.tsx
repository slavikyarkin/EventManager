import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import React from "react"
import { SnackbarModel } from "./SnackbarModel"

type Props = SnackbarModel & {hide: () => void}


export const SnacbarComponent = ({open, message, severity, hide} : Props) => {
 return (
    <Snackbar open={open} autoHideDuration={6000} onClose={hide}>
      <Alert severity={severity} elevation={6} variant="filled" onClose={hide}>
            {message}
      </Alert>
    </Snackbar>
 )
}