describe("Payments test", function () {
  beforeEach(function () {
    billAmtInput.value = 50;
    tipAmtInput.value = 12;
  });

  it("should add new payments to allPayments on subPaymentInfo()", () => {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual(50);
    expect(allPayments["payment1"].tipAmt).toEqual(12);
    expect(allPayments["payment1"].tipPercent).toEqual(24);
  });
  it("Should not add a new payment to allPayments with an empty input ", () => {
    billAmtInput.value = "";
    submitPaymentInfo();

    expect(Object.keys(allPayments).lengh).toEqual(0);
  });
  it("Should update #paymentTable on appendPaymentTable()", () => {
    let curPayment = createCurPayment();

    allPayments["payment1"] = curPayment;

    appendPyamentTable(curPayment);

    let curTdList = document.querySelectorAll("#paymentTable tbody tr td");

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0]).innerText.toEqual("50");
    expect(curTdList[1]).innerText.toEqual("");
    expect(curTdList[3]).innerText.toEqual();
    expect(curTdList[4]).innerText.toEqual("X");
  });
  it("Create a new payment on createCurPayment", () => {
    let expectedPayment = {
      billAmt: "100",
      tipAmt: "20",
      tipPercent: 20,
    };
    expect(createCurPayment()).toEqual(expectedPayment);
  });
  it("should not create payment with empty input on createCurPayment()", () => {
    billAmtInput.value = "";
    tipAmtInput.value = "";

    let curPayment = createCurPayment();
    expect(curPayment).toEqual(undefined);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});
