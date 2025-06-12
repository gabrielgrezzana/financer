import { Box, Button, Text } from "@chakra-ui/react";

function Home() {

    return (
        <Box __css={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#333333'
        }}>
            <Text fontSize='2xl' fontWeight='bold'>Home</Text>
            <Button>Sair</Button>
        </Box>
    )
}

export default Home;