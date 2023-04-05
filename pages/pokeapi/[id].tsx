import { pokeApi } from "@/api"
import { PokemonFull } from "@/interfaces"
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react"
import { GetStaticProps, NextPage, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import React from "react"

interface Props {
    pokemon: PokemonFull
}

const PokeDetails: NextPage<Props> = ({ pokemon }) => {
    return (
        <div>
            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card
                        isHoverable
                        css={{ padding: "30px", background: "transparent" }}
                    >
                        <Card.Body>
                            <Card.Image
                                alt={pokemon.name}
                                src={
                                    pokemon.sprites.other?.dream_world
                                        .front_default || "/no-image.png"
                                }
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card css={{ background: "transparent" }}>
                        <Card.Header
                            css={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <Text h1 transform="capitalize">
                                {pokemon.name}
                            </Text>
                            <Button color="gradient" ghost>
                                Favorite
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction="row" display="flex">
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = Array.from({ length: 151 }, (_, index) =>
        (index + 1).toString()
    )
    return {
        paths: pokemons151.map((id) => ({
            params: { id }
        })),
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string }

    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${id}`)

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokeDetails
