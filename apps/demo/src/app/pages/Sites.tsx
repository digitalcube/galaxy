import React, {FC} from 'react'
import { Sites, Site } from '@galaxy/shifter-dashboard';
import {
    fakerSites
} from '@galaxy/faker'

const sites = fakerSites as Site[]
export const PageSites: FC = () => {
    return (
        <Sites sites={sites} />
    )
}