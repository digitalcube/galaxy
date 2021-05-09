import React from 'react';

/* eslint-disable-next-line */
export interface ProgressProps {
  className?: string;
  progress?: number | null | undefined;
}

export function Progress(props: ProgressProps) {
  const { progress } = props;
  if (!progress) return null;
  return (
    <div className={`${props.className}`}>
      <div className="overflow-hidden h-1 flex rounded-r">
        <div
          style={{ width: `${progress * 10}%` }}
          className="rounded bg-gradient-to-r from-shifter-purple-primary to-shifter-magenta-primary"
        ></div>
      </div>
    </div>
  );
}

export default Progress;

Progress.defaultProps = {
  className: 'relative',
};
