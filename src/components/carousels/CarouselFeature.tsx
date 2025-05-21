"use client"
import styled from "styled-components"
import { useState, useRef, useEffect } from "react"
import { IoWarningOutline, IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";

// Iconos de navegación como componentes SVG
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6"></path>
  </svg>
)

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>
)

// Estilos de componentes UI con styled-components
const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
`

const CarouselContentContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const CarouselWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
  padding-bottom: 2rem;
`

const CarouselContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  transition: transform 0.3s ease;
`

const CarouselItemWrapper = styled.div`
  flex: 0 0 100%;
  padding: 0;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    flex: 0 0 50%;
  }
  
  @media (min-width: 1024px) {
    flex: 0 0 33.333%;
  }
`

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  flex-grow: 1;
`

const CardFooterWrapper = styled.div`
  padding: 0 2rem 2rem;
`

const CardTitleWrapper = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  hyphens: unset;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  color: ${({ theme }) => theme.colors.textOrange};
  background-color: #ffe8d9;
  margin-bottom: 1rem;
  font-size: 1.6rem;
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #f0bca0;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  width: 100%;
  border: none;
  transition: ease-in-out 0.5s;
  
  &:hover {
    transition: ease-in-out 0.5s;
    background-color: #e48d5e;
  }
`

const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.colors.textBlack};
`

const PrevButton = styled(NavigationButton)`
  left: 0;
  transform: translate(-50%, -50%);
`

const NextButton = styled(NavigationButton)`
  right: 0;
  transform: translate(50%, -50%);
`

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #e1d3cb;
`

interface CarouselFeatureProps {
  openModal: () => void
  openModalTips: () => void
}

const CarouselFeature: React.FC<CarouselFeatureProps> = ({ openModal, openModalTips }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideCount, setSlideCount] = useState(1)
  const contentRef = useRef<HTMLDivElement>(null)

  // Determinar cuántas tarjetas mostrar según el ancho de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlideCount(3)
      } else if (window.innerWidth >= 768) {
        setSlideCount(2)
      } else {
        setSlideCount(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Visita SkillSwap · Looking for Skill",
          text: "¡Yo ya hago parte de la comunidad SkillSwap! Aventúrate a intercambiar habilidades digitales.",
          url: "https://skill-swap-ten.vercel.app/",
        })
        .then(() => console.log("Compartido exitosamente"))
        .catch((err) => console.error("Error al compartir", err))
    } else {
      alert("Tu navegador no soporta la opción de compartir directamente.")
    }
  }

  const features = [
    {
      title: "Reportar Usuario",
      icon: <IoWarningOutline />,
      description:
        "¿Encontraste un comportamiento inapropiado? Reporta al usuario para mantener nuestra comunidad segura.",
      action: openModal,
      buttonText: "Reportar",
    },
    {
      title: "Tips de Seguridad",
      icon: <AiOutlineSafety />,
      description: "Conoce nuestras recomendaciones para mantener tu cuenta segura y tener una mejor experiencia.",
      action: openModalTips,
      buttonText: "Ver Tips",
    },
    {
      title: "Compartir Sitio",
      icon: <IoShareSocialOutline />,
      description: "Invita a tus amigos a unirse a nuestra comunidad de intercambio de habilidades digitales.",
      action: handleShare,
      buttonText: "Compartir",
    },
  ]

  const totalSlides = features.length
  const maxIndex = Math.max(0, totalSlides - slideCount)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <CarouselContentContainer>
          <CarouselContentWrapper
            ref={contentRef}
            style={{ transform: `translateX(-${currentIndex * (100 / slideCount)}%)` }}
          >
            {features.map((feature, index) => (
              <CarouselItemWrapper key={index}>
                <CardWrapper>
                  <CardContentWrapper>
                    <IconWrapper>{feature.icon}</IconWrapper>
                    <CardTitleWrapper>{feature.title}</CardTitleWrapper>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContentWrapper>
                  <CardFooterWrapper>
                    <Button onClick={feature.action}>{feature.buttonText}</Button>
                  </CardFooterWrapper>
                </CardWrapper>
              </CarouselItemWrapper>
            ))}
          </CarouselContentWrapper>
        </CarouselContentContainer>

        <div className="hidden sm:flex">
          {currentIndex > 0 && (
            <PrevButton onClick={handlePrevious}>
              <ChevronLeftIcon />
            </PrevButton>
          )}
          {currentIndex < maxIndex && (
            <NextButton onClick={handleNext}>
              <ChevronRightIcon />
            </NextButton>
          )}
        </div>
      </CarouselContainer>

      <DotsContainer>
        {features.map((_, index) => (
          <Dot key={index} />
        ))}
      </DotsContainer>
    </CarouselWrapper>
  )
}

export default CarouselFeature;