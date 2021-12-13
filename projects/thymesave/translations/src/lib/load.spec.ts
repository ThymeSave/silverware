import {loadUIByKey, Languages} from "../public-api";

describe("loadUIByKey", () => {
  it("should load existing translations", () => {
    const translation = loadUIByKey(Languages.en_US,"ok");
    expect(translation).toBe("Ok");
  });
});
