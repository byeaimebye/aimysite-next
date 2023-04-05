import { Card, Col, Text } from "@nextui-org/react"
import { useRouter } from "next/router"

interface PropTypes {
    title: string
    subTitle?: string
    imageUrl?: string
}

export const ImageCard = ({ title, subTitle, imageUrl }: PropTypes) => {
    return (
        <Card
            isPressable
            css={{
                width: "100%",
                background: "transparent",
                boxShadow:
                    "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;"
            }}
        >
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text
                        h4
                        weight="bold"
                        transform="uppercase"
                        color="#ffffffAA"
                    >
                        {title}
                    </Text>
                    <Text h4 color="white">
                        {subTitle}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src={
                    imageUrl || "https://nextui.org/images/card-example-4.jpeg"
                }
                objectFit="cover"
                width="100%"
                height={340}
                alt="Card image background"
            />
        </Card>
    )
}
