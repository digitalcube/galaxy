import React, { createContext, FC, PropsWithChildren, useContext } from 'react';

export type InternalLinkBase = {
  sites: string;
  teams: string;
  accounts: string;
  admin: string;
}

export type InternalLinkBaseProviderProps = PropsWithChildren<Partial<InternalLinkBase>>

const InternalLinkBaseContext = createContext<InternalLinkBase>({
  sites: 'sites',
  teams: 'teams',
  accounts: 'accounts',
  admin: 'admin',
})

export const useInternalLinkBase = () => useContext(InternalLinkBaseContext)

export const InternalLinkBaseProvider: FC<InternalLinkBaseProviderProps> = ({
  sites = 'sites', teams = 'teams', accounts = 'accounts', children, admin = 'admin'
}) => {
  return (
    <InternalLinkBaseContext.Provider value={{sites,teams,accounts,admin}}>
      {children}
    </InternalLinkBaseContext.Provider>
  )
}
