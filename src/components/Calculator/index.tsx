import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
            <Col span={24}>
              <Input
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={values.startDate || ""}
                onChange={handleChange}
              />
              <ValidationType type="startDate" />
            </Col>
            <Col span={24}>
              <Input
                type="date"
                name="endDate"
                placeholder="End Date"
                value={values.endDate || ""}
                onChange={handleChange}
              />
              <ValidationType type="endDate" />
            </Col>
            <Col span={24}>
              <Input
                type="number"
                name="Current Basic Pay"
                placeholder="Current Basic Pay (in Rs.)"
                value={values.amount || ""}
                onChange={handleChange}
              />
              <ValidationType type="amount" />
            </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>

        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <Block title={""} content={content} />
          </Slide>
        </Col>

      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
