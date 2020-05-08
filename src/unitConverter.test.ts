import convert = require("convert-units");

test("Convert meters into feet and back to meters", () => {
  const valueInFt = convert(20).from('m').to("ft");
  expect(valueInFt).toEqual(65.6168);

  const valueInMeters = convert(valueInFt).from("ft").to("m");
  expect(valueInMeters).toEqual(20);
});
