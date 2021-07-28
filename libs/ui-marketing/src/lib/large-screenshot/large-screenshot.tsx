import { SoftwareApplication } from 'schema-dts';

/* eslint-disable-next-line */
export type LargeScreenshotProps = SoftwareApplication;

export const LargeScreenshot = (props: LargeScreenshotProps) => {
  const { screenshot } = props;
  return (
    <div className="mx-auto max-w-md text-center lg:max-w-5xl shadow-3 mb-20">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <iframe
          src={`${screenshot}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

LargeScreenshot.defaultProps = {
  '@type': 'SoftwareApplication',
  screenshot:
    'https://player.vimeo.com/video/365886635?title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963',
};
