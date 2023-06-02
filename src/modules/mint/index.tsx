import { NavMint } from "../../layouts/styles";
import { useEthContext } from "../../context/EthereumContext";
export const MintButton = () => {
  const { currentAcc, connect } = useEthContext();

  return (
    <NavMint onClick={connect} style={{ margin: 0 }}>
      <img src="/assets/images/metamask.svg" alt="" />
      {currentAcc
        ? `${currentAcc.substring(0, 2)}${currentAcc.substring(38)}`
        : "Mint"}
    </NavMint>
  );
};
