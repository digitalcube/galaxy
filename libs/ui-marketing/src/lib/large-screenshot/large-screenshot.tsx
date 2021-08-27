import { WebApplication } from 'schema-dts';

/* eslint-disable-next-line */
export type LargeScreenshotProps = WebApplication;

export const LargeScreenshot = (props: LargeScreenshotProps) => {
  const { screenshot, name } = props;
  const src = new URL(`${screenshot}`);
  const video = ['player.vimeo.com'];
  if (video.indexOf(src.host) > -1) {
    return (
      <div className="mx-auto max-w-screen-md text-center shadow-3 mb-20">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <iframe
            src={`${src}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${name}`}
          />
        </div>
      </div>
    );
  } else {
    return 'foo';
  }

  // return (
  //   <div className="mx-auto max-w-screen-md text-center shadow-3 mb-20">
  //     <div className="aspect-w-16 aspect-h-9 overflow-hidden">
  //       <iframe
  //         src={`${src}`}
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //         title="Product Demo"
  //       />
  //     </div>
  //   </div>
  // );
  // console.log(src);
};

LargeScreenshot.defaultProps = {
  '@type': 'WebApplication',
  name: 'Product Demo',
  screenshot:
    'https://player.vimeo.com/video/365886635?title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963',
};
