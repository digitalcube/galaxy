import React, { FC, useCallback, useMemo } from 'react';
import { OptionsMenu } from '@galaxy/views';
import { ButtonMenu, Heading, HeadingProps } from '@galaxy/core';
import { FaPlay, FaStop } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';

function SiteOptionsLabel(props: SiteOptionsLabelProps) {
  const { label, variant } = props;
  return (
    <Heading text={label} className={variant === 'list' ? 'sr-only' : ''} />
  );
}

function StartLabel(props: SiteOptionsLabelProps) {
  return (
    <>
      <SiteOptionsLabel {...props} />
      <FaPlay />
    </>
  );
}

function StopLabel(props: SiteOptionsLabelProps) {
  return (
    <>
      <SiteOptionsLabel {...props} />
      <FaStop />
    </>
  );
}

function RestartLabel(props: SiteOptionsLabelProps) {
  return (
    <>
      <SiteOptionsLabel {...props} />
      <HiOutlineRefresh />
    </>
  );
}

export interface SiteOptionsLabelProps {
  label?: HeadingProps['text'];
  variant?: HeadingProps['variant'];
}

/* eslint-disable-next-line */
export interface SiteOptionsProps {
  state?: string;
  className?: string;
  menu?: ButtonMenu['menu'];
  variant?: OptionsMenu['variant'];
  /**
   * For Mock features
   */
  handleChangeSiteState: (state: string) => void;
}

export function SiteOptions(props: SiteOptionsProps) {
  const { className, state, variant, handleChangeSiteState } = props;

  const handleStartWordPress = useCallback(() => {
    handleChangeSiteState('starting');
    setTimeout(() => {
      handleChangeSiteState('running');
    }, 2500);
  }, [handleChangeSiteState]);
  const handleStopWordPress = useCallback(() => {
    handleChangeSiteState('stopped');
  }, [handleChangeSiteState]);
  const handleReStartWordPress = useCallback(() => {
    handleChangeSiteState('starting');
    setTimeout(() => {
      handleChangeSiteState('running');
    }, 2500);
  }, [handleChangeSiteState]);

  const menu = useMemo(() => {
    if (state === 'stopped') {
      return [
        {
          label: <StartLabel label="Start WordPress" variant={variant} />,
          variant: 'link',
          onClick: handleStartWordPress,
        },
      ];
    }
    if (state === 'running') {
      return [
        {
          label: <RestartLabel label="Restart WordPress" variant={variant} />,
          variant: 'link',
          onClick: handleReStartWordPress,
        },
        {
          label: <StopLabel label="Stop WordPress" variant={variant} />,
          variant: 'link',
          onClick: handleStopWordPress,
        },
      ];
    }
    return [
      {
        label: <RestartLabel label="Restart WordPress" variant={variant} />,
        variant: 'link',
        onClick: handleReStartWordPress,
      },
      {
        label: <StopLabel label="Stop WordPress" variant={variant} />,
        variant: 'link',
        onClick: handleStopWordPress,
      },
    ];
  }, [
    state,
    variant,
    handleStopWordPress,
    handleStartWordPress,
    handleReStartWordPress,
  ]);

  return <OptionsMenu variant={variant} className={className} menu={menu} />;
}

export default SiteOptions;
