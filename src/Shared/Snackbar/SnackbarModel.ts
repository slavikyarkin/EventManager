import { AlertProps, Color } from "@material-ui/lab/Alert";

export interface SnackbarModel {
    open: boolean;
    message: string;
    severity: Color;
}