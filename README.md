# WELCOME to the most amazing reusable tooltip package.

## How to use the tooltip:
- Use the tooltip as component in your react project.
- The props should be as the next interface, non of the properties is mendatory\

    content: any, //this is the content inside the tooltip\
    children?: JSX.Element, // this is the content where the tooltip is conected to \
    location: UP / DOWN / LEFT / RIGHT, // will determain where the tooltip will appear. default is left\
    trigger: HOVER / CLICK / FOCUS, // will determain what will trigger the tooltip. default is hover\
    duration: number, // the amount of time tooltip will be displayed in milliseconds. default is 20000 \
    delay: number, // the amount of time it will take to the tooltip to appear in milliseconds. default is 200\
    animation: {\
          type: FADE / ZOOM / GRADIENT / WIGGLE\
          durationInSec\
    }, the effect that tooltip will use to appear. default is fade for 3s\
    style: {\
          backgroundColor: string, // default is black\
          color: string, // default is white\
          border_radius: string, // default is 3px\
          margin: string, // default is 2px\
          padding: string, // default is 4px\
          font_size: string, // default is 15px\
          font_family: string, // default is 'sans-serif'\
    },\
    formatter: {\
          maxHeight: string, \
          maxWidth: string\
    }, // if tooltip content is stepping out of this size a scroller will be available in the tooltip. default is 200px\
    hideOnClick: boolean, // add the ability to close the tooltip using click. default is false\
    onlyEllipsis: boolean, // add the ability to display the tooltip only if the content it conected to has ellipsis over-flow. default is false\



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

