import React, { useState, useEffect } from "react";
import {
  LandingPageWrapper,
  CountBtn,
  MintContainer,
  MintContent,
  MintForm,
  MintFrom,
  MintInput,
  SwitchBtn,
  CommingSoonWrapper,
  Animbar,
} from "./styles";

import { AppLayout } from "../../layouts/AppLayout";
import {
  ContactSection,
  GitBookSection,
  RoadMapSection,
  TeamSection,
  TextTypingAnimation,
} from "../../modules";

import { GitbookButton } from "../../modules/gitbook/styles";
import { useEthContext } from "../../context/EthereumContext";
import { Contract } from "ethers";
import {
  EggHub_Abi,
  EggHub_Address,
  USDC_Abi,
  USDC_Address,
  USDT_Abi,
  USDT_Address,
} from "../../contract/contract";

import { toast } from "react-toastify";

import ReactLoading from "react-loading";

export const Landing: React.FC = () => {
  const { currentAcc, provider } = useEthContext();
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [sale, setSale] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState(false);
  const onIncrease = () => {
    if (num < 100) setNum(num + 1);
  };
  const onDecrease = () => {
    if (num >= 1) setNum(num - 1);
  };

  useEffect(() => {
    reset();
    if (provider) {
      try {
        const contract = new Contract(
          EggHub_Address,
          EggHub_Abi,
          provider.getSigner()
        );
        (async () => {
          const res = await contract.getMaxSupply();
          const status = await contract.paused();
          setStatus(status);
          setTotal(res.toString());
        })();
      } catch (error) {}
    }
  }, [provider]);
  useEffect(() => {
    if (provider) {
      const contract = new Contract(
        EggHub_Address,
        EggHub_Abi,
        provider.getSigner()
      );
      const interval = setInterval(async () => {
        try {
          const res = await contract.totalSupply();
          setSale(res.toString());
        } catch (error) {}
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [provider]);

  async function connect() {
    if (num > 0) {
      if (Number(sale) >= Number(total)) {
        toast.error("You can't mint anymore.", { theme: "dark" });
      } else {
        setLoading(true);

        if (toggle) {
          try {
            const contract = new Contract(
              USDC_Address,
              USDC_Abi,
              provider.getSigner()
            );
            const balance = await contract.balanceOf(currentAcc);
            if (Number(balance.toString()) / 10 ** 6 > 0) {
              let allowance = await contract.allowance(
                currentAcc,
                EggHub_Address
              );
              if (allowance.toString() / 10 ** 6 < 500 * num) {
                const res = await contract.approve(
                  EggHub_Address,
                  500 * Number(num)
                );
                await res.wait();
              }
              const egg_contract = new Contract(
                EggHub_Address,
                EggHub_Abi,
                provider.getSigner()
              );
              const tx = await egg_contract.mintUSDC(currentAcc, num);
              await tx.wait();
              await toast.success("Successfully Minted.", { theme: "dark" });
              await reset();
              await setLoading(false);
            } else {
              toast.error("Insufficient USDC Balance.", { theme: "dark" });
              await setLoading(false);
            }
          } catch (error: any) {
            if (error.data !== undefined) {
              if (error.data.message.includes("Exceeds max supply!")) {
                toast.error("Exceeds max supply!", { theme: "dark" });
              } else {
                toast.error("Transaction error!", { theme: "dark" });
              }
            } else {
              toast.error("Transaction rejected!", { theme: "dark" });
            }
            await setLoading(false);
          }
        } else {
          try {
            const contract = new Contract(
              USDT_Address,
              USDT_Abi,
              provider.getSigner()
            );
            const balance = await contract.balanceOf(currentAcc);

            if (Number(balance.toString()) / 10 ** 6 > 0) {
              let allowance = await contract.allowance(
                currentAcc,
                EggHub_Address
              );
              if (allowance.toString() / 10 ** 6 < 500 * num) {
                const res = await contract.approve(
                  EggHub_Address,
                  500 * Number(num)
                );
                await res.wait();
              }

              const egg_contract = new Contract(
                EggHub_Address,
                EggHub_Abi,
                provider.getSigner()
              );
              const tx = await egg_contract.mintUSDT(num);
              await tx.wait();
              await toast.success("Successfully Minted.", { theme: "dark" });
              await reset();
              await setLoading(false);
            } else {
              toast.error("Insufficient USDT Balance.", { theme: "dark" });
              await setLoading(false);
            }
          } catch (error: any) {
            if (error.data !== undefined) {
              if (error.data.message.includes("Exceeds max supply!")) {
                toast.error("Exceeds max supply!", { theme: "dark" });
              } else {
                toast.error("Transaction error!", { theme: "dark" });
              }
            } else {
              toast.error("Transaction rejected!", { theme: "dark" });
            }
            await setLoading(false);
          }
        }
      }
    } else {
      toast.error("Enter Count", { theme: "dark" });
    }
  }
  const reset = () => {
    setNum(0);
  };
  return (
    <AppLayout>
      <LandingPageWrapper id="home">
        <h1 id="home-title">
          <b>EGGCELLENT NFT CLUB</b>
          <br />
          <span>Chicken Eggs Farming</span>
          <TextTypingAnimation
            className="block"
            key="line-1"
            texts={["Backed by Real-World Poultry Farm in Malaysia "]}
          />
        </h1>
        <CommingSoonWrapper>
          <span>Coming Soon - Check in Discord</span>
          <Animbar />
        </CommingSoonWrapper>
        {currentAcc && (
          <MintFrom>
            <MintContent>
              <img src="/assets/images/reveal.png" className="chicken" alt="" />
            </MintContent>
            <MintContainer>
              <MintForm>
                <MintInput type="number" value={num} readOnly />
                <div>
                  <CountBtn
                    style={{ borderRadius: "0 10px 0 0" }}
                    onClick={onIncrease}
                  >
                    +
                  </CountBtn>
                  <CountBtn
                    style={{ borderRadius: "0 0 10px 0" }}
                    onClick={onDecrease}
                  >
                    -
                  </CountBtn>
                </div>
              </MintForm>
              <span>
                {sale}/{total}
              </span>
              <SwitchBtn>
                <input
                  checked={toggle}
                  onChange={() => setToggle(!toggle)}
                  type="checkbox"
                  id={"react-switch-new"}
                  className="react-switch-checkbox"
                />
                <label
                  style={{ background: toggle ? "#0098e4" : "#8459FF" }}
                  className="react-switch-label"
                  htmlFor={"react-switch-new"}
                >
                  <span className={"react-switch-button"} />
                </label>
              </SwitchBtn>

              {!status ? (
                <GitbookButton
                  className="check"
                  onClick={() => !loading && connect()}
                  style={{
                    borderRadius: "15px",
                    width: "130px",
                    height: "40px",
                  }}
                >
                  {currentAcc ? (
                    loading ? (
                      <ReactLoading
                        type={"spokes"}
                        color={"#0098e4"}
                        height={"30px"}
                        width={"30px"}
                      />
                    ) : (
                      `${toggle ? "USDC" : "USDT"} Mint`
                    )
                  ) : (
                    "Connect Wallet"
                  )}
                </GitbookButton>
              ) : (
                <span style={{ marginTop: "10px", fontSize: "25px" }}>
                  Paused
                </span>
              )}
            </MintContainer>
          </MintFrom>
        )}
      </LandingPageWrapper>

      <GitBookSection />
      <RoadMapSection />
      <TeamSection />
      <ContactSection />
    </AppLayout>
  );
};
