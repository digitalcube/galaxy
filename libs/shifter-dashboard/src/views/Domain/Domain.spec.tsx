import {
    getDomainSectionClassName,
} from './Domain'
describe('views/Domain', () => {
    describe('getDomainSectionClassName', () => {
        it.each([
            'light',
            'dark',
            undefined,
            '',
            'dummy'
        ])('Given %p as variant, should match snapshot', (variant) => {
            expect(getDomainSectionClassName({variant}))
                .toMatchSnapshot()
        })
    })
})