import { styled } from "styled-components";


interface TableProps {
    children: React.ReactNode
}

const TableContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 10px;
    position: relative;

    height: 91%;
    width: 100%;
`

const Table: React.FC<TableProps> = ({ children }) => {
    return (
        <TableContainer>
            {children}
        </TableContainer>
    );
}
 
export default Table;
