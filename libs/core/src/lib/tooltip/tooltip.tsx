import React, { ReactNode } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { Button } from '@galaxy/core';
import './tooltip.css';

/* eslint-disable-next-line */
export interface TooltipProps {
  children?: ReactNode;
  label?: Button['label'] | Button['children'];
}

export function Tooltip(props: TooltipProps) {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  const { children, label } = props;

  return (
    <>
      <span ref={setTriggerRef}>{children}</span>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className:
              'tooltip-container rounded z-10 bg-shifter-gray-900 px-4 py-2 text-white flex-col flex',
          })}
        >
          {label}
          <div
            {...getArrowProps({ className: 'tooltip-arrow absolute h-4 w-4' })}
          />
        </div>
      )}
    </>
  );
}

export default Tooltip;
