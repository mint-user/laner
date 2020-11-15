import { M } from 'react-materialize'

export const Toast = (text, style) => {
    let useClass;
    // style ? useClass = 'red lighten-2' : useClass =  ''
    // let useClass = style ? 'rounded' :  ''
    // class = style || ''
    // let useClass = ''
    // if(style=='error'){
    //     useClass = 'rounded'
    // } else {
    //     useClass = ''
    // }
    switch (style) {
        case 'error':
            useClass = 'red lighten-2'
            break;
        default:
            useClass = 'teal lighten-3'
            break;
    }
    window.M.toast({html: text, classes: useClass})
}