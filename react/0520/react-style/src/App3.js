import styled, { css } from "styled-components";

const StyledButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    background-color: ${(props) => props.color || "#007bff"};

    ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
        `}

    &:hover {
        ${(props) =>
            props.size === "large" &&
            css`
                transform: scale(1.5);
            `}
    }
`;

const DangerButton = styled(StyledButton)`
    background-color: #ff1128;
`;

const SuccessButton = styled(StyledButton)`
    background-color: #00d559;
`;

function Button({ children, variant, ...props }) {
    if (variant === "danger") {
        return <DangerButton {...props}>{children}</DangerButton>;
    } else if (variant === "success") {
        return <SuccessButton {...props}>{children}</SuccessButton>;
    }
    return <StyledButton {...props}>{children}</StyledButton>;
}

export default function App3() {
    return (
        <>
            <Button>기본 버튼</Button>
            <Button variant="danger" fullWidth>
                경고 버튼
            </Button>
            <Button variant="success" size="large">
                성공 버튼
            </Button>
        </>
    );
}
