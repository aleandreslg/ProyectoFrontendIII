import  '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Detail from '../Routes/Detail'


beforeEach(() =>{
    render(<Detail/>)
})

describe('Detail', () => {
    it('Verificacion campos en Detail', () => {
        const divName = screen.getByText("Name")
        const divEmail = screen.getByText("Email")
        const divPhone = screen.getByText("Phone")
        const divWebsite = screen.getByText("Website")

        expect(divName).toBeInTheDocument();
        expect(divEmail).toBeInTheDocument();
        expect(divPhone).toBeInTheDocument();
        expect(divWebsite).toBeInTheDocument();
    })
})