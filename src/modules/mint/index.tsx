import { NavMint } from "../../layouts/styles";
import { useEthContext } from "../../context/EthereumContext";
export const MintButton = () => {
  const { currentAcc } = useEthContext();

  return (
    <NavMint style={{ margin: 0 }}>
      <img src="/assets/images/metamask.svg" alt="" />
      {currentAcc
        ? `${currentAcc.substring(0, 2)}${currentAcc.substring(38)}`
        : "Mint"}
    </NavMint>
  );
};
