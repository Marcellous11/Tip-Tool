describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add name if input value is empty", function () {
    submitServerInfo();
    serverNameInput.value = "";

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should update server table", function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll("#serverTable tbody tr td");

    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual("Alice");
    expect(curTdList[1].innerText).toEqual("$0.00");
  });

  afterEach(function () {
    severId = 0;
    serverTbody.innerHTML;
    allServers = {};
    // teardown logic
  });
});
