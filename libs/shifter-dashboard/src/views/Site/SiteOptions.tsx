import React, { FC, useCallback, useMemo } from 'react';
import { OptionsMenu } from '@galaxy/views';
import { ButtonMenuItem } from '@galaxy/core';
import { FaPlay, FaStop } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';

export const SiteOptions: FC<SiteOptions> = ({
  className,
  state,
  variant,
  handleChangeSiteState,
}: SiteOptions) => {
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
          label: <FaPlay />,
          variant: 'link',
          onClick: handleStartWordPress,
        },
      ];
    }
    if (state === 'running') {
      return [
        {
          label: <HiOutlineRefresh />,
          variant: 'link',
          onClick: handleReStartWordPress,
        },
        {
          label: <FaStop />,
          variant: 'link',
          onClick: handleStopWordPress,
        },
      ];
    }
    return [
      {
        label: <HiOutlineRefresh />,
        variant: 'link',
        onClick: handleReStartWordPress,
      },
      {
        label: <FaStop />,
        variant: 'link',
        onClick: handleStopWordPress,
      },
    ];
  }, [
    state,
    handleStopWordPress,
    handleStartWordPress,
    handleReStartWordPress,
  ]);

  return <OptionsMenu variant={variant} className={className} menu={menu} />;
};

export type SiteOptions = {
  state?: string;
  className?: string;
  menu?: ButtonMenuItem[];
  variant?: OptionsMenu['variant'];
  /**
   * For Mock features
   */
  handleChangeSiteState: (state: string) => void;
};
