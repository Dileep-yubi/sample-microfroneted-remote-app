import { InfoCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Button, Collapse, Form, Input, Tooltip } from "antd";
import React from "react";
import { StyledFlexDiv } from "../shared/elements";
import { propertyToLabelMapping } from "../propertyToLabelMapping";
import { useStyles } from "@yubi/yb-style-provider";
import CAInputField from "@yubi/yb-core-input-field";
import YbCoreAccordionAdvanced from "@yubi/yb-core-accordion-advanced";

interface BalanceToEmiFormProps {
  noOfOptions: number;
}

const balanceToEmiOptions = [
  { name: "installmentAmount", label: "Amount" },
  { name: "tenure", label: "Tenure" },
  { name: "rateOfInterest", label: "R.O.I" },
];

export const BalanceToEmi = (props: BalanceToEmiFormProps) => {
  const { noOfOptions } = props;
  const { styleConnector } = useStyles();

  const { Panel } = Collapse;

  console.log("This in the current func", this);

  return (
    <>
      {Array(noOfOptions)
        .fill("")
        .map((e, index) => {
          return (
            <StyledFlexDiv
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              key={index}
              style={{ width: "100%" }}
              padding="10px 0px">
              <YbCoreAccordionAdvanced
                leftComponent={(style) => {
                  return (
                    <div style={{ width: "65vw" }}>
                      {`Emi option ${index + 1}`}{" "}
                      <Tooltip
                        placement="right"
                        style={{ width: "max-content" }}
                        title="Map EMI columns from the allocation file">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </div>
                  );
                }}
                size="s"
                // rightComponent={(style) => {
                //   return <>Right Component</>;
                // }}
                // subTitle={'What is an accordion component'}
                styleConnector={styleConnector}
                isOpen={false}
                basicContainerStyle={{
                  paddingTop: -8,
                  paddingBottom: -8,
                  paddingLeft: -12,
                  paddingRight: -12,
                }}
                // showArrowComponent={false}
              >
                <StyledFlexDiv
                  flexDirection="column"
                  alignItems="flex-start"
                  style={
                    {
                      // border: "1px solid #e3e8ef",
                      // borderRadius: "0px 0px 5px 5px",
                      // borderTop: "0px",
                    }
                  }>
                  {balanceToEmiOptions.map((element, optionIndex) => (
                    <Form.Item
                      key={optionIndex}
                      name={["balanceToEmi", index, element.name]}>
                      <CAInputField
                        label={propertyToLabelMapping(element.name)}
                        variant="outlined"
                        styleConnector={styleConnector}
                      />
                    </Form.Item>
                  ))}
                </StyledFlexDiv>
              </YbCoreAccordionAdvanced>
              {/* <Collapse
                defaultActiveKey={[0]}
                bordered={false}
                style={{ background: "#fff", width: "100%" }}>
                <Panel
                  style={{ padding: "16px" }}
                  header={
                    <StyledFlexDiv
                      justifyContent="space-between"
                      alignItems="center"
                      padding="0px"
                      width="90%">
                      <div>
                        {`Emi option ${index + 1}`}{" "}
                        <Tooltip
                          placement="right"
                          style={{ width: "max-content" }}
                          title="Map EMI columns from the allocation file">
                          <InfoCircleOutlined />
                        </Tooltip>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("Clicked Index", index);
                        }}>
                        <MinusCircleOutlined style={{ color: "#EE6047" }} />
                      </div>
                    </StyledFlexDiv>
                  }
                  key="">
                  <StyledFlexDiv flexDirection="column" alignItems="flex-start">
                    {balanceToEmiOptions.map((element, optionIndex) => (
                      <Form.Item
                        key={optionIndex}
                        name={["balanceToEmi", index, element.name]}>
                        <CAInputField
                          label={propertyToLabelMapping(element.name)}
                          variant="outlined"
                          styleConnector={styleConnector}
                        />
                      </Form.Item>
                    ))}
                  </StyledFlexDiv>
                </Panel>
              </Collapse> */}
            </StyledFlexDiv>
          );
        })}
    </>
  );
};
