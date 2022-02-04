describe(" utilities test - set up and take down - ", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInpout.value = 20;
    submitPaymentInfo();
  });

  it("should sum totoal tip amount of all payments on sumPyamentsTotal()", function () {
    expect(sumPyamentsTotal("tipAmt")).toEqual(20);

    billAmtInput.value = 400;
    tipAmtInpout.value = 20;
    sumPyamentInfo();

    expect(sumPyamentsTotal("tipAmt")).toEqual(60);
  });
  it("Should sum total bill amount of all payments on sumPaymentTotal", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(100);

    billAmtInput.value = 400;
    tipAmtInpout.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(300);
  });
  it("should sum total tip percent on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInpout.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipPercent")).toEqual();
    expect().toEqual();
  });
  it("should make new Td from value and append to tr on append(tr,value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "test");
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual();
  });
  it("should generate delete td and append to tr on appendDeleteBtn()", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("X");
  });
  it("should sum tip percent of single tip on calculateTipPercent()", function () {
    expect(calculateTipPercent(100, 23)).toEqual(23);
    expect(calculateTipPercent(111, 11)).toEqual(10);
  });
  afterEach();
});
