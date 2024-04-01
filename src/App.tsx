import React, { useState } from "react";
import { Button, Form, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import { StyledFlexDiv } from "./shared/elements";
import { BalanceToEmi } from "./Components/BalanceToEmiForm";
import YbCoreTypography from "@yubi/yb-core-typography";
import StyleProvider from "@yubi/yb-style-provider";
import { useStyles } from "@yubi/yb-style-provider";
import YbCoreButton from "@yubi/yb-core-button/build";
import YbCoreDropdown from "@yubi/yb-core-dropdown";

const Response = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [noOfOptions, setNoOfOptions] = useState(0);
  const [balanceToEmiDetails, setBalanceToEmiDetails] = useState([]);
  const { styleConnector } = useStyles();
  return (
    <>
      {" "}
      <StyledFlexDiv>
        <Modal
          title={"Workflow Configuration"}
          open={true}
          closable={true}
          footer={
            <StyledFlexDiv alignItems="center" justifyContent="center">
              <YbCoreButton
                size="m"
                variant="primary"
                title="Testing"
                accessibilityLabel="Yubi button"
                onClick={() => alert("button")}
                styleConnector={styleConnector}
              />
            </StyledFlexDiv>
          }
          width="80vw"
          style={{
            height: "80vh",
            maxHeight: "80vh",
          }}>
          <div style={{ height: "100%", width: "100%" }}>
            <StyledFlexDiv
              flexDirection="column"
              alignItem="center"
              justifyContent="center">
              <YbCoreTypography
                typeStyle={"h2"}
                weight={"regular"}
                transform={"none"}
                fontStyle={"normal"}>
                Workflow Configuration
              </YbCoreTypography>
              <YbCoreTypography
                typeStyle={"body"}
                weight={"regular"}
                transform={"none"}
                fontStyle={"normal"}>
                Chose the type of work flow
              </YbCoreTypography>
            </StyledFlexDiv>
            <StyledFlexDiv flexDirection="column" alignItems="flex-start">
              <YbCoreTypography
                typeStyle={"body"}
                weight={"600"}
                transform={"none"}
                fontStyle={"normal"}>
                Workflow type
              </YbCoreTypography>
              <div style={{ width: "90%", zIndex: "10" }}>
                <YbCoreDropdown
                  input={selectedValue}
                  isDisabled={false}
                  styleConnector={styleConnector}
                  dropdownData={[
                    { value: "Balance to EMI", label: "Balance to EMI" },
                    { value: "Settlement", label: "Settlement" },
                    { value: "Restructuring", label: "Restructuring" },
                    { value: "Deferment", label: "Deferment" },
                  ]}
                  handleClick={(value) => {
                    console.log("value", value);
                    setSelectedValue(value.value);
                  }}
                />
              </div>
              {/* <Select
                defaultValue=""
                style={{ width: "90%", padding: "8px" }}
                onChange={(e) => setSelectedValue(e)}>
                <Option value="Balance to EMI">Balance to EMI</Option>
                <Option value="Settlement">Settlement</Option>
                <Option value="Restructuring">Restructuring</Option>
                <Option value="Deferment">Deferment</Option>
              </Select> */}
            </StyledFlexDiv>
            <StyledFlexDiv
              style={{ width: "90%", padding: "8px" }}
              justifyContent="flex-end">
              <YbCoreButton
                disabled={!selectedValue || selectedValue !== "Balance to EMI"}
                size="m"
                variant="primary"
                title="+ Add"
                accessibilityLabel="Yubi button"
                onClick={() => setNoOfOptions((prev) => prev + 1)}
                styleConnector={styleConnector}
              />
            </StyledFlexDiv>
            <div
              style={{
                height: "40vh",
                maxHeight: "40vh",
                overflowY: "scroll",
                width: "100%",
              }}>
              <Form
                style={{ width: "100%" }}
                onValuesChange={(changedValue, allValues) => {
                  setBalanceToEmiDetails(allValues);
                }}>
                {selectedValue === "Balance to EMI" && (
                  <BalanceToEmi noOfOptions={noOfOptions} />
                )}
              </Form>
            </div>
          </div>
        </Modal>
      </StyledFlexDiv>
    </>
  );
};

function App(props) {
  return (
    <StyleProvider baseUrl="https://design-system-qa.go-yubi.in/tokens">
      <Response />
    </StyleProvider>
  );
}

export default App;
