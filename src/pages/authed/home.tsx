// pages/home/index.tsx
import { Box, Image } from "@chakra-ui/react";
import Menu from "../../components/menu";
import ModalManager from "../../components/modal_manager";

function Home() {
  return (
    <Box
      zIndex={9}
      __css={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(34, 33, 33)'
      }}
    >
      <Image
        src={"https://img.freepik.com/fotos-premium/um-close-up-de-uma-folha-em-uma-ia-generativa-de-fundo-escuro_797840-2176.jpg?ga=GA1.1.1733532819.1747275840&semt=ais_hybrid&w=1920"}
        opacity={1}
        alt="background"
        pos="absolute"
        w="100vw"
        h="100vh"
        backgroundBlendMode={'multiply'}
        zIndex={1}
        objectFit="cover"
      />
      
      <Menu />
      
      {/* Container principal - agora sem o componente Financer fixo */}
      <Box
        zIndex={99}
        __css={{
          marginLeft: '20vw',
          width: '80vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        {/* Conteúdo padrão da home pode ir aqui */}
        <Box color="white" textAlign="center">
          <h1>Bem-vindo à sua aplicação!</h1>
          <p>Selecione uma opção no menu lateral.</p>
        </Box>
      </Box>
      
      {/* Modal Manager - gerencia todos os modals */}
      <ModalManager />
    </Box>
  );
}

export default Home;