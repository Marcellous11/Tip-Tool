describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1)
    expect(allServers['server' + serverId].serverName).toEqual('Alice')

  });

  it("should not add name is input value is empty", function () {
    submitServerInfo();


  });

  it("", function () {
    


  });


  afterEach(function () {
    severId =0;
    serverTbody.innerHTML
    // teardown logic
  });
});
