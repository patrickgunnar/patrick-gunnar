'use client'

import { styled } from "styled-components";


interface TableProps {
    children: React.ReactNode
}

const TableContainer = styled.article`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: relative;
    padding: 20px 0;

    height: 91%;
    width: 100%;
`

const Table: React.FC<TableProps> = ({ children }) => {
    return (
        <TableContainer data-testid="tableContainer">
            {children}
        </TableContainer>
    );
}
 
export default Table;
