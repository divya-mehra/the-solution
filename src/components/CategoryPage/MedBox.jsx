import { Box } from "@mui/material";
import SmallBox from "./SmallBox";
import styled from "@emotion/styled";

const MedBox = () => {
  const MedBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 4 * 4,
    gap: 4 * 20,
  });

  const stepsArr = [
    { number: 1, title: "Renew" },
    {
      number: 2,
      title: "Refresh",
    },
    {
      number: 3,
      title: "Regenerate",
    },
  ];

  return (
    <MedBox>
      {stepsArr.map((s) => (
        <SmallBox number={s.number} title={s.title} description={"des"} />
      ))}
    </MedBox>
  );
};

export default MedBox;
