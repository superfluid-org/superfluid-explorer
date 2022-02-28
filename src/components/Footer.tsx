import { Box } from "@mui/system";
import { FC } from "react";
import AppLink from "./AppLink";

const Footer: FC = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
            opacity: 0.6
        }}>
            <p>
                By using this web app, you accept our{' '}
                <AppLink
                    data-cy={"terms-of-use-link"}
                    href="https://www.superfluid.finance/termsofuse/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <strong>Terms of Use</strong>
                </AppLink>{' '}
                and{' '}
                <AppLink
                    data-cy={"privacy-policy-link"}
                    href="https://www.iubenda.com/privacy-policy/34415583/legal"
                    target="_blank"
                    rel="noreferrer"
                >
                    <strong>Privacy Policy</strong>
                </AppLink>.
            </p>
        </Box>
    );
}

export default Footer;
