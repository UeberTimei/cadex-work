import { useState } from "react";
import appStyles from "./styles/App.module.css";
import { BoxDimensions } from "./types";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components/Box";
import { BoxForm } from "./components/BoxForm";
import { TrackballControls } from "@react-three/drei";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [boxDimensions, setBoxDimensions] = useState<BoxDimensions>({
    height: 100,
    width: 100,
    length: 100,
  });

  const handleFormSubmit = async (dimensions: BoxDimensions) => {
    setBoxDimensions(dimensions);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              fontSize: "2rem",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "2rem",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={appStyles.wrapper}>
        <div className={appStyles.canvasContainer} style={{ flex: 1 }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[1, 1, 1]} />
            <pointLight position={[-1, -1, 1]} />
            <pointLight position={[-1, -1, -1]} />
            <pointLight position={[1, 1, -1]} />
            <Box dimensions={boxDimensions} />
            <TrackballControls rotateSpeed={3} />
          </Canvas>
        </div>
        <div className={appStyles.formContainer}>
          <BoxForm onSubmit={handleFormSubmit} dimensions={boxDimensions} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
