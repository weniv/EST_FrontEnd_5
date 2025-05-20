import styled, { css } from "styled-components";

const Button = styled.button`
    background-color: ${(props) => (props.type ? "#007bff" : "#6c757d")};
    color: white;
    padding: ${(props) => (props.size === "large" ? "12px 24px" : "8px 16px")};
    border: none;
    border-radius: 4px;
    font-size: ${(props) => (props.size === "large" ? "16px" : "14px")}
    cursor: pointer;
`;

// 스타일 확장

const DefaultButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Color = css`
    color: white;
`;

const PrimaryButton = styled(DefaultButton)`
    background-color: #007bff;
    ${Color}
`;

// const PrimaryButton = styled.button`
//     padding: 10px 20px;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     background-color: #007bff;
//     color: white;
// `;

const DangerButton = styled(DefaultButton)`
    background-color: #dc3545;
    ${Color}
`;

export default function Buttons() {
    return (
        <>
            <Button>기본 버튼</Button>
            <Button type="primary">주요 버튼</Button>
            <Button size="large">큰 버튼</Button>
            <br />
            <br />
            <DefaultButton>기본 버튼</DefaultButton>
            <PrimaryButton>주요 버튼</PrimaryButton>
            <DangerButton>경고 버튼</DangerButton>
        </>
    );
}
