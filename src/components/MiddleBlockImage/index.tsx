import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";

interface MiddleBlockImageProps {
  title: string;
  image: string;
  id: string;
  t: TFunction;
}

const MiddleBlockImage = ({title, image, id, t }: MiddleBlockImageProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              {/* <h6>{t(title)}</h6> */}
              <SvgIcon src={image} width="100%" height="100%" />
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlockImage);
