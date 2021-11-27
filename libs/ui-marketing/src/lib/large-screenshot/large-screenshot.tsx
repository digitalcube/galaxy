import { WebApplication } from 'schema-dts';

/* eslint-disable-next-line */
export type LargeScreenshotProps = WebApplication & { '@type': null };

function validURL(str: string) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

export const LargeScreenshot = (props: LargeScreenshotProps) => {
  const { screenshot, name } = props;

  const src = validURL(`${screenshot}`) ? new URL(`${screenshot}`) : screenshot;
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
    return (
      <div className="mx-auto max-w-screen-md text-center shadow-3 mb-20 rounded">
        <img className="w-full" src={`${src}`} alt={`${name}`} />
      </div>
    );
  }
};

LargeScreenshot.defaultProps = {
  '@type': 'WebApplication',
  name: 'Product Demo',
  screenshot: 'http://localhost:4200/shifter-dashboard.png',
};
