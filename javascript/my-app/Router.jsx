import React from "react";
import { PageContext } from "./context/PageContext";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import Landing from "./components/Landing";
import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
} from "native-base";

import Home from "./pages/Home";

export default function Router() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [page, setPage] = useContext(PageContext);

  const [auth, setAuth] = useState(false);

  return (
    <Container bg={colorMode === "dark"}>
      {auth == false && <Landing setAuth={setAuth} />}
      {auth == true && (
        <>
          <TopNav colormode={colorMode} setColorMode={setColorMode} />
          <Center>{page == "Home" && <Home />}</Center>

          <BottomNav />
        </>
      )}
    </Container>
  );
}
