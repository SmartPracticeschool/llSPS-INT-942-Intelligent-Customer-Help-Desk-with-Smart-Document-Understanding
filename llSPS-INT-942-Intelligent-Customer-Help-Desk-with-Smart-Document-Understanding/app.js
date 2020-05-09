
server.then(app => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Watson Discovery SDU UI Server running on port: %d', port);
  });
});
