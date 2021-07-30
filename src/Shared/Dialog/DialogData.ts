export interface DialogData {
    show?: boolean;
    content: string;
    result?: boolean;
}

export type DialogOpenAction = Pick<DialogData, 'content'>

export type DialogCloseAction = Pick<DialogData, 'result'>
