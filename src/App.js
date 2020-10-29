import React, { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyle, { Theme } from "./Styles";
import Carrousel from "./views/Carrousel";
import Input from "./views/Input";
import ClockComponent from "./views/Clock";

function App() {
  const [selected, isSelected] = useState(0);

  const renderItemComponent = useMemo(() => {
    switch (selected) {
      case 0:
        return <ClockComponent />;
      case 1:
        return <Carrousel />;
      case 2:
        return <Input />;
      case 3:
        return (
          <>
            <Carrousel />
            <ClockComponent />
            <Input />
          </>
        );
      default:
        return <ClockComponent />;
    }
  }, [selected]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <section>
        <Header selected={selected} onChange={(id) => isSelected(id)} />
        {renderItemComponent}
      </section>
    </ThemeProvider>
  );
}

export default App;
