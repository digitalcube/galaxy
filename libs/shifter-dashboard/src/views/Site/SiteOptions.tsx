import React, { FC, useCallback, useMemo } from 'react';
import { OptionsMenu } from '@galaxy/views';
import { ButtonMenuItem } from '@galaxy/core';

export const SiteOptions: FC<SiteOptions> = ({
  className,
  state,
  handleChangeSiteState,
}: SiteOptions) => {
  const handleStartWordPress = useCallback(() => {
    handleChangeSiteState('starting')
    setTimeout(() => {
      handleChangeSiteState('running')
    }, 2500)
  }, [handleChangeSiteState])
  const handleStopWordPress = useCallback(() => {
    handleChangeSiteState('stopped')
  }, [handleChangeSiteState])
  const handleReStartWordPress = useCallback(() => {
    handleChangeSiteState('starting')
    setTimeout(() => {
      handleChangeSiteState('running')
    }, 2500)
  }, [handleChangeSiteState])
  const menu = useMemo(() => {
    if (state === 'stopped') {
      return [
        { label: 'Start WordPress', onClick: handleStartWordPress}
      ]
    }
    if (state === 'running') {
      return [{
        label: 'Restart WordPress', onClick: handleReStartWordPress
      }, {
        label: 'Stop WordPress', onClick: handleStopWordPress,
      }]
    }
    return [{
      label: 'Restart WordPress', onClick: handleReStartWordPress
    }, {
      label: 'Stop WordPress', onClick: handleStopWordPress,
    }]
    
  }, [state, handleStopWordPress, handleStartWordPress, handleReStartWordPress])

  return <OptionsMenu className={className} menu={menu} />;
};

export type SiteOptions = {
  state?: string;
  className?: string;
  menu?: ButtonMenuItem[];
  /**
   * For Mock features
   */
  handleChangeSiteState: (state: string) => void;
};
