"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import WidgetContainer from "../../../../components/containers/WidgetContainer/WidgetContainer";
import { getUserById, toggleUserAccountState } from "../../../../lib/api/users";

//Container for the whole page.tsx

const PageContainer = styled.section`
  width: 100%;

  height: 100%;

  margin: 54px 0;

  display: flex;

  position: relative;

  justify-content: center;

  background-color: ${({ theme }) => theme.colors.bgPrimary};

  & h1 {
    margin: 0;

    height: min-content;

    translate: 0 30px;

    font-size: 100px;

    opacity: 0.15;

    padding-left: 1.7rem;
  }

  & h2 {
    margin: 0;

    padding-bottom: 10px;

    margin-bottom: 20px;

    width: 70%;

    font-size: 40px;

    border-bottom: 2px solid ${({ theme }) => theme.colors.textYellow};

    background: ${({ theme }) => theme.colors.gradientSecondary};

    -webkit-background-clip: text;

    background-clip: text;

    -webkit-text-fill-color: transparent;
  }

  & h3 {
    margin: 0;

    padding: 10px 30px;

    width: 100% !important;

    font-size: 25px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.textBlack};
  }

  & h4 {
    margin: 0;

    margin-bottom: 10px;

    width: 100%;

    font-size: 25px;
  }

  & p {
    margin: 0;

    width: 100%;

    font-size: 16px;

    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

//Container for page.tsx content

const PageContentContainer = styled.article`
  width: 100%;

  height: 100%;

  display: flex;

  justify-content: center;

  margin: 20px;
`;

//Containers for banner

const Banner = styled.article`
  top: 0;

  padding: 20px;

  position: absolute;

  width: 100%;

  height: 200px;

  display: flex;

  justify-content: center;

  background-color: ${({ theme }) => theme.colors.bgBanner};
`;

const BannerBody = styled.div`
  width: 1000px !important;

  display: flex;

  justify-content: space-between;
`;

//Container for INFO content

const InfoPageContainer = styled.div`
  padding-top: 200px;

  width: 100%;

  max-width: 1000px;

  display: flex;

  align-items: start;

  flex-direction: column;
`;

const PageContent = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-between;

  gap: 20px;
`;

const PageBody = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 20px;

  padding: 2rem;
`;

//Containers for Widgets and Aside

const WidgetBody = styled.div`
  padding: 20px 30px;

  width: 100%;

  min-width: 220px;

  display: flex;

  flex-direction: column;
`;

const DivDeactivateAccount = styled.div`
  width: 100%;

  display: flex;

  justify-content: end;

  align-items: end;

  padding: 2rem;

  gap: 2rem;

  & div {
    max-width: 400px;

    & p {
      font-size: 15px;
    }
  }
`;

const ButtonDeactivate = styled.button`
  min-width: 100px;

  width: 100px;

  text-align: center;

  border-radius: 10px;

  margin: 10px 0;

  background-color: transparent;

  padding: 10px;

  font-weight: 600;

  color: ${({ theme }) => theme.colors.textRed};

  border: ${({ theme }) => theme.colors.textRed} 2px solid;

  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textRed};

    color: ${({ theme }) => theme.colors.textPrimary};

    border: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.bgDisabled};

    color: ${({ theme }) => theme.colors.textDisabled};

    cursor: not-allowed;
  }
`;

const AccountStateButton = styled.div`
  width: 100px;

  text-align: center;

  border-radius: 50px;

  margin: 10px 0;

  padding: 2px;

  font-size: 15px;

  font-weight: 600;

  color: ${({ theme }) => theme.colors.textOrange};

  border: ${({ theme }) => theme.colors.textOrange} 2px solid;
`;

const UserInfo = () => {
  const [accountState, setAccountState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccountState = async () => {
      const idString = localStorage.getItem("userId");
      const idNumber = idString ? parseInt(idString, 10) : null;

      if (!idNumber) {
        setError("ID de usuario no encontrado");
        setLoading(false);
        return;
      }

      try {
        const data = await getUserById(idNumber);
        setAccountState(data.nameStateUser ?? "Estado desconocido"); // Ajusta según la estructura de la respuesta
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountState();
  }, []);

  const handleToggleAccountState = async () => {
    const idString = localStorage.getItem("userId");
    const idNumber = idString ? parseInt(idString, 10) : null;

    if (!idNumber) return;

    const newAction = accountState === "Activo" ? "deshabilitar" : "habilitar";

    try {
      const data = await toggleUserAccountState(idNumber, newAction);
      setAccountState(data); // Actualiza el estado con el nuevo valor
    } catch (err) {
      setError(err as string);
    }
  };

  // Render del componente

  return (
    <PageContainer>
      <Banner>
        <BannerBody>
          <h1>Info</h1>
        </BannerBody>
      </Banner>

      <PageContentContainer>
        <InfoPageContainer>
          <PageContent>
            <PageBody>
              <h2>Configuración de Cuenta</h2>

              <WidgetContainer>
                <WidgetBody>
                  <h4>Estado de Cuenta</h4>

                  {loading ? (
                    <p>Cargando...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : (
                    <AccountStateButton>✦ {accountState}</AccountStateButton>
                  )}
                </WidgetBody>

                <DivDeactivateAccount>
                  <ButtonDeactivate
                    onClick={handleToggleAccountState}
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
                    <h4>Desactivar tu cuenta</h4>
                    <p>
                      <strong> Atención: </strong>Al desactivar tu cuenta tu
                      información permanecerá segura y no será eliminada.
                    </p>
                  </div>
                </DivDeactivateAccount>
              </WidgetContainer>
            </PageBody>
          </PageContent>
        </InfoPageContainer>
      </PageContentContainer>
    </PageContainer>
  );
};

export default UserInfo;
