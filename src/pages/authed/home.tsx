import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Menu from "../../components/menu"
import Labels from "./labels"
import { ModalType } from "../../types/menu.types";

function Home() {
    const [modalType, setModalType] = useState<ModalType | null>(null);



    return (
        <Box __css={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',            
            backgroundColor: '#333333'
        }}>       
            <Menu onOpenModal={setModalType}/>  
            {modalType === ModalType.LABEL && <Labels/>}   
        </Box>
    )
}

export default Home;