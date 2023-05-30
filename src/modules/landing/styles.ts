import { styled } from "styled-components";

export const TypeWrapper = styled.span`
  display: block;
  line-height: 30px;
  font-size: 26px !important;
  margin-top: 24px;
  @keyframes blinking {
    from {
      color: #f92672;
    }
    to {
      color: transparent;
    }
  }
  .cursor {
    font-size: 30px !important;
    animation: blinking 0.8s infinite;
  }
  @media screen and (max-width: 425px) {
    font-size: 20px !important;
    .cursor {
      font-size: 20px !important;
    }
  }
`;
