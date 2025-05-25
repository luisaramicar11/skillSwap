"use client";
import styled from "styled-components";
import ModalConfirm from "@/src/components/modals/ModalConfirm";
import WidgetContainer from "../../../../components/containers/WidgetContainer/WidgetContainer";
import { useEffect, useState } from "react";
import { getUserById, toggleUserAccountState } from "../../../api/users";
import { FooterMain } from '@/src/components/footer/FooterMain';
import { toast } from "react-toastify";
import { GrStatusGoodSmall } from "react-icons/gr";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
});

//Container for the whole page.tsx
const PageContainer = styled.section`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;

  & h1 {
    margin: 0;
    height: min-content;
    translate: 0 1rem;
    font-size: 70px;
    opacity: 0.15;
    padding-left: 1rem;
  }

  & h3 {
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textDark};
  }

  & p {
    margin: 0;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  & strong{
    font-weight: bold;
  }
`;

//Container for page.tsx content
const Container = styled.div`
  width: 100%;
  margin: 54px 0;
`;

//Containers for banner
const Banner = styled.article`
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 10px;
  width: 100%;
`;

const BannerBody = styled.div`
  width: 1000px !important;
  display: flex;
  justify-content: space-between;
`;

//Container for INFO content
const PageContent = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 769px) {
    padding-bottom: 0;
  }
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

//Containers for Widgets and Aside
const WidgetBody = styled.div`
  padding: 1.5rem 2rem;
  width: 100%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
    font-size: 0.9rem !important;
    max-width: 300px !important;
    hyphens: unset;
`;

const DivDeactivateAccount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  align-items: end;
  padding: 2rem;
  gap: 2rem;

  & div {
    max-width: 400px;

    & p {
      font-size: 15px;
      hyphens: unset;
    }
  }
`;

const ButtonDeactivate = styled.button<({ color: string }) >`
  min-width: 100px;
  width: 30vw;
  max-width: 250px;
  text-align: center;
  border-radius: 10px;
  background-color: transparent;
  padding: 10px;
  font-weight: 500;
  color: ${(props) => props.color};
  border: ${(props) => props.color} 1px solid;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.color};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.bgDisabled};
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }
`;

const AccountStateTag = styled.div<({ color: string }) >`
  width: 100px;
  text-align: center;
  border-radius: 50px;
  margin: 10px 0;
  padding: 2px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.color};
  border: ${(props) => props.color} 1px solid;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-family: ${urbanist.style.fontFamily};
`;

const UserInfo = () => {
  const [accountState, setAccountState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAccountState = async () => {
      if (typeof window !== 'undefined') {
        const idString = localStorage.getItem("userId");
        const idNumber = idString ? parseInt(idString, 10) : null;

        if (!idNumber) {
          setError("Error: ID de usuario no encontrado");
          setLoading(false);
          return;
        }

        try {
          const data = await getUserById(idNumber);
          setAccountState(data.nameStateUser ?? "Estado desconocido");
        } catch (err) {
          setError(err as string);
        } finally {
          setLoading(false);
        }
      };
    }
    fetchAccountState();
  }, []);

  const handleToggleAccountState = async () => {
    if (typeof window !== 'undefined') {
      const idString = localStorage.getItem("userId");
      const idNumber = idString ? parseInt(idString, 10) : null;

      if (!idNumber) return;

      const newAction = accountState === "Activo" ? "deshabilitar" : "habilitar";

      try {
        const data = await toggleUserAccountState(idNumber, newAction);
        setAccountState(data);
        toast.success(`Se logró ${newAction} tu cuenta con éxito.`);
      } catch (err) {
        setError(err as string);
        toast.error(`No se pudo ${newAction} tu cuenta. Intenta de nuevo.`);
      }
    }
  };

  const stateBtnColor = () => {
    if (accountState === "Activo") return "#2C8560";
    else if (accountState === "Inactivo") return "#D13B00";
    else return "#707070";
  }

  const changeStateBtnColor = () => {
    if (accountState === "Activo") return "#D13B00";
    else if (accountState === "Inactivo") return "#2C8560";
    else return "#707070";
  }

  // Render del componente
  return (
    <Container>
      <ModalConfirm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          handleToggleAccountState();
          setIsModalOpen(false);
        }}
      />
      <PageContainer>
        <PageContent>
          <Banner>
            <BannerBody>
              <h1>Info</h1>
            </BannerBody>
          </Banner>
          <PageBody>
            <WidgetContainer>
              <WidgetBody>
                <h3>Estado de cuenta</h3>
                <P>
                  Aquí podrás ver en que condición se encuentra tu cuenta actualmente.
                </P>
                <br />

                {loading ? (
                  <p>Cargando...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <AccountStateTag color={stateBtnColor()}><GrStatusGoodSmall />{accountState}</AccountStateTag>
                )}
              </WidgetBody>

              <DivDeactivateAccount>
                <ButtonDeactivate
                  color={changeStateBtnColor()}
                  onClick={() => setIsModalOpen(true)}
                  disabled={accountState === "Suspendido"} // Deshabilita el botón si está suspendido
                >
                  {accountState === "Activo"
                    ? "Deshabilitar cuenta"
                    : "Habilitar cuenta"}
                </ButtonDeactivate>

                {accountState === "Suspendido" && (
                  <p>
                    Tu cuenta ha sido suspendida por un administrador. No
                    puedes cambiar el estado hasta que el administrador lo
                    restaure.
                  </p>
                )}

                <div>
                  <h3>Deshabilitación de cuenta</h3>
                  <p>
                    <strong> Atención: </strong>Al desactivar tu cuenta de SkillSwap, toda tu
                    información permanecerá segura y no será eliminada.
                  </p>
                </div>
              </DivDeactivateAccount>
            </WidgetContainer>
          </PageBody>
        </PageContent>
      </PageContainer>
      <FooterMain />
    </Container>
  );
};

export default UserInfo;
