import { pokeApi } from "@/api"
import { ImageCard } from "@/components/card/imageCard"
import { HeartIcon } from "@/components/icons/HeartIcon"
import { PokemonList, SmallPokemon } from "@/interfaces"
import { Button, Divider, Grid, Text } from "@nextui-org/react"
import { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
    pokemons: SmallPokemon[]
}
const PokeApi: NextPage<Props> = ({ pokemons }) => {
    const router = useRouter()
    const handlePokemonClick = (id: number) => {
        router.push(`/pokeapi/${id}`)
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Text
                    h1
                    css={{
                        textAlign: "center",
                        textGradient: "45deg, $blue600 -20%, $pink600 50%"
                    }}
                    weight="bold"
                >
                    PokeApi
                </Text>
                <Button
                    onClick={() => router.push("/favorites")}
                    auto
                    color="secondary"
                    flat
                    iconRight={<HeartIcon filled />}
                >
                    Favorites Pokes
                </Button>
            </div>
            <Divider />
            <div>
                <Grid.Container gap={2} justify="flex-start">
                    {pokemons.map((p, i) => (
                        <Grid xs={6} sm={3} xl={2} key={i}>
                            <div onClick={() => handlePokemonClick(p.id)}>
                                <ImageCard
                                    title={p.name}
                                    imageUrl={p.img}
                                    subTitle={` # ${i}`}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid.Container>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get<PokemonList>("/pokemon?limit=151")

    const pokemons: SmallPokemon[] = data.results.map((p, i) => ({
        ...p,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            i + 1
        }.svg`
    }))
    return {
        props: {
            pokemons
        }
    }
}

export default PokeApi
