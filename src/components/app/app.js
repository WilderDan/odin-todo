const App = () => {
  const app = document.createElement("div");
  app.innerHTML = "<h1>Hello</h1>";

  const getElement = () => {
    return app;
  };

  return { getElement };
};

export default App;
