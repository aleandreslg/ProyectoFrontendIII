import  '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Detail from '../Routes/Detail'
import axios from 'axios'


beforeEach(() =>{
    //eslint-disable-next-line
    render(<Detail/>)
})

describe('Detail', () => {
    
    test('Verification Detail fields', () => {
        const divName = screen.getByText("Name")
        const divEmail = screen.getByText("Email")
        const divPhone = screen.getByText("Phone")
        const divWebsite = screen.getByText("Website")
        expect(divName).toBeInTheDocument();
        expect(divEmail).toBeInTheDocument();
        expect(divPhone).toBeInTheDocument();
        expect(divWebsite).toBeInTheDocument();
    })

    const fetchData = () => axios.get('https://jsonplaceholder.typicode.com/users/1');

    test("Testing detail fetch", () => {
        
        return fetchData().then(data => { 
            expect(data.data.id).toBe(1);
            expect(data.data.name).toBe("Leanne Graham");
            expect(data.data.username).toBe("Bret");
        })
    })

    //No se pudieron realizar más test debido al useContext en la mayoría de los componentes
})

