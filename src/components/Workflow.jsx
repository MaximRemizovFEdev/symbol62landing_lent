import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaClipboardList,
  FaCheckCircle,
  FaCreditCard,
  FaPrint,
  FaTruck,
} from "react-icons/fa";
import { motion } from "framer-motion";
import styled from "styled-components";

const steps = [
  {
    title: "Оформление заказа",
    description:
      "Определитесь с количеством и параметрами вашего заказа, заполнив форму",
    icon: <FaClipboardList />,
  },
  {
    title: "Согласование",
    description:
      "После получения вашей заявки наш менеджер обработает ваш заказ и пришлет всю детальную информацию и макеты на согласование",
    icon: <FaCheckCircle />,
  },
  {
    title: "Оплата",
    description:
      "Оплатить заказ можно онлайн, переводом или по счету (для юридических лиц)",
    icon: <FaCreditCard />,
  },
  {
    title: "Изготовление",
    description: "Приступаем к печати ваших лент",
    icon: <FaPrint />,
  },
  {
    title: "Получение заказа или доставка",
    description:
      "Забрать заказ вы можете в нашем офисе. Если вы находитесь в другом городе, согласовать доставку любой транспортной компанией вы сможете при оформлении заказа. Бесплатная доставка для заказов свыше 10 000 рублей.",
    icon: <FaTruck />,
  },
];

// Стилизованные компоненты
const WorkflowContainer = styled(Container)`
  position: relative;
  padding: 50px 0;
  overflow: hidden;
`;

const WorkflowStep = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
}))`
  position: relative;
  text-align: center;
  padding: 30px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px) !important;
    box-shadow: 0 15px 35px rgba(255, 87, 8, 0.15) !important;
  }
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff5708, #ff8c08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  font-size: 32px;
  box-shadow: 0 5px 15px rgba(255, 87, 8, 0.3);
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  font-weight: 700;
  color: #333;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0;
`;

const Connector = styled.svg`
  position: absolute;
  z-index: 1;
  stroke: #ff5708;
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 1.5s forwards;

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

// Определяем позиции для "змейки" на разных разрешениях
const getStepPosition = (index, isMobile, isTablet) => {
  if (isMobile) {
    return { order: index, offset: 0 };
  }
  
  if (isTablet) {
    const row = Math.floor(index / 2);
    const col = index % 2;
    return {
      order: row * 2 + col,
      offset: row % 2 === 0 ? 0 : 100,
    };
  }
  
  // Desktop
  return {
    order: index,
    offset: index % 2 === 0 ? 0 : 100,
  };
};

// Компонент соединительной линии
const StepConnector = ({ from, to, isMobile, isTablet }) => {
  if (isMobile) {
    return (
      <Connector
        width="2"
        height="50"
        style={{ left: "50%", top: `${from.y}px`, transform: "translateX(-50%)" }}
      >
        <line x1="0" y1="0" x2="0" y2="50" />
      </Connector>
    );
  }

  if (isTablet) {
    const fromRow = Math.floor(from.index / 2);
    const toRow = Math.floor(to.index / 2);
    
    if (fromRow === toRow) {
      // Горизонтальная линия в одной строке
      return (
        <Connector
          width={`${to.x - from.x}`}
          height="2"
          style={{ left: `${from.x}px`, top: `${from.y + 60}px` }}
        >
          <line x1="0" y1="0" x2={`${to.x - from.x}`} y2="0" />
        </Connector>
      );
    } else {
      // Вертикальная линия между строками
      const midX = from.index % 2 === 0 ? from.x + 50 : to.x - 50;
      const path = `M ${from.x} ${from.y + 60} 
                   L ${midX} ${from.y + 60} 
                   L ${midX} ${to.y - 40} 
                   L ${to.x} ${to.y - 40}`;
      
      return (
        <Connector
          width={`${Math.abs(to.x - from.x) + 100}`}
          height={`${to.y - from.y}`}
          style={{ left: `${Math.min(from.x, to.x) - 50}px`, top: `${from.y + 60}px` }}
        >
          <path d={path} />
        </Connector>
      );
    }
  }

  // Desktop connector
  const path = `M ${from.x} ${from.y + 60} 
               C ${from.x + 100} ${from.y + 60}, 
                 ${to.x - 100} ${to.y - 40}, 
                 ${to.x} ${to.y - 40}`;
  
  return (
    <Connector
      width={`${Math.abs(to.x - from.x)}`}
      height={`${to.y - from.y}`}
      style={{ left: `${Math.min(from.x, to.x)}px`, top: `${from.y + 60}px` }}
    >
      <path d={path} />
    </Connector>
  );
};

const Workflow = () => {
  const [dimensions, setDimensions] = React.useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })
  const [stepPositions, setStepPositions] = React.useState([]);
  const stepRefs = React.useRef(steps.map(() => React.createRef()));

  React.useEffect(() => {
    // Этот код выполняется только на клиенте
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    window.addEventListener("resize", handleResize)
    handleResize() // Инициализация при монтировании
    
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  React.useEffect(() => {
    // Только если refs существуют
    if (stepRefs.current.some(ref => ref.current)) {
      const positions = stepRefs.current.map(ref => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          return {
            x: rect.left + rect.width / 2,
            y: rect.top,
            width: rect.width,
            height: rect.height,
          }
        }
        return { x: 0, y: 0, width: 0, height: 0 }
      })
      setStepPositions(positions)
    }
  }, [dimensions])

  const isMobile = dimensions.width < 768;
  const isTablet = dimensions.width >= 768 && dimensions.width < 992;

  return (
    <WorkflowContainer>
      <Row className="justify-content-center">
        {steps.map((step, index) => {
          const position = getStepPosition(index, isMobile, isTablet);
          return (
            <React.Fragment key={index}>
              <Col 
                xs={12} 
                md={6} 
                lg={index === steps.length - 1 && steps.length % 2 !== 0 ? 12 : 6} 
                style={{
                  order: position.order,
                  marginTop: position.offset,
                  marginBottom: 30,
                }}
                ref={stepRefs.current[index]}
              >
                <WorkflowStep
                  whileHover={{ scale: 1.05 }}
                >
                  <StepIcon>{step.icon}</StepIcon>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </WorkflowStep>
              </Col>
              
              {index < steps.length - 1 && stepPositions.length > index + 1 && (
                <StepConnector
                  from={{
                    x: stepPositions[index]?.x || 0,
                    y: stepPositions[index]?.y || 0,
                    index,
                  }}
                  to={{
                    x: stepPositions[index + 1]?.x || 0,
                    y: stepPositions[index + 1]?.y || 0,
                    index: index + 1,
                  }}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              )}
            </React.Fragment>
          );
        })}
      </Row>
    </WorkflowContainer>
  );
};

export default Workflow;