import {
    ContainerBoxSection,
    BoxDiv,
    ContainerImageDiv,
    Image,
    ContainerTitleDiv,
    Title,
    ContainerParagraphDiv,
    Subtitle
} from './style';

import qrCode from '../../Assets/image-qr-code.png'

export function QrCodeCard() {
    return (
        <>
            <ContainerBoxSection>

                <BoxDiv>
                    <ContainerImageDiv>
                        <Image alt="" src={qrCode} />
                    </ContainerImageDiv>

                    <ContainerTitleDiv>
                        <Title>
                            Improve your front-end skills by building projects
                        </Title>
                    </ContainerTitleDiv>

                    <ContainerParagraphDiv>
                        <Subtitle>
                            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
                        </Subtitle>
                    </ContainerParagraphDiv>
                </BoxDiv>

            </ContainerBoxSection>
        </>
    );
}