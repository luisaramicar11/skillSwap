import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 70%;
  background-color: #fff;
  margin-bottom: 1rem;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  padding-left: 1.5rem;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  margin-top: 2rem;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 0rem;
`;

const UserTitle = styled.h2`
  font-size: 18px;
  color: #777;
  font-style: italic;
  font-weight: 400;
  margin-top: 0;
`;

const VerificationStatus = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.1rem;
`;

const Verified = styled.span`
  color: ${({ theme }) => theme.colors.textBlueDark};
  padding: 1.5px 20px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.textBlueDark};
  font-size: 12px;
  font-weight: bold;
`;

const Unknown = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  padding: 1.5px 20px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.textDark};
  font-size: 12px;
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 13rem;
  height: 13rem;
  border-radius: 10px;
  position: absolute;
  top: 3.5rem;
  right: 3rem;
  margin-bottom: 0rem;
`;

const ConnectionsRating = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0;
  padding-bottom: 0;
`;

const Connections = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding-bottom: 0;

  div {
    font-size: 1rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 20px;
  padding: 2rem;
  padding-bottom: 0rem;
`;

const SkillButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPurple};
  border: 1px solid ${({ theme }) => theme.colors.textPurple};
  padding: 5px 40px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
`;

const UserDescription = styled.div`
  width: 12rem;
  height: 13rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  margin-top: 0rem;
  margin-right: 3rem;
`;

const H3 = styled.h3`
  text-align: start;
  padding: 0.3rem 1rem;
  margin: 0;
  font-size: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textDark};
  font-weight: bold;
`;
const P = styled.p`
  text-align: start;
  padding: 0.6rem 1rem;
  margin: 0;
  font-size: 0.8rem;
  color: #000;
  font-weight: 400;
`;

const RatingSection = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    font-size: 1rem;
  }
`;

const RatingStars = styled.div`
  color: #f5c518;
  font-size: 1.2rem;
`;

const DivRating = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin: 0 2px;
`;

const DivUserDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 2rem;
`;
const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22rem;
  align-items: flex-start;
  width: 70%;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Placeholder = styled.div`
  text-align: center;
`;

const SmallText = styled.p`
  font-size: 16px;
  color: #b3b3b3;
  margin: 0;
`;

const LargeText = styled.p`
  font-size: 18px;
  color: #b3b3b3;
  font-weight: bold;
  margin: 0;
`;

const SendButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 15px 25px;
  width: 50%;
  height: 3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const ButtonText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Arrow = styled.span`
  font-size: 20px;
  margin-left: 10px;
`;

const UserProfile = () => {
  return (
    <>
      <ProfileContainer>
        <Header>
          <UserInfo>
            <UserName>Alicia Keys</UserName>
            <UserTitle>Back-end Software Developer | Junior</UserTitle>
            <VerificationStatus>
              <Verified>Verified</Verified>
              <Unknown>Unknown</Unknown>
            </VerificationStatus>
            <ConnectionsRating>
              <Connections>
                <span>Connections</span>
                <span>30</span>
              </Connections>
              <RatingSection>
                <div>Rating</div>
                <DivRating>
                  <div>4.5</div>
                  <RatingStars>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index}>
                        {index < 4.5 ? "★" : "☆"}{" "}
                        {/* Muestra estrellas llenas o vacías */}
                      </Star>
                    ))}
                  </RatingStars>
                </DivRating>
              </RatingSection>
            </ConnectionsRating>
          </UserInfo>
          <ProfileImage
            src="https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2020/09/Alicia-Keys-69194_SP1_200107_AK_MZ_SHOT_01_074_a.jpg"
            alt="User Image"
          />
        </Header>

        <Skills>
          <SkillButton>HTML - Beginner</SkillButton>
          <SkillButton>Java - Beginner</SkillButton>
          <SkillButton>SpringBoot - Beginner</SkillButton>
        </Skills>
        <DivUserDescription>
          <SendButton>
            <ButtonText>SEND REQUEST</ButtonText>
            <Arrow>→</Arrow>
          </SendButton>
          <UserDescription>
            <H3>Description</H3>
            <P>Back-end Software Developer | Junior</P>
          </UserDescription>
        </DivUserDescription>

        <RequestContainer>
          {/* <InfoBox>
  <Placeholder>
    <SmallText>Wanting to know more?</SmallText>
    <LargeText>Send a request.</LargeText>
  </Placeholder>
</InfoBox> */}
          {/* <SendButton>
  <ButtonText>SEND REQUEST</ButtonText>
  <Arrow>→</Arrow>
</SendButton> */}
        </RequestContainer>
      </ProfileContainer>
    </>
  );
};

export default UserProfile;
